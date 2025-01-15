const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Crear departamentos
  const it = await prisma.departamento.create({ data: { nombre: "IT" } });
  const desarrollo = await prisma.departamento.create({
    data: { nombre: "Desarrollo" },
  });
  const diseño = await prisma.departamento.create({
    data: { nombre: "Diseño" },
  });
  const marketing = await prisma.departamento.create({
    data: { nombre: "Marketing" },
  });
  const recursosHumanos = await prisma.departamento.create({
    data: { nombre: "Recursos Humanos" },
  });

  // Crear empleados
  const empleadosIT = [
    await prisma.empleado.create({
      data: { nombre: "Zoila Baca", departamento_id: it.id },
    }),
    await prisma.empleado.create({
      data: { nombre: "Pedro Pica", departamento_id: it.id },
    }),
  ];
  const empleadosDesarrollo = [
    await prisma.empleado.create({
      data: { nombre: "Aquiles C", departamento_id: desarrollo.id },
    }),
    await prisma.empleado.create({
      data: { nombre: "Maria Rojas", departamento_id: desarrollo.id },
    }),
  ];
  const empleadosDiseño = [
    await prisma.empleado.create({
      data: { nombre: "Johnny Melas", departamento_id: diseño.id },
    }),
    await prisma.empleado.create({
      data: { nombre: "Ana Blanco", departamento_id: diseño.id },
    }),
  ];
  const empleadosMarketing = [
    await prisma.empleado.create({
      data: { nombre: "Maria Lopez", departamento_id: marketing.id },
    }),
    await prisma.empleado.create({
      data: { nombre: "Carlos Ruiz", departamento_id: marketing.id },
    }),
  ];
  const empleadosRRHH = [
    await prisma.empleado.create({
      data: { nombre: "Luisa Pérez", departamento_id: recursosHumanos.id },
    }),
    await prisma.empleado.create({
      data: { nombre: "Jorge González", departamento_id: recursosHumanos.id },
    }),
  ];

  // Crear gastos
  const gastos = [
    // IT
    {
      descripcion: "Servidor",
      monto: 2000,
      fecha: new Date("2020-03-15"),
      empleado_id: empleadosIT[0].id,
    },
    {
      descripcion: "Monitor",
      monto: 300,
      fecha: new Date("2021-05-22"),
      empleado_id: empleadosIT[1].id,
    },
    {
      descripcion: "Teclado",
      monto: 50,
      fecha: new Date("2022-07-10"),
      empleado_id: empleadosIT[0].id,
    },
    {
      descripcion: "Mouse",
      monto: 30,
      fecha: new Date("2023-02-14"),
      empleado_id: empleadosIT[1].id,
    },
    {
      descripcion: "UPS",
      monto: 150,
      fecha: new Date("2024-08-20"),
      empleado_id: empleadosIT[0].id,
    },
    {
      descripcion: "Cableado",
      monto: 100,
      fecha: new Date("2025-01-12"),
      empleado_id: empleadosIT[1].id,
    },

    // Desarrollo
    {
      descripcion: "Licencia IDE",
      monto: 500,
      fecha: new Date("2020-06-15"),
      empleado_id: empleadosDesarrollo[0].id,
    },
    {
      descripcion: "Laptop",
      monto: 1200,
      fecha: new Date("2021-10-05"),
      empleado_id: empleadosDesarrollo[1].id,
    },
    {
      descripcion: "Servidor Cloud",
      monto: 200,
      fecha: new Date("2022-01-18"),
      empleado_id: empleadosDesarrollo[0].id,
    },
    {
      descripcion: "Monitor",
      monto: 300,
      fecha: new Date("2023-03-25"),
      empleado_id: empleadosDesarrollo[1].id,
    },
    {
      descripcion: "Teclado Mecánico",
      monto: 150,
      fecha: new Date("2024-05-10"),
      empleado_id: empleadosDesarrollo[0].id,
    },
    {
      descripcion: "Hosting",
      monto: 100,
      fecha: new Date("2025-07-15"),
      empleado_id: empleadosDesarrollo[1].id,
    },

    // Diseño
    {
      descripcion: "Software Gráfico",
      monto: 600,
      fecha: new Date("2020-08-20"),
      empleado_id: empleadosDiseño[0].id,
    },
    {
      descripcion: "Tablet Digital",
      monto: 800,
      fecha: new Date("2021-11-11"),
      empleado_id: empleadosDiseño[1].id,
    },
    {
      descripcion: "Monitor",
      monto: 250,
      fecha: new Date("2022-02-25"),
      empleado_id: empleadosDiseño[0].id,
    },
    {
      descripcion: "Impresora",
      monto: 300,
      fecha: new Date("2023-06-15"),
      empleado_id: empleadosDiseño[1].id,
    },
    {
      descripcion: "Diseño Gráfico",
      monto: 400,
      fecha: new Date("2024-10-01"),
      empleado_id: empleadosDiseño[0].id,
    },
    {
      descripcion: "Diseño UI/UX",
      monto: 500,
      fecha: new Date("2025-09-10"),
      empleado_id: empleadosDiseño[1].id,
    },

    // Marketing
    {
      descripcion: "Publicidad",
      monto: 1000,
      fecha: new Date("2020-12-15"),
      empleado_id: empleadosMarketing[0].id,
    },
    {
      descripcion: "Campaña SEO",
      monto: 800,
      fecha: new Date("2021-09-10"),
      empleado_id: empleadosMarketing[1].id,
    },
    {
      descripcion: "Anuncios Facebook",
      monto: 500,
      fecha: new Date("2022-05-20"),
      empleado_id: empleadosMarketing[0].id,
    },
    {
      descripcion: "Email Marketing",
      monto: 300,
      fecha: new Date("2023-08-05"),
      empleado_id: empleadosMarketing[1].id,
    },
    {
      descripcion: "Publicidad Gráfica",
      monto: 700,
      fecha: new Date("2024-11-20"),
      empleado_id: empleadosMarketing[0].id,
    },
    {
      descripcion: "Campaña Google Ads",
      monto: 1200,
      fecha: new Date("2025-02-15"),
      empleado_id: empleadosMarketing[1].id,
    },

    // Recursos Humanos
    {
      descripcion: "Capacitación",
      monto: 1500,
      fecha: new Date("2020-02-15"),
      empleado_id: empleadosRRHH[0].id,
    },
    {
      descripcion: "Material Didáctico",
      monto: 300,
      fecha: new Date("2021-06-10"),
      empleado_id: empleadosRRHH[1].id,
    },
    {
      descripcion: "Evento Corporativo",
      monto: 2000,
      fecha: new Date("2022-03-01"),
      empleado_id: empleadosRRHH[0].id,
    },
    {
      descripcion: "Bienestar Empleados",
      monto: 1000,
      fecha: new Date("2023-04-20"),
      empleado_id: empleadosRRHH[1].id,
    },
    {
      descripcion: "Software Gestión",
      monto: 800,
      fecha: new Date("2024-07-30"),
      empleado_id: empleadosRRHH[0].id,
    },
    {
      descripcion: "Reclutamiento",
      monto: 1200,
      fecha: new Date("2025-03-12"),
      empleado_id: empleadosRRHH[1].id,
    },
  ];

  // Insertar los gastos
  await prisma.gasto.createMany({ data: gastos });
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
