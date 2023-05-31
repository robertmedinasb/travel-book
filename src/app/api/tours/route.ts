import { conn } from '@/utils/database';
import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
  const { rows } = await conn!.query('SELECT * FROM tours');
  return NextResponse.json({ tours: rows });
};

export const POST = async (req: Request) => {
  const body = await req.json();
  const { rows } = await conn!.query(
    'INSERT INTO tours(name, description,price,duration, image) VALUES($1, $2, $3, $4, $5) RETURNING *',
    [body.name, body.description, body.price, body.duration, body.image]
  );
  return NextResponse.json({ tours: rows[0] });
};
