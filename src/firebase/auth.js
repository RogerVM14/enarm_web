import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
} from "firebase/auth";
import { getFirebaseApp } from "./config";

/** Sesión: intención antes de `signInWithRedirect` (login vs registro). */
const FACEBOOK_REDIRECT_INTENT_KEY = "enarm_fb_redirect_intent";

function createFacebookProvider() {
  const provider = new FacebookAuthProvider();
  provider.addScope("email");
  return provider;
}

/**
 * En móvil / iPad, los popups de Facebook suelen fallar; usamos redirect.
 * iPadOS 13+ puede reportarse como Macintosh con touch.
 */
export function shouldUseFacebookSignInRedirect() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
    return true;
  }
  if (
    typeof navigator.maxTouchPoints === "number" &&
    navigator.maxTouchPoints > 1 &&
    /Macintosh/.test(ua)
  ) {
    return true;
  }
  return false;
}

/**
 * Inicia el flujo por redirect (la página se recarga al volver de Facebook).
 * @param {"login" | "register"} intent
 */
export async function startFacebookSignInWithRedirect(intent) {
  const app = getFirebaseApp();
  if (!app) {
    throw new Error(
      "Firebase no está configurado. Revisa las variables REACT_APP_FIREBASE_* en .env",
    );
  }
  if (typeof sessionStorage !== "undefined") {
    sessionStorage.setItem(FACEBOOK_REDIRECT_INTENT_KEY, intent);
  }
  const auth = getAuth(app);
  await signInWithRedirect(auth, createFacebookProvider());
}

/**
 * Tras volver del redirect de Facebook: obtiene credencial si aplica.
 * Debe llamarse una sola vez por carga desde la pantalla que coincida con `expectedIntent`.
 * @param {"login" | "register"} expectedIntent
 * @returns {Promise<{ kind: "success", idToken: string, inspectPayload: object } | { kind: "none" } | { kind: "error", error: unknown }>}
 */
export async function consumeFacebookRedirectResult(expectedIntent) {
  const app = getFirebaseApp();
  if (!app) {
    return { kind: "none" };
  }
  const auth = getAuth(app);
  let result;
  try {
    result = await getRedirectResult(auth);
  } catch (error) {
    if (typeof sessionStorage !== "undefined") {
      sessionStorage.removeItem(FACEBOOK_REDIRECT_INTENT_KEY);
    }
    return { kind: "error", error };
  }

  if (!result) {
    return { kind: "none" };
  }

  const storedIntent =
    typeof sessionStorage !== "undefined"
      ? sessionStorage.getItem(FACEBOOK_REDIRECT_INTENT_KEY)
      : null;
  if (typeof sessionStorage !== "undefined") {
    sessionStorage.removeItem(FACEBOOK_REDIRECT_INTENT_KEY);
  }

  if (storedIntent !== expectedIntent) {
    await signOut(auth);
    return { kind: "none" };
  }

  const user = result.user;
  const idToken = await user.getIdToken();
  const idTokenResult = await user.getIdTokenResult();
  const facebookCredential = FacebookAuthProvider.credentialFromResult(result);
  const inspectPayload = {
    userCredential: result,
    user,
    facebookOAuthAccessToken: facebookCredential?.accessToken ?? null,
    idToken,
    idTokenResult,
    providerId: result.providerId,
    operationType: result.operationType,
  };

  return { kind: "success", idToken, inspectPayload };
}

export function getFirebaseAuthInstance() {
  const app = getFirebaseApp();
  if (!app) return null;
  return getAuth(app);
}

/**
 * Abre el flujo de Google y devuelve el ID token de Firebase para enviarlo al backend.
 */
export async function signInWithGoogleAndGetIdToken() {
  const app = getFirebaseApp();
  if (!app) {
    throw new Error("Firebase no está configurado. Revisa las variables REACT_APP_FIREBASE_* en .env");
  }
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  provider.addScope("email");
  provider.setCustomParameters({ prompt: "select_account" });
  const result = await signInWithPopup(auth, provider);
  const idToken = await result.user.getIdToken();
  return { idToken, user: result.user };
}

/**
 * Mismo flujo que signInWithGoogleAndGetIdToken pero devuelve todo lo útil
 * para inspección (sin enviar nada al backend).
 */
export async function signInWithGoogleInspectPayload() {
  const app = getFirebaseApp();
  if (!app) {
    throw new Error("Firebase no está configurado. Revisa las variables REACT_APP_FIREBASE_* en .env");
  }
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  provider.addScope("email");
  provider.setCustomParameters({ prompt: "select_account" });
  const userCredential = await signInWithPopup(auth, provider);
  const googleCredential = GoogleAuthProvider.credentialFromResult(userCredential);
  const user = userCredential.user;
  const idToken = await user.getIdToken();
  const idTokenResult = await user.getIdTokenResult();

  return {
    userCredential,
    user,
    googleOAuthAccessToken: googleCredential?.accessToken ?? null,
    idToken,
    idTokenResult,
    providerId: userCredential.providerId,
    operationType: userCredential.operationType,
  };
}

/**
 * Abre el flujo de Facebook y devuelve el ID token de Firebase para enviarlo al backend.
 */
export async function signInWithFacebookAndGetIdToken() {
  const app = getFirebaseApp();
  if (!app) {
    throw new Error("Firebase no está configurado. Revisa las variables REACT_APP_FIREBASE_* en .env");
  }
  const auth = getAuth(app);
  const provider = createFacebookProvider();
  const result = await signInWithPopup(auth, provider);
  const idToken = await result.user.getIdToken();
  return { idToken, user: result.user };
}

/**
 * Mismo flujo que signInWithFacebookAndGetIdToken pero devuelve todo lo útil
 * para inspección (sin enviar nada al backend).
 */
export async function signInWithFacebookInspectPayload() {
  const app = getFirebaseApp();
  if (!app) {
    throw new Error("Firebase no está configurado. Revisa las variables REACT_APP_FIREBASE_* en .env");
  }
  const auth = getAuth(app);
  const provider = createFacebookProvider();
  const userCredential = await signInWithPopup(auth, provider);
  const facebookCredential = FacebookAuthProvider.credentialFromResult(userCredential);
  const user = userCredential.user;
  const idToken = await user.getIdToken();
  const idTokenResult = await user.getIdTokenResult();

  return {
    userCredential,
    user,
    facebookOAuthAccessToken: facebookCredential?.accessToken ?? null,
    idToken,
    idTokenResult,
    providerId: userCredential.providerId,
    operationType: userCredential.operationType,
  };
}

export async function signOutFirebaseAuth() {
  const auth = getFirebaseAuthInstance();
  if (auth?.currentUser) {
    await signOut(auth);
  }
}
