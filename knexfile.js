// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host : 'localhost',
      port : 3306,
      database: 'tcc',
      user:     'root',
      password: ''
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
