const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Crear departamentos
  const it = await prisma.departamento.create({
    data: { nombre: "IT" },
  });
  const desarrollo = await prisma.departamento.create({
    data: { nombre: "Desarrollo" },
  });
  const diseño = await prisma.departamento.create({
    data: { nombre: "Diseño" },
  });
  const marketing = await prisma.departamento.create({
    data: { nombre: "Marketing" },
  });

  // Crear empleados
  const zoila = await prisma.empleado.create({
    data: { nombre: "Zoila Baca", departamento_id: it.id },
  });
  const aquiles = await prisma.empleado.create({
    data: { nombre: "Aquiles C", departamento_id: desarrollo.id },
  });
  const johnny = await prisma.empleado.create({
    data: { nombre: "Johnny Melas", departamento_id: diseño.id },
  });

  // Crear gastos
  await prisma.gasto.createMany({
    data: [
      {
        descripcion: "UPS",
        monto: 60,
        fecha: new Date("2024-11-16"),
        empleado_id: zoila.id,
      },
      {
        descripcion: "Monitor secundario",
        monto: 250,
        fecha: new Date("2024-11-22"),
        empleado_id: johnny.id,
      },
      {
        descripcion: "Rollup",
        monto: 60,
        fecha: new Date("2024-11-23"),
        empleado_id: johnny.id,
      },
      {
        descripcion: "UPS",
        monto: 60,
        fecha: new Date("2024-11-25"),
        empleado_id: zoila.id,
      },
    ],
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
