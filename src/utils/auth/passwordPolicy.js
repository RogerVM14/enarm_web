/** Mismas reglas que `Register/ValidatePassword` (registro). */
export const PASSWORD_RULES = [
  /(?=.{8,})/,
  /\d+/,
  /[!@#$%^&*(),.?":{}|<>]+/,
  /[A-Z]+/,
  /[a-z]+/,
];

export const REGISTRATION_PASSWORD_HINT =
  "Mínimo 8 caracteres, con número, un símbolo (!@#$…), una mayúscula y una minúscula.";

export function passwordMeetsRegistrationPolicy(value) {
  if (value == null || typeof value !== "string") return false;
  return PASSWORD_RULES.every((re) => re.test(value));
}
