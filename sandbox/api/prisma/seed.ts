import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.project.deleteMany();
  await prisma.project.createMany({
    data: [
      { orgId: 'org-1', name: 'Bridge repair', status: 'ACTIVE', budget: 120000 },
      { orgId: 'org-1', name: 'School extension', status: 'ON_HOLD', budget: 450000 },
      { orgId: 'org-1', name: 'Library fit-out', status: 'DONE', budget: 80000 },
      { orgId: 'org-2', name: 'Other org project', status: 'ACTIVE', budget: 1 },
    ],
  });
  console.log('seeded:', await prisma.project.count());
}
 main().finally(() => prisma.$disconnect());