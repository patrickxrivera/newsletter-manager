require('dotenv').config();

const app = require('./app');

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`\n=== API up on port: ${port} ===\n`));
