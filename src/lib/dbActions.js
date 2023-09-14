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

export const insertData = async (fullName, email, subject, message) => {
  try {
    const client = await pool.connect();

    // Define the SQL INSERT query
    const query = 'INSERT INTO contact (full_name, email, subject, message) VALUES ($1, $2, $3, $4)';
    const values = [fullName, email, subject, message];

    // Execute the query
    await client.query(query, values);

    client.release();
    console.log('Data inserted successfully.');
  } catch (error) {
    console.error('Error inserting data:', error);
  }
};