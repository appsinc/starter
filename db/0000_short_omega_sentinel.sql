CREATE TABLE `accounts` (
	`id` text(128) PRIMARY KEY NOT NULL,
	`accountId` text(255) NOT NULL,
	`providerId` text(255) NOT NULL,
	`userId` text(128) NOT NULL,
	`accessToken` text(2048),
	`refreshToken` text(1024),
	`idToken` text(2048),
	`accessTokenExpiresAt` text,
	`refreshTokenExpiresAt` text,
	`scope` text(255),
	`password` text(255),
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updatedAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sessions` (
	`id` text(128) PRIMARY KEY NOT NULL,
	`userId` text(128) NOT NULL,
	`token` text(255) NOT NULL,
	`expiresAt` text NOT NULL,
	`ipAddress` text(255),
	`userAgent` text(255),
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updatedAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `sessions_token_unique` ON `sessions` (`token`);--> statement-breakpoint
CREATE TABLE `users` (
	`id` text(128) PRIMARY KEY NOT NULL,
	`name` text(255),
	`email` text(255) NOT NULL,
	`emailVerified` integer DEFAULT false NOT NULL,
	`image` text(255),
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updatedAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);--> statement-breakpoint
CREATE TABLE `verifications` (
	`id` text(128) PRIMARY KEY NOT NULL,
	`identifier` text(255) NOT NULL,
	`value` text(255) NOT NULL,
	`expiresAt` text NOT NULL,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updatedAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
