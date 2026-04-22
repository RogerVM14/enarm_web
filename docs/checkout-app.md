# Checkout y pagos — comportamiento actual (`enarm_web`)

Base URL: `process.env.REACT_APP_ENARM_API_GATEWAY_URL` (sin barra final al final del env; las rutas se concatenan como `` `${URL}payments/...` ``).

---

## Variables de entorno usadas en checkout

| Variable | Archivo(s) |
|----------|------------|
| `REACT_APP_ENARM_API_GATEWAY_URL` | `src/apis/Checkout/CardPayment.js`, `src/apis/MercadoPago/MercadoPagoApi.js` |
| `REACT_APP_MP_PUBLIC_KEY` | `src/components/MercadoPago/CheckoutForm.js` |

Monto del curso en front: `CONFIG.PRICE` en `src/constants/config.js` (hoy `6300`).

---

## 1. Mercado Pago — preferencia (Wallet / “checkout MP”)

### `POST` `{REACT_APP_ENARM_API_GATEWAY_URL}payments/mercado-pago/create-preference-id`

**Headers:** `Content-Type: application/json`

**Body:** vacío (axios no envía `data`; es un POST sin cuerpo).

**Cliente:** `fetchMercadoPagoPreferenceId` → `CheckoutForm.js`

### Respuesta que espera la app

Lee solo:

- `response.data.body.preferenceId` (string), asignado a estado y pasado a `<Wallet initialization={{ preferenceId }} />`.

**Validación en código:** ninguna explícita; si falla el request, el `catch` está comentado y `preferenceId` queda `null` (se muestra botón skeleton deshabilitado).

---

## 2. Tarjeta — crear token

### `POST` `{REACT_APP_ENARM_API_GATEWAY_URL}payments/mercado-pago/create-token`

**Headers:** `Content-Type: application/json`

**Body enviado** (`CheckoutPage.js` → `createTokenCardForPayment`):

```json
{
  "cardNumber": "<string, solo dígitos; en UI se quitan guiones>",
  "expirationMonth": <number>,
  "expirationYear": <number, 2 dígitos>,
  "securityCode": "<string, cvv>",
  "cardholderName": "APRO",
  "docType": "RFC",
  "docNumber": "123456789012"
}
```

**Origen de campos en UI:**

- `cardNumber`: del store; antes de enviar `cardNumber.replace(/-/g, "")`.
- `expirationDate` del store formato `MM/...`; se hace `split("/")`:
  - `expirationMonth` → `parseInt(expirationMonth, 10)`.
  - `expirationYear` → `parseInt(expirationYear.slice(-2), 10)` (toma los últimos 2 caracteres de la parte después de `/`; si el usuario escribe `MM/YY` o `MM/YYYY`, el año siempre se reduce a 2 dígitos con `slice(-2)`).

**Nota:** `cardOwnerName` del formulario no se envía hoy; el nombre va fijo `"APRO"` (pruebas MP).

### Respuesta que espera la app

- Éxito para continuar: `response.data.statusCode === 200`.
- Token: `response.data.body.token`.

**Validación en código:**

1. Si `statusCode === 200` → se llama a `create-payment` con ese `token`.
2. Si `statusCode !== 200` → el `then` no hace nada más; **`setLoading(false)` no se ejecuta en esa rama** (el loader puede quedarse activo).

**Errores de red / HTTP:** el `.catch` de `createTokenCardForPayment` hace `setLoading(false)` y `console.error(error)`.

---

## 3. Tarjeta — crear pago

### `POST` `{REACT_APP_ENARM_API_GATEWAY_URL}payments/mercado-pago/create-payment`

**Headers:** `Content-Type: application/json`

**Body enviado** (`CheckoutPage.js` → `createPaymentWithCard`):

```json
{
  "token": "<string del paso anterior>",
  "transactionAmount": 6300,
  "description": "Compra curso ENARM",
  "installments": 1,
  "payerEmail": "<user_checkout_email del store o string vacío>"
}
```

`transactionAmount` es literalmente `CONFIG.PRICE`.

### Respuesta que espera la app

Asigna `const data = response.data.body` y desestructura:

```js
const { status, status_detail, id, message, error } = data;
```

**Ramas según `data`:**

| Condición | Acción |
|-----------|--------|
| `message === "Hubo un error al generar el pago"` y `error === "Payer email forbidden"` | Toast: *"Tú email es inválido para realizar la compra"* |
| `status === "rejected"` | `setLoading(false)` + toast *"Tu tarjeta fue rechazada..."* |
| `status === "approved"` y `status_detail === "accredited"` | Arma `paymentInfo` y llama `savePaymentInformationOnDataBase` (ver sección 4, flujo tarjeta) |

**Campos adicionales leídos solo en éxito (`approved` + `accredited`):**

- `data.transaction_details.total_paid_amount`
- `data.transaction_details.net_received_amount`
- `id` → `external_order_id` en persistencia

**Comisión en cliente:** `total_paid_amount - net_received_amount` (si alguno es `undefined`, el resultado puede ser `NaN`).

**Al final del `.then` de create-payment:** siempre se ejecuta `setLoading(false)` (línea siguiente al bloque de ramas), salvo que el flujo async interno lo vuelva a tocar antes.

**Validación ausente en código:** no hay `.catch` dedicado a `createPaymentWithCard`; un fallo de red puede no resetear loading de forma controlada con toast.

---

## 4. Persistir pago — `add-course-payment`

### `POST` `{REACT_APP_ENARM_API_GATEWAY_URL}students/add-course-payment`

**Headers:** `Content-Type: application/json`

### 4.A Después de pago con **tarjeta** aprobado

**Body:**

```json
{
  "user_id": "<selectEffectiveCheckoutUserId>",
  "payment_method": "Tarjeta",
  "external_order_id": "<id del body de create-payment>",
  "total": "<number o 0; data.transaction_details.total_paid_amount || 0>",
  "subtotal": "<data.transaction_details.net_received_amount | 0 — en código es OR bitwise `|`, no `||`>",
  "commission": "<total_paid_amount - net_received_amount>",
  "payment_transaction_status": "<status, ej. approved>",
  "payment_transaction_verification": true
}
```

### 4.B Después de retorno **Mercado Pago** (página éxito)

**Query string obligatoria** (`CheckoutPageGratification.js`): `payment_id` y `status`. Si falta cualquiera, **no** llama a la API.

**Body:**

```json
{
  "user_id": "<selectEffectiveCheckoutUserId>",
  "payment_method": "Mercado Pago",
  "external_order_id": "<payment_id de la query>",
  "total": 6300,
  "subtotal": 6300,
  "commission": 0,
  "payment_transaction_status": "<status de la query>",
  "payment_transaction_verification": true solo si status === \"approved\", si no false
}
```

Los montos son siempre `CONFIG.PRICE` (no vienen del proveedor en este flujo).

### Respuesta que espera la app

**Solo en flujo tarjeta** (`CheckoutPage.js`): lee `res.data.status_Message`.

| `status_Message` | Acción |
|------------------|--------|
| `"payment transaction success"` | `setLoading(false)` + `navigate(ROUTES.CHECKOUT_SUCCESS)` |
| Cualquier otro | `setLoading(false)` + toast *"Hubo un error al intentar pagar tu curso"* |

**`.catch`:** mismo toast y `setLoading(false)`.

**Flujo Mercado Pago** (`CheckoutPageGratification.js`): no inspecciona `status_Message`; solo `.then` → toast éxito; `.catch` → toast error. Siempre `setIsLoading(false)` en `finally`.

---

## 5. Validaciones solo en UI (antes de llamar APIs)

**Archivo:** `src/components/checkout/PaymentDetailsContainer.js`

Botón *Aceptar compra* deshabilitado si falta cualquiera:

- `cardNumber`, `cvv`, `expirationDate`, `cardOwnerName` (todos del store).

**Archivo:** `src/components/checkout/PaymentOptionsContainer.js`

- Número: solo dígitos; se formatea con guiones cada 4.
- CVV: solo dígitos, máximo 4.
- Expiración: solo dígitos; formato `MM/` + hasta 4 caracteres de año (`slice(0, 6)` del valor numérico limpio).
- Nombre titular: solo letras y espacios (`/^[a-zA-Z\s]*$/`); si no cumple, no actualiza.

---

## 6. Resumen de shapes de respuesta (lo que asume el front)

El cliente asume que **axios** entrega el JSON del gateway en `response.data`, con esta forma mínima:

### create-token (éxito para seguir)

```json
{
  "statusCode": 200,
  "body": {
    "token": "..."
  }
}
```

### create-payment

```json
{
  "body": {
    "status": "approved | rejected | ...",
    "status_detail": "accredited | ...",
    "id": "...",
    "message": "...",
    "error": "...",
    "transaction_details": {
      "total_paid_amount": 0,
      "net_received_amount": 0
    }
  }
}
```

### create-preference-id

```json
{
  "body": {
    "preferenceId": "..."
  }
}
```

### add-course-payment (flujo tarjeta)

```json
{
  "status_Message": "payment transaction success"
}
```

*(En flujo MP gratificación el body de respuesta no se valida en código.)*

---

## 7. Endpoint legacy (no usado en el flujo actual de `CheckoutPage`)

`savePaymentWithCard` en `CardPayment.js` apunta a  
`https://7gb741dj56.execute-api.us-west-1.amazonaws.com/v1/payment`  
y **no** está importado/usado en `CheckoutPage.js` (está comentado en el import).

---

## 8. Rutas de navegación relacionadas

Definidas en `src/constants/routes.js`:

- Checkout: `CHECKOUT` → `/compra_curso`
- Éxito: `CHECKOUT_SUCCESS` → `/pago_exitoso`
- Fallo: `CHECKOUT_FAILED` → `/pago_fallido`

Tras tarjeta OK + `add-course-payment` con mensaje esperado → navegación a `CHECKOUT_SUCCESS`.
