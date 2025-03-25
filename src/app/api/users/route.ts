import { firestore } from "@/lib/firestore"
import { NextResponse } from "next/server"

export async function GET() {
  const users = await firestore.collection('users').get();
  console.log(users);

  return NextResponse.json(users);
}