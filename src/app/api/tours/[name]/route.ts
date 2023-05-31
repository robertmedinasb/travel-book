import { conn } from '@/utils/database';
import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
  const url = new URL(request.url);
  const name = url.pathname.split('/').pop();

  console.log({ name });

  const { rows } = await conn!.query(
    `SELECT * FROM tours WHERE UPPER(name) LIKE UPPER('%${name}%')`
  );
  return NextResponse.json({ tours: rows });
};
