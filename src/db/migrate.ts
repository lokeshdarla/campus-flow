import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
require('dotenv').config();

const migrationClient = postgres(process.env.DATABASE_URL as string, { max: 1 });

async function main() {
  console.log(process.env.DATABASE_URL);

  await migrate(drizzle(migrationClient), {
    migrationsFolder: 'src/db/migrations',
  });

  await migrationClient.end();
}

main();
