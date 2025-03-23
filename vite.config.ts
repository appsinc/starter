import adapter from "@hono/vite-dev-server/cloudflare";
import { reactRouter } from '@react-router/dev/vite'
import { cloudflareDevProxy } from '@react-router/dev/vite/cloudflare'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { getLoadContext } from './load-context'
import serverAdapter from "hono-react-router-adapter/vite";

export default defineConfig({
	plugins: [
		cloudflareDevProxy({ getLoadContext }),
		reactRouter(),
		tsconfigPaths(),
		serverAdapter({
			adapter,
			entry: "api/index.ts",
		}),
	],
	ssr: {
		resolve: {
			conditions: ["workerd", "worker", "browser"],
		},
	},
	resolve: {
		mainFields: ["browser", "module", "main"],
	},
	build: {
		minify: true,
	},
});
