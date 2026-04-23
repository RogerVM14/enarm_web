import React, { useState, useEffect } from "react";
import { linkGoogleToEnarmAccount, loginUser } from "../../../apis/auth/authApi";
import { encryptPassword } from "../../../utils/auth";
import showToast from "../../../utils/toasts/commonToasts";

const linkErrorToast = (data, httpStatus) => {
  const sm = data?.status_Message;
  if (sm === "firebase link failed") {
    const d = data?.description || "";
    const byDesc = {
      email_mismatch: "El correo de Google no coincide con tu cuenta ENARM.",
      firebase_sub_in_use: "Esta cuenta de Google ya está vinculada a otro usuario.",
      account_already_linked: "Tu cuenta ENARM ya tiene Google vinculado.",
      user_not_found: "No encontramos tu usuario. Inicia sesión de nuevo.",
      invalid_user_id: "No pudimos vincular. Intenta de nuevo.",
      invalid_firebase_sub: "Token de Google inválido. Intenta de nuevo.",
    };
    showToast.error(byDesc[d] || data?.error_code || "No se pudo vincular Google.");
    return;
  }
  const messages = {
    "auth token not found": "Sesión no válida. Inicia sesión de nuevo.",
    "Token expired": "Tu sesión expiró. Inicia sesión de nuevo.",
    "Invalid token": "Sesión inválida. Inicia sesión de nuevo.",
    "re-login is required": "Debes iniciar sesión de nuevo para continuar.",
    "Firebase token expired": "La sesión de Google expiró. Cierra este mensaje e intenta con Google otra vez.",
    "incorrect role for firebase link": "Tu tipo de cuenta no permite vincular Google.",
    "Invalid Firebase token": "No pudimos validar Google. Intenta de nuevo.",
    "Firebase email not verified": "Verifica tu correo en Google antes de continuar.",
    "Firebase token without sub/uid": "No pudimos validar tu cuenta de Google.",
  };
  if (sm && messages[sm]) {
    showToast.error(messages[sm]);
    return;
  }
  if (typeof sm === "string" && sm.startsWith("MySQL")) {
    showToast.error("Error del servidor. Intenta más tarde.");
    return;
  }
  showToast.error(sm || `Error al vincular (${httpStatus || "?"})`);
};

const LinkGoogleAccountModal = ({
  isOpen,
  onClose,
  enarmEmail,
  firebaseIdTokenRef,
  onLinkedSuccess,
  signOutFirebaseAuth,
}) => {
  const [step, setStep] = useState(1);
  const [linkPassword, setLinkPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setLinkPassword("");
      setShowPassword(false);
      setBusy(false);
    }
  }, [isOpen]);

  const handleCancel = () => {
    onClose();
  };

  const handleVincular = () => {
    if (!linkPassword.trim()) {
      showToast.error("Ingresa tu contraseña de ENARM.");
      return;
    }
    const idToken = firebaseIdTokenRef?.current;
    if (!idToken) {
      showToast.error("La sesión de Google expiró. Intenta de nuevo con el botón de Google.");
      onClose();
      return;
    }

    setBusy(true);
    loginUser({
      new_user_email: enarmEmail,
      new_user_password: encryptPassword(linkPassword),
      environment: "platform",
    })
      .then((res) => {
        const { status_Message, ...passwordSession } = res.data;
        if (status_Message === "invalid user") {
          showToast.error("Contraseña incorrecta.");
          return;
        }
        if (status_Message === "user logged") {
          showToast.warning(
            "Tienes una sesión activa en otro lugar. Cierra sesión allí o inicia sesión con correo y elige cerrar la sesión remota."
          );
          return;
        }
        if (status_Message === "problems with last session" || status_Message === "problems with last jwt") {
          showToast.error("No pudimos validar tu sesión. Intenta de nuevo.");
          return;
        }
        if (status_Message !== "valid user" || !passwordSession.auth_token) {
          showToast.error("No pudimos verificar tu cuenta. Intenta de nuevo.");
          return;
        }

        return linkGoogleToEnarmAccount(idToken, passwordSession.auth_token)
          .then((linkRes) => {
            if (linkRes.data?.status_Message !== "firebase linked") {
              showToast.error(linkRes.data?.status_Message || "No se pudo completar el vínculo.");
              return;
            }
            signOutFirebaseAuth().catch(() => {});
            showToast.success("Tu cuenta quedó vinculada con Google.");
            onLinkedSuccess(passwordSession);
          })
          .catch((err) => {
            const st = err.response?.status;
            const data = err.response?.data;
            if (data) linkErrorToast(data, st);
            else showToast.error("No se pudo vincular Google. Intenta de nuevo.");
          });
      })
      .catch((err) => {
        const data = err.response?.data;
        if (data?.status_Message === "Firebase email not verified") {
          showToast.error("Verifica tu correo en Google antes de continuar.");
        } else if (data?.status_Message === "Firebase token without sub/uid") {
          showToast.error("No pudimos validar tu cuenta de Google.");
        } else {
          showToast.error("Error al iniciar sesión. Revisa tu contraseña.");
        }
      })
      .finally(() => setBusy(false));
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[2100] flex items-center justify-center overflow-y-auto p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="link-google-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        aria-label="Cerrar"
        onClick={handleCancel}
      />
      <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl text-left text-gray-900">
        <h2 id="link-google-modal-title" className="text-lg font-semibold text-gray-900 mb-4">
          Conecta tu cuenta con Google
        </h2>

        {step === 1 ? (
          <>
            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
              Ya tienes una cuenta con tu correo.
            </p>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Puedes vincularla con Google para iniciar sesión más rápido con un solo clic.
            </p>
            <p className="text-sm font-semibold text-gray-900 mb-5 leading-relaxed rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5">
              Seguirás pudiendo entrar con tu correo y contraseña como siempre.
            </p>
            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50"
                onClick={handleCancel}
                disabled={busy}
              >
                Ahora no
              </button>
              <button
                type="button"
                className="rounded-lg bg-[#05B2FA] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0397d6] disabled:opacity-60"
                onClick={() => setStep(2)}
                disabled={busy}
              >
                Continuar
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="text-sm text-gray-600 mb-3">
              Confirma tu identidad con la <strong>contraseña de ENARM</strong> de esta cuenta.
            </p>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="link-google-pass">
              Contraseña
            </label>
            <input
              id="link-google-pass"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm mb-4"
              value={linkPassword}
              onChange={(e) => setLinkPassword(e.target.value)}
              disabled={busy}
            />
            <label className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
              />
              Mostrar contraseña
            </label>
            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50"
                onClick={() => setStep(1)}
                disabled={busy}
              >
                Volver
              </button>
              <button
                type="button"
                className="rounded-lg bg-[#05B2FA] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0397d6] disabled:opacity-60 flex items-center justify-center gap-2"
                onClick={handleVincular}
                disabled={busy}
              >
                {busy ? (
                  <>
                    <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Vinculando…
                  </>
                ) : (
                  "Vincular cuenta"
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LinkGoogleAccountModal;
