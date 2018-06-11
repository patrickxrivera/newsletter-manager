exports.up = (knex, Promise) =>
  Promise.all([
    knex.schema.createTable('user_account', (table) => {
      table.increments('id').primary();
      table.string('email_address');
      table.string('access_token');
      table.string('refresh_token');
      table.integer('expiration_date');
    }),

    knex.schema.createTable('newsletter', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('user_account.id');
    }),

    knex.schema.createTable('email', (table) => {
      table.increments('id').primary();
      table.string('account_name');
      table.string('email_address');
    }),

    knex.schema.createTable('newsletter_email', (table) => {
      table.increments('id').primary();
      table.integer('unread_messages');
      table.integer('newsletter_id').unsigned();
      table.foreign('newsletter_id').references('newsletter.id');
      table.integer('email_id').unsigned();
      table.foreign('email_id').references('email.id');
    })
  ]);

exports.down = (knex, Promise) =>
  Promise.all([
    knex.schema.dropTable('newsletter_email'),
    knex.schema.dropTable('email'),
    knex.schema.dropTable('newsletter'),
    knex.schema.dropTable('user')
  ]);
