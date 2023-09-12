import pool from "@/db/db";

export const getData = async () => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM tesing');
    const data = result.rows;
    client.release();

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const insertData = async (name, email) => {
  try {
    const client = await pool.connect();

    // Define the SQL INSERT query
    const query = 'INSERT INTO tesing (name, email) VALUES ($1, $2)';
    const values = [name, email];

    // Execute the query
    await client.query(query, values);

    client.release();
    console.log('Data inserted successfully.');
  } catch (error) {
    console.error('Error inserting data:', error);
  }
};
