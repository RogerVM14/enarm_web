import { initializeApp, getApps, getApp } from "firebase/app";

/**
 * Configuración desde variables de entorno (REACT_APP_*).
 * Definir en `.env` según la consola de Firebase → Configuración del proyecto.
 */
const rawConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

/** Solo claves con valor (Analytics opcional vía measurementId). */
const firebaseConfig = Object.fromEntries(
  Object.entries(rawConfig).filter(([, v]) => v != null && String(v).trim() !== "")
);

const REQUIRED_KEYS = [
  "apiKey",
  "authDomain",
  "projectId",
  "storageBucket",
  "messagingSenderId",
  "appId",
];

function isConfigComplete() {
  return REQUIRED_KEYS.every((k) => Boolean(firebaseConfig[k]));
}

/**
 * Evita doble inicialización (útil con React Strict Mode / HMR).
 */
export function getFirebaseApp() {
  if (!isConfigComplete()) {
    console.warn(
      "[Firebase] Faltan variables REACT_APP_FIREBASE_* en .env — la app no se inicializó."
    );
    return null;
  }
  if (getApps().length === 0) {
    return initializeApp(firebaseConfig);
  }
  return getApp();
}

export const firebaseApp = getFirebaseApp();

export { firebaseConfig };
