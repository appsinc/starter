// Generated by Wrangler by running `wrangler types` (hash: 2905fd8e181cd2f4083a615fa51f1913)
// Runtime types generated with workerd@1.20250320.0 2025-03-05 nodejs_compat,nodejs_compat_populate_process_env
declare namespace Cloudflare {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface,@typescript-eslint/no-empty-object-type
	interface Env {}
}
interface Env extends Cloudflare.Env {
	DB: D1Database;
}
