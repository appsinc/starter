import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

export const auth = (env: Env) => {
	betterAuth({
		database: drizzleAdapter(env.DB, {
			provider: "sqlite",
			usePlural: true,
		}),
	});
};
