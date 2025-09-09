import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET() {
  const cwd = process.cwd();
  const candidates = [
    path.join(cwd, 'public', 'Guy Stitt - Resume.pdf'),
    path.join(cwd, 'Guy Stitt - Resume.pdf'),
  ];

  let filePath: string | null = null;
  for (const p of candidates) {
    try {
      await fs.access(p);
      filePath = p;
      break;
    } catch {
      // continue
    }
  }

  if (!filePath) {
    return new NextResponse('Resume not found', { status: 404 });
  }

  const data = await fs.readFile(filePath);
  const res = new NextResponse(data, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Guy-Stitt-Resume.pdf"',
      'Cache-Control': 'public, max-age=600',
    },
  });
  return res;
}

