const connection = require('knex')({
    client: 'mysql',
    connection: {
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'sudoku',
      port     : '3306',
      charset  : 'utf8'
    },
    pool: {
      min: 0,
      max: 20,
    },
  });

module.exports = connection;