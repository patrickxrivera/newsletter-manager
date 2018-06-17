module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/newsletters_dev',
    migrations: {
      directory: './server/db/migrations'
    },
    seeds: {
      directory: './server/db/seeds/dev'
    },
    useNullAsDefault: true
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/newsletters_test',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/test'
    },
    useNullAsDefault: true
  }
};
