import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsGuestUserRole } from "../../store/reducers/user/UserInformationSlice";
import { GUEST_LIMITED_CONTENT_MODAL_KEY } from "../../constants/sessionStorageKeys";
import { ROUTES } from "../../constants/routes";

/**
 * Modal informativo para usuarios Invitado.
 * Se muestra una vez por sesión (sessionStorage) hasta que eligen una acción del pie.
 */
const GuestLimitedContentModal = () => {
  const navigate = useNavigate();
  const isGuestUser = useSelector(selectIsGuestUserRole);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isGuestUser) {
      setOpen(false);
      return;
    }
    try {
      if (sessionStorage.getItem(GUEST_LIMITED_CONTENT_MODAL_KEY)) {
        return;
      }
    } catch {
      return;
    }
    setOpen(true);
  }, [isGuestUser]);

  const markSeenAndClose = () => {
    try {
      sessionStorage.setItem(GUEST_LIMITED_CONTENT_MODAL_KEY, "1");
    } catch {
      /* ignore quota / private mode */
    }
    setOpen(false);
  };

  const handleExploreContent = () => {
    markSeenAndClose();
  };

  const handleViewPlans = () => {
    markSeenAndClose();
    navigate(ROUTES.PLATAFORMA_PLANES_ID);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[2500] flex items-center justify-center overflow-y-auto p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="guest-limited-modal-title"
      aria-describedby="guest-limited-modal-desc"
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
        aria-hidden
      />

      <div className="relative w-full max-w-lg rounded-xl bg-[#ffffff] text-black shadow-xl">
        <div className="border-b border-neutral-200 px-6 py-4">
          <h2
            id="guest-limited-modal-title"
            className="text-lg font-semibold leading-snug text-black"
          >
            ¡Ya puedes comenzar!
          </h2>
        </div>

        <div
          id="guest-limited-modal-desc"
          className="max-h-[min(70vh,520px)] overflow-y-auto px-6 py-5 text-left text-black"
        >
          <p className="mb-3 text-sm leading-relaxed">
            Explora el contenido y empieza a estudiar desde ahora.
          </p>
          <p className="text-sm leading-relaxed">
            Cuando quieras avanzar más rápido, puedes desbloquear todo el curso.
          </p>
        </div>

        <div className="flex flex-col gap-3 border-t border-neutral-200 px-6 py-4 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={handleExploreContent}
            className="rounded-full bg-[#05B2FA] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0397d6] focus:outline-none focus:ring-2 focus:ring-[#05B2FA] focus:ring-offset-2 focus:ring-offset-white sm:min-w-[9rem]"
          >
            Explorar contenido
          </button>
          <button
            type="button"
            onClick={handleViewPlans}
            className="rounded-full border border-neutral-300 bg-white px-6 py-2.5 text-sm font-semibold text-black shadow-sm transition hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-white sm:min-w-[9rem]"
          >
            Ver planes
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuestLimitedContentModal;
