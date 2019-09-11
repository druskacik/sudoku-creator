// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'sudoku',
      port     : '3306',
      charset  : 'utf8'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'sudoku',
      user:     'root',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'sudoku',
      user:     'root',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
