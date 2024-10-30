/*
 ** status = 0 => Sin avance
 ** status = 1 => Completo
 ** status = 2 => Incompleto
 */

const course = [
  {
    week: 1,
    classes: [
      { title: "Guía de Estudio", days: 1, id: null },
      { title: "Infectología", days: 5, id: "infectologia" },
    ],
    simulator: { title: "SimuladorPro - Examen INICIAL", days: 1 },
    status: 1,
  },
  {
    week: 2,
    classes: [
      { title: "Infectología", days: 5, id: "infectologia" },
      { title: "Cardiologia", days: 1, id: "cardiologia" },
    ],
    simulator: { title: "SimuladorPro - Infecto", days: 0 },
    status: 2,
  },
  {
    week: 3,
    classes: [{ title: "Cardiologia", days: 6, id: "cardiologia" }],
    simulator: { title: "SimuladorPro - Cardio", days: 0 },
    status: 0,
  },
  {
    week: 4,
    classes: [
      { title: "Cardiologia", days: 1, id: "cardiologia" },
      { title: "Dermatologia", days: 6, id: "dermatologia" },
    ],
    simulator: { title: "SimuladorPro - Cardio y Derma", days: 0 },
    status: 0,
  },
  {
    week: 5,
    classes: [
      { title: "Cardiologia", days: 3, id: "cardiologia" },
      { title: "Gastroenterologia", days: 3, id: "gastroenterologia" },
    ],
    simulator: { title: "SimuladorPro - Derma y Gastro + Simulacro 25...", days: 0 },
    status: 0,
  },
  {
    week: 6,
    classes: [{ title: "Gastroenterologia", days: 6, id: "gastroenterologia" }],
    simulator: { title: "SimuladorPro - Gastro", days: 0 },
    status: 0,
  },
  {
    week: 7,
    classes: [
      { title: "Gastroenterologia", days: 1, id: "gastroenterologia" },
      { title: "Nefrologia", days: 6, id: "nefrologia" },
    ],
    simulator: { title: "SimuladorPro - Cardio y Nefro", days: 0 },
    status: 0,
  },
  {
    week: 8,
    classes: [
      { title: "Nefrologia", days: 1, id: "nefrologia" },
      { title: "Neumologia", days: 6, id: "neumologia" },
    ],
    simulator: { title: "SimuladorPro - Nefro y Neumo", days: 0 },
    status: 0,
  },
  {
    week: 9,
    classes: [
      { title: "Neumologia", days: 3, id: "neumologia" },
      { title: "Urgencias", days: 3, id: "urgencias" },
    ],
    simulator: { title: "SimuladorPro - Neumo y Urgencias + Simulacro 200 pre...", days: 0 },
    status: 0,
  },
  {
    week: 10,
    classes: [
      { title: "Urgencias", days: 5, id: "urgencias" },
      { title: "Reumatologia", days: 1, id: "reumatologia" },
    ],
    simulator: { title: "SimuladorPro - Urgencias y Reuma", days: 0 },
    status: 0,
  },
  {
    week: 11,
    classes: [{ title: "Cardiologia", days: 1, id: "cardiologia" }],
    simulator: { title: "SimuladorPro - Cardio", days: 0 },
    status: 0,
  },
  {
    week: 12,
    classes: [{ title: "Cardiologia", days: 6, id: "cardiologia" }],
    simulator: { title: "SimuladorPro - Cardio", days: 0 },
    status: 0,
  },
  {
    week: 13,
    classes: [
      { title: "Cardiologia", days: 1, id: "cardiologia" },
      { title: "Dermatologia", days: 6, id: "dermatologia" },
    ],
    simulator: { title: "SimuladorPro - Cardio y Derma", days: 0 },
    status: 0,
  },
  {
    week: 14,
    classes: [
      { title: "Cardiologia", days: 3, id: "cardiologia" },
      { title: "Gastroenterologia", days: 3, id: "gastroenterologia" },
    ],
    simulator: { title: "SimuladorPro - Derma y Gastro + Simulacro 25...", days: 0 },
    status: 0,
  },
  {
    week: 15,
    classes: [{ title: "Gastroenterologia", days: 6, id: "gastroenterologia" }],
    simulator: { title: "SimuladorPro - Gastro", days: 0 },
    status: 0,
  },
  {
    week: 16,
    classes: [
      { title: "Gastroenterologia", days: 1, id: "gastroenterologia" },
      { title: "Nefrologia", days: 6, id: "nefrologia" },
    ],
    simulator: { title: "SimuladorPro - Cardio y Nefro", days: 0 },
    status: 0,
  },
  {
    week: 17,
    classes: [
      { title: "Nefrologia", days: 1, id: "nefrologia" },
      { title: "Neumologia", days: 6, id: "neumologia" },
    ],
    simulator: { title: "SimuladorPro - Nefro y Neumo", days: 0 },
    status: 0,
  },
  {
    week: 18,
    classes: [
      { title: "Neumologia", days: 3, id: "neumologia" },
      { title: "Urgencias", days: 3, id: "urgencias" },
    ],
    simulator: { title: "SimuladorPro - Neumo y Urgencias + Simulacro 200 pre...", days: 0 },
    status: 0,
  },
  {
    week: 19,
    classes: [
      { title: "Urgencias", days: 5, id: "urgencias" },
      { title: "Reumatologia", days: 1, id: "reumatologia" },
    ],
    simulator: { title: "SimuladorPro - Urgencias y Reuma", days: 0 },
    status: 0,
  },
  {
    week: 20,
    classes: [{ title: "Cardiología", days: 1, id: "cardiologia" }],
    simulator: { title: "SimuladorPro - Cardio", days: 0 },
    status: 0,
  },
  {
    week: 21,
    classes: [{ title: "Cardiología", days: 6, id: "cardiologia" }],
    simulator: { title: "SimuladorPro - Cardio", days: 0 },
    status: 0,
  },
  {
    week: 22,
    classes: [
      { title: "Cardiología", days: 1, id: "cardiologia" },
      { title: "Dermatologia", days: 6, id: "dermatologia" },
    ],
    simulator: { title: "SimuladorPro - Cardio y Derma", days: 0 },
    status: 0,
  },
  {
    week: 23,
    classes: [
      { title: "Cardiologia", days: 3, id: "cardiologia" },
      { title: "Gastroenterologia", days: 3, id: "gastroenterologia" },
    ],
    simulator: { title: "SimuladorPro - Derma y Gastro + Simulacro 25...", days: 0 },
    status: 0,
  },
  {
    week: 24,
    classes: [{ title: "Gastroenterologia", days: 6, id: "gastroenterologia" }],
    simulator: { title: "SimuladorPro - Gastro", days: 0 },
    status: 0,
  },
  {
    week: 25,
    classes: [
      { title: "Gastroenterologia", days: 1, id: "gastroenterologia" },
      { title: "Nefrologia", days: 6, id: "nefrologia" },
    ],
    simulator: { title: "SimuladorPro - Cardio y Nefro", days: 0 },
    status: 0,
  },
  {
    week: 26,
    classes: [
      { title: "Nefrologia", days: 1, id: "nefrologia" },
      { title: "Neumologia", days: 6, id: "neumologia" },
    ],
    simulator: { title: "SimuladorPro - Nefro y Neumo", days: 0 },
    status: 0,
  },
  {
    week: 27,
    classes: [
      { title: "Neumologia", days: 3, id: "neumologia" },
      { title: "Urgencias", days: 3, id: "urgencias" },
    ],
    simulator: { title: "SimuladorPro - Neumo y Urgencias + Simulacro 200 pre...", days: 0 },
    status: 0,
  },
  {
    week: 28,
    classes: [
      { title: "Urgencias", days: 5, id: "urgencias" },
      { title: "Reumatologia", days: 1, id: "reumatologia" },
    ],
    simulator: { title: "SimuladorPro - Urgencias y Reuma", days: 0 },
    status: 0,
  },
  {
    week: 29,
    classes: [{ title: "Gastroenterologia", days: 6, id: "gastroenterologia" }],
    simulator: { title: "SimuladorPro - Gastro", days: 0 },
    status: 0,
  },
  {
    week: 30,
    classes: [
      { title: "Gastroenterologia", days: 1, id: "gastroenterologia" },
      { title: "Nefrologia", days: 6, id: "nefrologia" },
    ],
    simulator: { title: "SimuladorPro - Cardio y Nefro", days: 0 },
    status: 0,
  },
  {
    week: 31,
    classes: [
      { title: "Nefrologia", days: 1, id: "nefrologia" },
      { title: "Neumologia", days: 6, id: "neumologia" },
    ],
    simulator: { title: "SimuladorPro - Nefro y Neumo", days: 0 },
    status: 0,
  },
  {
    week: 32,
    classes: [
      { title: "Neumologia", days: 3, id: "neumologia" },
      { title: "Urgencias", days: 3, id: "urgencias" },
    ],
    simulator: { title: "SimuladorPro - Neumo y Urgencias + Simulacro 200 pre...", days: 0 },
    status: 0,
  },
  {
    week: 33,
    classes: [
      { title: "Urgencias", days: 5, id: "urgencias" },
      { title: "Reumatologia", days: 1, id: "reumatologia" },
    ],
    simulator: { title: "SimuladorPro - Urgencias y Reuma", days: 0 },
    status: 0,
  },
  {
    week: 34,
    classes: [
      { title: "Neumologia", days: 3, id: "neumologia" },
      { title: "Urgencias", days: 3, id: "urgencias" },
    ],
    simulator: { title: "SimuladorPro - Neumo y Urgencias + Simulacro 200 pre...", days: 0 },
    status: 0,
  },
  {
    week: 35,
    classes: [
      { title: "Urgencias", days: 5, id: "urgencias" },
      { title: "Reumatologia", days: 1, id: "reumatologia" },
    ],
    simulator: { title: "SimuladorPro - Urgencias y Reuma", days: 0 },
    status: 0,
  },
  {
    week: 36,
    classes: [{ title: "Cardiología", days: 6, id: "cardiologia" }],
    simulator: { title: "SimuladorPro - Cardio", days: 0 },
    status: 0,
  },
  {
    week: 37,
    classes: [
      { title: "Cardiología", days: 1, id: "cardiologia" },
      { title: "Dermatologia", days: 6, id: "dermatologia" },
    ],
    simulator: { title: "SimuladorPro - Cardio y Derma", days: 0 },
    status: 0,
  },
  {
    week: 38,
    classes: [
      { title: "Dermatología", days: 3, id: "dermatologia" },
      { title: "Gastroenterologia", days: 3, id: "gastroenterologia" },
    ],
    simulator: { title: "SimuladorPro - Derma y Gastro + Simulacro 25...", days: 0 },
    status: 0,
  },
  {
    week: 39,
    classes: [{ title: "Gastroenterologia", days: 6, id: "gastroenterologia" }],
    simulator: { title: "SimuladorPro - Gastro", days: 0 },
    status: 0,
  },
  {
    week: 40,
    classes: [
      { title: "Gastroenterologia", days: 1, id: "gastroenterologia" },
      { title: "Nefrologia", days: 6, id: "nefrologia" },
    ],
    simulator: { title: "SimuladorPro - Cardio y Nefro", days: 0 },
    status: 0,
  },
  {
    week: 41,
    classes: [
      { title: "Nefrologia", days: 1, id: "nefrologia" },
      { title: "Neumologia", days: 6, id: "neumologia" },
    ],
    simulator: { title: "SimuladorPro - Nefro y Neumo", days: 0 },
    status: 0,
  },
  {
    week: 42,
    classes: [
      { title: "Neumologia", days: 3, id: "neumologia" },
      { title: "Urgencias", days: 3, id: "urgencias" },
    ],
    simulator: { title: "SimuladorPro - Neumo y Urgencias + Simulacro 200 pre...", days: 0 },
    status: 0,
  },
  {
    week: 43,
    classes: [
      { title: "Urgencias", days: 5, id: "urgencias" },
      { title: "Reumatologia", days: 1, id: "reumatologia" },
    ],
    simulator: { title: "SimuladorPro - Urgencias y Reuma", days: 0 },
    status: 0,
  },
];

export default course;
