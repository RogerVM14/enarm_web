/**
 * Banner de mantenimiento (dashboard): únicamente estas variables de entorno (prefijo REACT_APP_).
 *
 *   REACT_APP_MAINTENANCE_BANNER_ENABLED=TRUE   → mostrar banner
 *   REACT_APP_MAINTENANCE_SCHEDULE=...          → texto de fecha/hora tal cual se muestra
 */

const isTruthyEnv = (value) => String(value ?? "").trim().toUpperCase() === "TRUE";

export const isMaintenanceBannerEnabledFromEnv = () =>
  isTruthyEnv(process.env.REACT_APP_MAINTENANCE_BANNER_ENABLED);

export const getMaintenanceScheduleTextFromEnv = () =>
  String(process.env.REACT_APP_MAINTENANCE_SCHEDULE ?? "").trim();
