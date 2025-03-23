import { handleError, handleZodError } from "@/api/lib/error";
import { OpenAPIHono } from "@hono/zod-openapi";
import { apiReference } from "@scalar/hono-api-reference";
import { bearerAuth } from "hono/bearer-auth";
import { cors } from "hono/cors";
import type { Bindings } from "hono/types";

const PUBLIC_ROUTES = ["/favicon", "/search", "/schema", "/docs"];

export function API() {
  const api = new OpenAPIHono<{ Bindings: Bindings }>({
    defaultHook: handleZodError,
  }).basePath("/");

  api.onError(handleError);

  // Only show schema in development
  // api.use("/schema", async (c, next) => {
  // 	if (c.env.NODE_ENV !== "development") {
  // 		return c.text("Not Found", 404);
  // 	}
  // 	return next();
  // });

  // Only show docs in development
  // api.use("/docs", async (c, next) => {
  // 	if (c.env.NODE_ENV !== "development") {
  // 		return c.text("Not Found", 404);
  // 	}
  // 	return next();
  // });

  api.doc("/api/schema", (c) => ({
    openapi: "3.1.0",
    info: {
      version: "v1",
      title: "Fuzzy search API",
      description: "Fuzzy search API using Cloudflare worker and Durable Objects",
    },
    servers: [{ url: "http://localhost:3000" }],
  }));

  api.get(
    "/api/docs",
    apiReference({
      spec: {
        url: "/api/schema",
      },
    }),
  );

  api.openAPIRegistry.registerComponent("securitySchemes", "Bearer", {
    type: "http",
    scheme: "bearer",
  });

  // api.use("/api/*", async (c, next) => {
  //   // Skip for public routes
  //   if (PUBLIC_ROUTES.some((route) => c.req.path.startsWith(route))) {
  //     return next();
  //   }

  //   const token = "123";
  //   if (!token) throw new Error("ACCESS_TOKEN is required");
  //   return bearerAuth({ token })(c, next);
  // });

  return api;
}

export type API = ReturnType<typeof API>;
