import { createId } from "@paralleldrive/cuid2";
import { sql } from "drizzle-orm";
import { createSelectSchema } from "drizzle-zod";

import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
	id: text("id", { length: 128 })
		.$defaultFn(() => createId())
		.primaryKey(),
	name: text("name", { length: 255 }),
	email: text("email", { length: 255 }).notNull().unique(),
	emailVerified: integer("emailVerified", {
		mode: "boolean",
	})
		.notNull()
		.default(false),
	image: text("image", { length: 255 }),
	createdAt: text("createdAt").notNull().default(sql`CURRENT_TIMESTAMP`),
	updatedAt: text("updatedAt").notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const UserSchema = createSelectSchema(users);

export const sessions = sqliteTable("sessions", {
	id: text("id", { length: 128 })
		.$defaultFn(() => createId())
		.primaryKey(),
	userId: text("userId", { length: 128 }).notNull(),
	token: text("token", { length: 255 }).notNull().unique(),
	expiresAt: text("expiresAt").notNull(),
	ipAddress: text("ipAddress", { length: 255 }),
	userAgent: text("userAgent", { length: 255 }),
	createdAt: text("createdAt").notNull().default(sql`CURRENT_TIMESTAMP`),
	updatedAt: text("updatedAt").notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const SessionSchema = createSelectSchema(sessions);

export const accounts = sqliteTable("accounts", {
	id: text("id", { length: 128 })
		.$defaultFn(() => createId())
		.primaryKey(),
	accountId: text("accountId", { length: 255 }).notNull(),
	providerId: text("providerId", { length: 255 }).notNull(),
	userId: text("userId", { length: 128 }).notNull(),
	accessToken: text("accessToken", { length: 2048 }),
	refreshToken: text("refreshToken", { length: 1024 }),
	idToken: text("idToken", { length: 2048 }),
	accessTokenExpiresAt: text("accessTokenExpiresAt"),
	refreshTokenExpiresAt: text("refreshTokenExpiresAt"),
	scope: text("scope", { length: 255 }),
	password: text("password", { length: 255 }),
	createdAt: text("createdAt").notNull().default(sql`CURRENT_TIMESTAMP`),
	updatedAt: text("updatedAt").notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const AccountSchema = createSelectSchema(accounts);

export const verifications = sqliteTable("verifications", {
	id: text("id", { length: 128 })
		.$defaultFn(() => createId())
		.primaryKey(),
	identifier: text("identifier", { length: 255 }).notNull(),
	value: text("value", { length: 255 }).notNull(),
	expiresAt: text("expiresAt").notNull(),
	createdAt: text("createdAt").notNull().default(sql`CURRENT_TIMESTAMP`),
	updatedAt: text("updatedAt").notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const VerificationSchema = createSelectSchema(verifications);
