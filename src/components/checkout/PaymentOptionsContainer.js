import React from 'react';
import oxxopay from '../../assets/icons/checkout/oxxopay.png';
import americanexpress from '../../assets/icons/checkout/americanexpress.png';
import visa from '../../assets/icons/checkout/visa.png';
import mastercard from '../../assets/icons/checkout/mastercard.png';
import paypal from '../../assets/icons/checkout/paypal.png';

const PaymentOptionsContainer = (props) => {

    const { size, isMobile } = props;

    const regularText = () => { 
        return isMobile ? 'regular-14' : 'regular-16'
    }

    const mediumText = () => {
        return isMobile ? 'medium-14' : 'medium-16'
    }

    const boldText = () => {
        return isMobile ? "bold-14" : "bold-16"
    }

    return (
        <div className={`payment-options-box ${size}`}>
            <div className='options-payments'>
                <div className='payment oxxo-payment'>
                    <div className='payment__head'>
                        <div className='payment-type'>
                            <div className='input-span'>
                                <input type='radio' name='payment-input' id='' />
                                <span className={boldText()}>Oxxo Pay</span>
                            </div>
                            <div className='options-imgs'>
                                <img src={oxxopay} alt='oxxo-pay' />
                            </div>
                        </div>
                        <p className={regularText()}>
                            Obtén un número de referencia para pagar con efectivo en tu OXXO más cercano.
                        </p>
                    </div>
                </div>
                <div className='payment paypal-payment'>
                    <div className='payment__head'>
                        <div className='payment-type'>
                            <div className='input-span'>
                                <input type='radio' name='payment-input' id='' />
                                <span className={boldText()}>PayPal</span>
                            </div>
                            <div className='options-imgs'>
                                <img src={paypal} alt='paypal' />
                            </div>
                        </div>
                        <p className={regularText()}>
                            Pagos seguros en línea. Es necesario contar con Tarjeta de Crédito. Cuenta de PayPal no es necesaria.
                        </p>
                    </div>
                </div>
                <div className='payment bank-payment selected'>
                    <div className='payment__head'>
                        <div className='payment-type'>
                            <div className='input-span'>
                                <input type='radio' name='payment-input' id='' />
                                <span className={boldText()}>Tarjeta Bancaria</span>
                            </div>
                            <div className='options-imgs'>
                                <img src={americanexpress} alt='american-express' />
                                <img src={visa} alt='visa' />
                                <img src={mastercard} alt='mastercard' />
                            </div>
                        </div>
                        <p className={regularText()}>
                            Transferencias seguras o pago a crédito con tarjetas particpantes.
                        </p>
                    </div>
                    <hr style={{ width: 'calc(100% - 64px)', margin: '0 auto', background: "rgba(150, 172, 188, 1)" }} />
                    <div className='payment__body'>
                        <div className='payment-form'>
                            <form action=''>
                                <div className='form-input'>
                                    <label className={mediumText()} htmlFor=''>Número de Tarjeta</label>
                                    <input type='text' name='' id='' placeholder='6655-8844-2233-5599' />
                                </div>
                                { isMobile ? (
                                    <>
                                    <div className='form-input'>
                                        <label className={mediumText()} htmlFor=''>Código CVV</label>
                                        <input className='regular-14' type='text' name='' id='' placeholder='xxx' />
                                    </div>
                                    <div className='form-input'>
                                        <label className={mediumText()} htmlFor=''>Fecha de Vencimiento</label>
                                        <input className='regular-14' type='text' name='' id='' placeholder='MM/YY' />
                                    </div>
                                    </>
                                ) :
                                (
                                    <div className='two-input-forms'>
                                    <div className='form-input'>
                                        <label className={mediumText()} htmlFor=''>Código CVV</label>
                                        <input className='regular-14' type='text' name='' id='' placeholder='xxx' />
                                    </div>
                                    <div className='form-input'>
                                        <label className={mediumText()} htmlFor=''>Fecha de Vencimiento</label>
                                        <input className='regular-14' type='text' name='' id='' placeholder='MM/YY' />
                                    </div>
                                </div>
                                )}
                                <div className='form-input'>
                                    <label className={mediumText()} htmlFor=''>Nombre de Tarjetahabiente</label>
                                    <input className='regular-14' type='text' name='' id='' placeholder='Nombre como aparece en tarjeta' />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentOptionsContainer;