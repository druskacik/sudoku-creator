require('dotenv').config();

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

  websupport: {
    client: 'postgresql',
    connection: {
      host     : 'postgresql.websupport.sk',
      user     : 'sudoku',
      password : 'DancingLinks5',
      database : 'sudoku',
      port     : '5432',
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
      min: 0,
      max: 100
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
		connection: {
      host: 'ec2-174-129-226-232.compute-1.amazonaws.com',
      database: 'd24kkncnv2h51',
      user: 'gpucdqerafrfkt',
      password: '2dd85436bcb489b342251407ba8cf04c1fe26ecf3734d3e2ec9262e0e0277aa3',
      port: 5432
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