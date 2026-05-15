
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting CTA cleanup...');

  const deletedCta = await prisma.siteContent.deleteMany({
    where: {
      OR: [
        { key: { endsWith: '_cta' } },
        { key: { endsWith: '_cta_label' } },
        { key: { endsWith: '_cta_title' } }
      ]
    }
  });

  console.log(`Deleted ${deletedCta.count} CTA related keys.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
