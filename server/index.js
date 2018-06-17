require('dotenv').config();

const app = require('./app');
const { Client } = require('pg');

const port = process.env.PORT || 8080;

if (process.env.NODE_ENV === 'production') {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });
  console.log(process.env.DATABASE_URL);
  client.connect();

  client.query('SELECT * FROM user_account;', (err, res) => {
    if (err) throw err;
    console.log(res);
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    client.end();
  });
}

app.listen(port, () => console.log(`\n=== API up on port: ${port} ===\n`));
