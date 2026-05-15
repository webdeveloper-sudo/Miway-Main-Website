
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const allContent = await prisma.siteContent.findMany({
    select: { key: true }
  });
  console.log(JSON.stringify(allContent.map(c => c.key), null, 2));
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
