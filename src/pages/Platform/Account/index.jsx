import React, { useMemo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardLayout from "../../Layouts/Dashboard";
import {
  selectUserInformation,
  setUserInformation,
} from "../../../store/reducers/user/UserInformationSlice";
import { setInitialEnarmPassword } from "../../../apis/auth/authApi";
import {
  passwordMeetsRegistrationPolicy,
  REGISTRATION_PASSWORD_HINT,
} from "../../../utils/auth/passwordPolicy";
import showToast from "../../../utils/toasts/commonToasts";
import ui from "./index.module.css";

function deriveSignInMode(u) {
  const opt = u?.sign_in_options;
  if (opt === "both" || opt === "google" || opt === "enarm") return opt;
  const hasG = Boolean(u?.has_firebase_sub);
  const hasP = Boolean(u?.has_password);
  if (hasG && hasP) return "both";
  if (hasG && !hasP) return "google";
  if (!hasG && hasP) return "enarm";
  return null;
}

function UserProfileSection() {
  const dispatch = useDispatch();
  const user = useSelector(selectUserInformation);
  const [setPasswordFormOpen, setSetPasswordFormOpen] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordSubmitting, setPasswordSubmitting] = useState(false);

  const { email, fullname, role_name, is_verified, showSetPassword, signInMode } =
    useMemo(() => {
      const u = user && typeof user === "object" ? user : {};
      const mode = deriveSignInMode(u);
      const hasG = Boolean(u.has_firebase_sub);
      const hasP = Boolean(u.has_password);
      return {
        email: u.email || "",
        fullname: u.fullname || "",
        role_name: u.role_name || "",
        is_verified: Boolean(u.is_verified),
        showSetPassword: hasG && !hasP,
        signInMode: mode,
      };
    }, [user]);

  useEffect(() => {
    if (!showSetPassword) {
      setSetPasswordFormOpen(false);
      setNewPassword("");
      setConfirmPassword("");
    }
  }, [showSetPassword]);

  useEffect(() => {
    if (!setPasswordFormOpen) {
      setNewPassword("");
      setConfirmPassword("");
    }
  }, [setPasswordFormOpen]);

  const canSubmitPassword =
    passwordMeetsRegistrationPolicy(newPassword) && newPassword === confirmPassword;

  const handleSetPasswordSubmit = () => {
    if (!canSubmitPassword) {
      if (!passwordMeetsRegistrationPolicy(newPassword)) {
        showToast.error(
          `La contraseña no cumple los requisitos: ${REGISTRATION_PASSWORD_HINT}`
        );
      } else {
        showToast.error("Las contraseñas no coinciden.");
      }
      return;
    }
    const authToken = user?.auth_token;
    if (!authToken) {
      showToast.error("No hay sesión válida. Inicia sesión de nuevo.");
      return;
    }

    setPasswordSubmitting(true);
    setInitialEnarmPassword(newPassword, authToken)
      .then((res) => {
        if (res.data?.status_Message === "password updated") {
          dispatch(
            setUserInformation({
              ...user,
              has_password: true,
              sign_in_options:
                user.sign_in_options === "google" || !user.sign_in_options
                  ? "both"
                  : user.sign_in_options,
            })
          );
          showToast.success(
            "Contraseña guardada. Ya puedes entrar también con correo y contraseña."
          );
          setSetPasswordFormOpen(false);
          setNewPassword("");
          setConfirmPassword("");
          return;
        }
        showToast.error(res.data?.status_Message || "No se pudo guardar la contraseña.");
      })
      .catch((err) => {
        const data = err.response?.data;
        const sm = data?.status_Message;
        const byMessage = {
          "auth token not found": "Sesión no válida. Inicia sesión de nuevo.",
          "Token expired": "Tu sesión expiró. Inicia sesión de nuevo.",
          "Invalid token": "Sesión inválida. Inicia sesión de nuevo.",
          "re-login is required": "Debes iniciar sesión de nuevo para continuar.",
          "password is required": "Indica una contraseña.",
          "account without google link":
            "Tu cuenta no tiene Google vinculado; no puedes usar este flujo.",
          "incorrect role": "Tu tipo de cuenta no permite esta acción.",
          "user not found": "No encontramos tu usuario. Inicia sesión de nuevo.",
          "password already set": "Ya tienes contraseña configurada. Usa “Cambiar contraseña”.",
        };
        if (sm && byMessage[sm]) {
          showToast.error(byMessage[sm]);
          return;
        }
        if (typeof sm === "string" && sm.startsWith("MySQL")) {
          showToast.error("Error del servidor. Intenta más tarde.");
          return;
        }
        showToast.error(sm || "No se pudo guardar la contraseña.");
      })
      .finally(() => setPasswordSubmitting(false));
  };

  const isGuest = role_name === "Invitado";

  const hasUserData = Boolean(email || fullname || role_name);

  return (
    <article className={`${ui.articleContainer} ${ui.profileArticle}`}>
      <header>
        <div className={ui.containerHeader}>
          <div className={ui.headerTitle}>
            <h5>Perfil</h5>
            <p>Datos de tu cuenta</p>
          </div>
        </div>
      </header>
      <div className={ui.containerBody}>
        {!hasUserData ? (
          <p className={`regular-parraf-14 ${ui.profileMuted}`}>
            No hay datos de usuario cargados. Vuelve a iniciar sesión si no ves tu información.
          </p>
        ) : (
          <div className={ui.profileLayout}>
            <div className={ui.profileField}>
              <span className={ui.profileFieldLabel}>Correo electrónico</span>
              <div className={ui.profileEmailLine}>
                <span className={ui.profileEmailText}>{email || "—"}</span>
                {email ? (
                  is_verified ? (
                    <span className={`${ui.tag} ${ui.tagVerified}`} title="Correo verificado">
                      Verificado
                    </span>
                  ) : (
                    <span className={`${ui.tag} ${ui.tagPending}`} title="Verifica tu correo cuando puedas">
                      Sin verificar
                    </span>
                  )
                ) : null}
              </div>
            </div>

            <div className={ui.profileField}>
              <span className={ui.profileFieldLabel}>Nombre completo</span>
              <span className={ui.profileValueText}>{fullname || "—"}</span>
            </div>

            <div className={ui.profileField}>
              <span className={ui.profileFieldLabel}>Rol</span>
              <div>
                {role_name ? (
                  <span
                    className={`${ui.pill} ${isGuest ? ui.pillRoleGuest : ui.pillRole}`}
                  >
                    {role_name}
                  </span>
                ) : (
                  <span className={ui.profileValueMuted}>—</span>
                )}
              </div>
            </div>

            <div className={ui.signInBlock}>
              <span className={ui.signInHeading}>Formas de inicio de sesión</span>
              <p className={ui.signInHint}>
                Métodos con los que puedes acceder a tu cuenta.
              </p>
              <div className={ui.pillGroup}>
                {(signInMode === "both" || signInMode === "google") && (
                  <span className={`${ui.pill} ${ui.pillGoogle}`}>
                    <span className={ui.pillIcon} aria-hidden>
                      G
                    </span>
                    Google
                  </span>
                )}
                {(signInMode === "both" || signInMode === "enarm") && (
                  <span className={`${ui.pill} ${ui.pillEnarm}`}>
                    Correo y contraseña
                  </span>
                )}
                {!signInMode && (
                  <span className={ui.profileValueMuted}>—</span>
                )}
              </div>
            </div>

            {showSetPassword && (
              <div className={ui.setPasswordCard}>
                <div className={ui.setPasswordHeader}>
                  <h6 className={ui.setPasswordTitle}>Establecer contraseña</h6>
                  <p className={ui.setPasswordDesc}>
                    Tu cuenta usa Google. Puedes crear una contraseña de ENARM para entrar también
                    con correo y contraseña.
                  </p>
                </div>
                {!setPasswordFormOpen ? (
                  <button
                    type="button"
                    className={ui.setPasswordTrigger}
                    onClick={() => setSetPasswordFormOpen(true)}
                  >
                    Establecer contraseña
                  </button>
                ) : (
                  <>
                    <div className={ui.setPasswordFields}>
                      <p className={ui.setPasswordPolicyHint}>{REGISTRATION_PASSWORD_HINT}</p>
                      <div className={ui.setPasswordRow}>
                        <label htmlFor="profile-new-pass" className={ui.setPasswordLabel}>
                          Nueva contraseña
                        </label>
                        <input
                          id="profile-new-pass"
                          type="password"
                          className={ui.setPasswordInput}
                          placeholder="Coloca tu nueva contraseña"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          autoComplete="new-password"
                        />
                      </div>
                      <div className={ui.setPasswordRow}>
                        <label htmlFor="profile-confirm-pass" className={ui.setPasswordLabel}>
                          Confirmar contraseña
                        </label>
                        <input
                          id="profile-confirm-pass"
                          type="password"
                          className={ui.setPasswordInput}
                          placeholder="Repite la misma contraseña"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          autoComplete="new-password"
                        />
                      </div>
                    </div>
                    <div className={ui.setPasswordActions}>
                      <button
                        type="button"
                        className={ui.setPasswordCancel}
                        onClick={() => setSetPasswordFormOpen(false)}
                      >
                        Cancelar
                      </button>
                      <button
                        type="button"
                        className={ui.setPasswordCta}
                        disabled={!canSubmitPassword || passwordSubmitting}
                        onClick={handleSetPasswordSubmit}
                      >
                        {passwordSubmitting ? "Guardando…" : "Guardar contraseña"}
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

const AccountPage = () => {
  return (
    <DashboardLayout>
      <div className={ui.wrapper}>
        <div className={ui.accountContainer}>
          <UserProfileSection />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AccountPage;
