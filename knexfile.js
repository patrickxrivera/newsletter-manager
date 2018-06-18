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
    connection:
      'postgres://ibqxkmmqwapbjp:7bc68aeaf6c06d96aca200fa7380b20e378e59f873c4b3cabc033535d2cd372c@ec2-107-21-103-146.compute-1.amazonaws.com:5432/d9kht20oiml81s',
    migrations: {
      directory: './server/db/migrations'
    },
    seeds: {
      directory: './server/db/seeds/dev'
    },
    ssl: true,
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
