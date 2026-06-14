const { PrismaClient } = require('@prisma/client');
const { PrismaNeon } = require('@prisma/adapter-neon');
require('dotenv').config();

const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.pais.createMany({
    data: [
      { nombre: 'Argentina', codigoIso: 'ARG' },
      { nombre: 'Brasil', codigoIso: 'BRA' },
      { nombre: 'Chile', codigoIso: 'CHL' },
      { nombre: 'Colombia', codigoIso: 'COL' },
      { nombre: 'México', codigoIso: 'MEX' },
      { nombre: 'Perú', codigoIso: 'PER' },
      { nombre: 'Uruguay', codigoIso: 'URY' },
    ],
    skipDuplicates: true,
  });
  console.log('✅ Países insertados');
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
