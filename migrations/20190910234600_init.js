
exports.up = function(knex) {
    return Promise.all([
        knex.schema.createTable('sudoku', (table) => {
            table.increments('id').primary();
            table.string('puzzle');
            table.integer('number_of_clues');
            table.integer('time_of_creation');
        }).then(() => {
            console.log('Table sudoku was created.');
        }).catch(err => {
            console.log(err);
        })
    ])
};

exports.down = function(knex) {
  return Promise.all([
      knex.schema.dropTable('sudoku')
        .then(() => {
            console.log('Table sudoku was deleted.');
        })
        .catch(err => {
            console.log(err);
        })
  ])
};
