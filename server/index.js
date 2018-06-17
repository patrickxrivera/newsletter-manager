require('dotenv').config();

const app = require('./app');
const { Client } = require('pg');

const port = process.env.PORT || 8080;

console.log(`DATABASE \n ${process.env.DATABASE_URL}`);

if (process.env.NODE_ENV === 'production') {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });

  client.connect();

  client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
    if (err) throw err;

    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    client.end();
  });
}

app.listen(port, () => console.log(`\n=== API up on port: ${port} ===\n`));
