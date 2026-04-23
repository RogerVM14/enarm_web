import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirebaseApp } from "./config";

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

export async function signOutFirebaseAuth() {
  const auth = getFirebaseAuthInstance();
  if (auth?.currentUser) {
    await signOut(auth);
  }
}
