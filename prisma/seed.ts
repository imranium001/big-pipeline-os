import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";

const prisma = new PrismaClient();

type SeedItem = {
  title: string;
  action?: string | null;
  agentable?: boolean;
};

type SeedSection = {
  name: string;
  items: SeedItem[];
};

type SeedModule = {
  id: string;
  name: string;
  sections: SeedSection[];
};

type SeedFile = {
  product: string;
  version: number;
  modules: SeedModule[];
};

async function main() {
  const seedPath = path.join(__dirname, "data", "protocol-seed.json");
  const raw = fs.readFileSync(seedPath, "utf-8");
  const data: SeedFile = JSON.parse(raw);

  console.log(`Seeding ${data.modules.length} modules from ${seedPath}...`);

  // Clear protocol library (workspace progress is preserved via cascade only on items;
  // wipe states that reference items we're about to delete)
  await prisma.workspaceItemState.deleteMany();
  await prisma.protocolItem.deleteMany();
  await prisma.protocolSection.deleteMany();
  await prisma.protocolModule.deleteMany();

  let totalItems = 0;

  for (let mi = 0; mi < data.modules.length; mi++) {
    const mod = data.modules[mi];
    await prisma.protocolModule.create({
      data: {
        id: mod.id,
        name: mod.name,
        sortOrder: mi,
      },
    });

    for (let si = 0; si < mod.sections.length; si++) {
      const sec = mod.sections[si];
      const section = await prisma.protocolSection.create({
        data: {
          moduleId: mod.id,
          name: sec.name,
          sortOrder: si,
        },
      });

      if (sec.items?.length) {
        await prisma.protocolItem.createMany({
          data: sec.items.map((item, ii) => ({
            sectionId: section.id,
            title: item.title,
            action: item.action ?? null,
            sortOrder: ii,
          })),
        });
        totalItems += sec.items.length;
      }
    }

    console.log(`  ✓ ${mod.name} (${mod.sections.length} sections)`);
  }

  console.log(`Done. ${data.modules.length} modules, ${totalItems} items.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
