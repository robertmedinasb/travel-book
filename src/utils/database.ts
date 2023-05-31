import { Pool } from 'pg';

let conn: Pool | null = null;

if (!conn) {
  conn = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: 'travelbook',
  });
}

export { conn };
