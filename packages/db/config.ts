import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config();

export default defineConfig({
	dialect: "postgresql",
	schema: "./schema.ts",
	out: "./migrations",
	dbCredentials: {
		url: process.env.DATABASE_URL as string,
	},
});
