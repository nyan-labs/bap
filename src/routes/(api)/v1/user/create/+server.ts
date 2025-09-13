import { error, json } from '@sveltejs/kit';
import { db, tables } from "$lib/server/db";
import argon2 from "argon2";

export const POST = async ({ request }) => {
	const data = await request.formData();
  const username = data.get("username") as string;
  const password = data.get("password") as string;

  if(!password) return error(400, "password required")
  const hashed_password = await argon2.hash(password); 

  const users = await db.insert(tables.users).values({
    username: "hi",
    password: hashed_password,
  }).returning({
    username: tables.users.username,
    session: tables.users.session   
  });
  
  if(!users[0]) return error(500, "error while registering");
    
  const user = users[0];

  return json({
    session: user.session
  });
}