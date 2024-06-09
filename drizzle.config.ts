import 'dotenv/config';
import {defineConfig} from 'drizzle-kit';

export default defineConfig({
    schema: './src/db/todo/schema.ts',
    out: './src/db/todo/migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
});
