import { defineConfig } from 'drizzle-kit';
console.log(process.env.DATABASE_URL);

export default defineConfig({
  dialect: 'mysql',
  schema: './database/schema.ts',
  out: './database/migrations',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
