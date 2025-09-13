import { sql } from 'drizzle-orm';
import { pgTable, serial, integer, varchar, timestamp, uuid } from 'drizzle-orm/pg-core';
import Crypto from "node:crypto";

export const user_session_gen = () => {
	const rand = Crypto.randomBytes(24);
	return rand.toString("hex");	
}

export const users = pgTable("users", {
	id: uuid().primaryKey().defaultRandom(),
	username: varchar().notNull().unique(),
	password: varchar().notNull(),

	session: varchar().notNull().$default(user_session_gen),
	
	created: timestamp().notNull().defaultNow()
});
