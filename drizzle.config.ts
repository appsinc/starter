import { defineConfig } from "drizzle-kit";

export default defineConfig({
	dialect: "sqlite",
	driver: "d1-http",
	schema: "./db/schema.ts",
	out: "./db",
	dbCredentials: {
		token: process.env.CLOUDFLARE_TOKEN!,
		accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
		databaseId: process.env.CLOUDFLARE_DATABASE_ID!,
	},
});
