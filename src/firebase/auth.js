import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signOut,
  getAdditionalUserInfo,
} from "firebase/auth";
import { getFirebaseApp } from "./config";

const GOOGLE_PROVIDER_ID = GoogleAuthProvider.PROVIDER_ID;

/**
 * Intenta obtener el correo del flujo Google + Firebase por todas las vías habituales.
 * A veces user.email llega vacío pero sí está en providerData o en el perfil OAuth.
 */
function emailFromProviderData(user) {
  const entry = user?.providerData?.find((p) => p.providerId === GOOGLE_PROVIDER_ID);
  const e = entry?.email?.trim();
  return e || null;
}

function emailFromAdditionalProfile(userCredential) {
  try {
    const info = getAdditionalUserInfo(userCredential);
    const e = typeof info?.profile?.email === "string" ? info.profile.email.trim() : "";
    return e || null;
  } catch {
    return null;
  }
}

/**
 * @param {import("firebase/auth").UserCredential} userCredential
 */
export async function resolveGoogleSignInEmail(userCredential) {
  const user = userCredential.user;

  let email = user?.email?.trim() || emailFromProviderData(user) || emailFromAdditionalProfile(userCredential) || null;

  if (!email) {
    await user.reload();
    email = user?.email?.trim() || emailFromProviderData(user) || null;
  }

  const idTokenResult = await user.getIdTokenResult(true);
  const claimEmail =
    typeof idTokenResult?.claims?.email === "string" ? idTokenResult.claims.email.trim() : "";
  if (!email && claimEmail) {
    email = claimEmail;
  }

  return { email, idTokenResult };
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
  provider.addScope("profile");
  provider.setCustomParameters({ prompt: "select_account" });
  const userCredential = await signInWithPopup(auth, provider);
  const { email: resolvedEmail } = await resolveGoogleSignInEmail(userCredential);
  const user = userCredential.user;
  const idToken = await user.getIdToken(true);

  return { idToken, user, resolvedEmail };
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
  provider.addScope("profile");
  provider.setCustomParameters({ prompt: "select_account" });
  const userCredential = await signInWithPopup(auth, provider);
  const googleCredential = GoogleAuthProvider.credentialFromResult(userCredential);
  const user = userCredential.user;
  const { email: resolvedEmail, idTokenResult } = await resolveGoogleSignInEmail(userCredential);
  const idToken = await user.getIdToken(true);

  return {
    userCredential,
    user,
    googleOAuthAccessToken: googleCredential?.accessToken ?? null,
    idToken,
    idTokenResult,
    resolvedEmail,
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
  const provider = new FacebookAuthProvider();
  provider.addScope("email");
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
  const provider = new FacebookAuthProvider();
  provider.addScope("email");
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
