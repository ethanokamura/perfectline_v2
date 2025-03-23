import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const dataFilePath = path.join(process.cwd(), 'content', 'courses.json');
    const jsonData = await fs.readFile(dataFilePath, 'utf-8');
    const data = JSON.parse(jsonData);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error reading JSON:", error);
    return NextResponse.json({ message: 'Error fetching data' }, { status: 500 });
  }
}

