exports.up = (knex, Promise) =>
  Promise.all([
    knex.schema.createTable('user_account', (table) => {
      table.increments('id').primary();
      table.text('email_address').unique();
      table.string('access_token');
      table.string('refresh_token');
    }),

    knex.schema.createTable('label', (table) => {
      table.string('id').primary();
      table.string('name');
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('user_account.id');
    }),

    knex.schema.createTable('email', (table) => {
      table.string('email_address').primary();
      table.string('account_name');
    }),

    knex.schema.createTable('label_email', (table) => {
      table.increments('id').primary();
      table.string('label_id').unsigned();
      table.foreign('label_id').references('label.id');
      table.string('email_address');
      table.foreign('email_address').references('email.email_address');
    })
  ]);

exports.down = (knex, Promise) =>
  Promise.all([
    knex.schema.dropTable('label_email'),
    knex.schema.dropTable('email'),
    knex.schema.dropTable('label'),
    knex.schema.dropTable('user_account')
  ]);
