/**
 * Punto de entrada Firebase (Web SDK modular).
 *
 * Uso:
 *   import { firebaseApp, getFirebaseApp } from "./firebase";
 *   import { getAuth } from "firebase/auth";
 *   const auth = getAuth(getFirebaseApp());
 *
 * Productos: añade imports desde "firebase/auth", "firebase/firestore", etc.
 * https://firebase.google.com/docs/web/setup#available-libraries
 */
export { firebaseApp, getFirebaseApp, firebaseConfig } from "./config";
export {
  getFirebaseAuthInstance,
  signInWithGoogleAndGetIdToken,
  signInWithGoogleInspectPayload,
  signOutFirebaseAuth,
} from "./auth";
