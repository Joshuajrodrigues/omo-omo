CREATE TABLE IF NOT EXISTS "userRoles" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text,
	"roleId" text
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "userRoles" ADD CONSTRAINT "userRoles_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "userRoles" ADD CONSTRAINT "userRoles_roleId_roles_id_fk" FOREIGN KEY ("roleId") REFERENCES "public"."roles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
