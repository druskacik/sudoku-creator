require('dotenv').config();

const environment = process.env.NODE_ENV || 'development';

const config = (environment) => {
  if (environment === 'development') {
    return {
      client: 'mysql',
      connection: {
        host     : process.env.DB_HOST,
        user     : process.env.DB_USER,
        password : process.env.DB_PASS,
        database : process.env.DB_NAME,
        port     : process.env.DB_PORT,
        charset  : 'utf8'
      },
      pool: {
        min: 0,
        max: 20,
      },
    }
  } else {
    return {
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
  }
}

const connection = require('knex')(config(environment));

module.exports = connection;