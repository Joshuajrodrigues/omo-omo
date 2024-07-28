CREATE TABLE IF NOT EXISTS "roles" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"createdOn" timestamp DEFAULT now()
);
