// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  mainConnection: {
    client: 'postgres',
    connection: {
      host : 'postgres',
      port : 5432,
      user : 'user',
      password : 'password',
      database : 'zhekina',
    },
    migrations: {
      tableName: 'migrations'
    }
  }
};
