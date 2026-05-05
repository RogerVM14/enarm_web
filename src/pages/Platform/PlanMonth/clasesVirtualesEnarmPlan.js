/**
 * Plan "Clases Virtuales ENARM" (solo videoclases).
 * La UI de introducción en /cursoENARM/planes difiere del resto de planes.
 */
export const CLASES_VIRTUALES_ENARM_PLAN_ID = 21;

export const isClasesVirtualesEnarmPlan = (planId) =>
  Number(planId) === CLASES_VIRTUALES_ENARM_PLAN_ID;

export const getPlanCourseHeading = (planId, planName) =>
  isClasesVirtualesEnarmPlan(planId)
    ? "Clases Virtuales ENARM"
    : `Plan de Estudio de ${planName ?? ""}`;

/** Texto del párrafo de bienvenida en /cursoENARM/planes_contenido (especialidad va en negrita entre ambas partes). */
export const getCourseContenidoWelcomeCopy = (planId) => {
  if (isClasesVirtualesEnarmPlan(planId)) {
    return {
      beforeSpecialty: "Bienvenido a tus videoclases de ",
      afterSpecialty:
        ". Aquí encontrarás el contenido organizado para que avances de forma clara y progresiva. Te recomendamos seguir el orden sugerido para aprovechar al máximo tu preparación.",
    };
  }
  return {
    beforeSpecialty: "Bienvenido al contenido de ",
    afterSpecialty:
      ". A continuación tendrás acceso a los contenidos que tenemos preparados especialmente para ti. Es importante que revises cada uno de ellos en el orden en el que se presentan para asegurar el éxito de este curso.",
  };
};
