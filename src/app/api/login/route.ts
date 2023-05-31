import { NextResponse } from 'next/server';
import { conn } from '../../../utils/database';

export const POST = async (req: Request) => {
  const body = await req.json();
  const { rows } = await conn!.query(
    'SELECT * FROM users WHERE email = $1 and password = $2',
    [body.email, body.password]
  );
  if (rows.length === 0)
    return NextResponse.json({ error: { message: 'User not found' } });
  return NextResponse.json({ user: rows[0] });
};
