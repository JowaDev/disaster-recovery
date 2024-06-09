CREATE TABLE IF NOT EXISTS "todo" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(256),
	"description" varchar(1024),
	"completed" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
