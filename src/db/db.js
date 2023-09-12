// db.js
import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'db.rglnbclokhxbbgxjgnsm.supabase.co',
  database: 'postgres',
  password: 'Kasim@97583344',
  port: 5432, // Change to your PostgreSQL port if needed
});

export default pool;
