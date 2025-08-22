// lib/fakeData.ts
export const fakeUsers = [
  {
    id: "1",
    fullName: "Sofía Marquevich",
    email: "sofia@mail.com",
    password: "123456",
  },
  {
    id: "2",
    fullName: "Juan Perez",
    email: "juan@mail.com",
    password: "abcdef",
  },
];

export const fakeReports = [
  {
    id: "1",
    date: "2025-08-21",
    hemograma: { hemoglobina: 13.5, hematocrito: 42, leucocitos: 5600 },
    bioquimica: { glucosa: 92, colesterol: 178, trigliceridos: 120 },
    estado: "Normal",
  },
  {
    id: "2",
    date: "2025-08-15",
    hemograma: { hemoglobina: 12.1, hematocrito: 38, leucocitos: 7200 },
    bioquimica: { glucosa: 105, colesterol: 210, trigliceridos: 150 },
    estado: "Requiere control",
  },
];

export type ClinicalSample = { id: string; muestra: number; fecha: string; valor: number };

export const clinicalSeries: Record<string, ClinicalSample[]> = {
  Glucemia: [
    { id: "g1", muestra: 1, fecha: "2025-01-10", valor: 92 },
    { id: "g2", muestra: 2, fecha: "2025-02-12", valor: 104 },
    { id: "g3", muestra: 3, fecha: "2025-03-15", valor: 99 },
    { id: "g4", muestra: 4, fecha: "2025-04-20", valor: 140 },
    { id: "g5", muestra: 5, fecha: "2025-05-22", valor: 115 },
    { id: "g6", muestra: 6, fecha: "2025-06-25", valor: 98 },
    { id: "g7", muestra: 7, fecha: "2025-07-28", valor: 87 },
    { id: "g8", muestra: 8, fecha: "2025-08-20", valor: 90 },
    { id: "g9", muestra: 9, fecha: "2025-09-19", valor: 95 },
  ],
  Colesterol: [
    { id: "c1", muestra: 1, fecha: "2025-01-10", valor: 210 },
    { id: "c2", muestra: 2, fecha: "2025-02-12", valor: 198 },
    { id: "c3", muestra: 3, fecha: "2025-03-15", valor: 185 },
    { id: "c4", muestra: 4, fecha: "2025-04-20", valor: 195 },
    { id: "c5", muestra: 5, fecha: "2025-05-22", valor: 178 },
  ],
  Triglicéridos: [
    { id: "t1", muestra: 1, fecha: "2025-01-10", valor: 150 },
    { id: "t2", muestra: 2, fecha: "2025-02-12", valor: 180 },
    { id: "t3", muestra: 3, fecha: "2025-03-15", valor: 120 },
    { id: "t4", muestra: 4, fecha: "2025-04-20", valor: 135 },
  ],
  Hemoglobina: [
    { id: "h1", muestra: 1, fecha: "2025-01-10", valor: 13.4 },
    { id: "h2", muestra: 2, fecha: "2025-03-10", valor: 12.9 },
    { id: "h3", muestra: 3, fecha: "2025-05-10", valor: 13.7 },
  ],
};
