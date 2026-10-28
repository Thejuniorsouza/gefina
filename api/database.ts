import { Pool } from 'pg';

if (!process.env.DATABASE_URL) {
  throw new Error('A variável DATABASE_URL não está definida. Por favor, defina-a no arquivo .env.');
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;