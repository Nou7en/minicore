import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
      return res
        .status(400)
        .json({ error: "Debe proporcionar startDate y endDate" });
    }

    try {
      const gastos = await prisma.gasto.findMany({
        where: {
          fecha: {
            gte: new Date(startDate),
            lte: new Date(endDate),
          },
        },
        include: {
          empleado: {
            include: {
              departamento: true,
            },
          },
        },
      });

      const totalesPorDepartamento = gastos.reduce((acc, gasto) => {
        const depto = gasto.empleado.departamento.nombre;
        acc[depto] = (acc[depto] || 0) + gasto.monto;
        return acc;
      }, {});

      const departamentos = await prisma.departamento.findMany();
      const resultado = departamentos.map((depto) => ({
        departamento: depto.nombre,
        total: totalesPorDepartamento[depto.nombre] || 0,
      }));

      res.status(200).json(resultado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Método no permitido" });
  }
}
