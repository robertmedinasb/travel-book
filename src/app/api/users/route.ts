import { NextResponse } from 'next/server';
import { conn } from '../../../utils/database';

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const { rows } = await conn!.query(
      `INSERT INTO users(firstname, lastname, email, password) VALUES($1, $2, $3, $4) RETURNING *`,
      [body.firstName, body.lastName, body.email, body.password]
    );

    return NextResponse.json({ user: rows[0] });
  } catch (err: any) {
    console.log({ code: err.code });
    if ('code' in err && err.code === '23505') {
      return NextResponse.json({
        error: { ...err, message: 'Email already exists' },
      });
    }
    return NextResponse.json({
      error: { ...err, message: 'There was an unexpected error' },
    });
  }
};
