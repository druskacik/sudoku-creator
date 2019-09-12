const express = require('express');
const knex = require('./knex_connection');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.post('/post-sudoku', async (req, res) => {
    const stringifyPuzzle = (puzzle) => {
        let stringified = '';
        let numberOfClues = 0;
        for (let i = 0; i < 9; i += 1) {
            for (let j = 0; j < 9; j += 1) {
                stringified += puzzle[i][j] ? `${puzzle[i][j]}` : '.';
                if (Boolean(puzzle[i][j])) {
                    numberOfClues += 1;
                }
            }
        }
        return [stringified, numberOfClues];
    }
    try {
        const [puzzle, numberOfClues] = stringifyPuzzle(req.body.puzzle);
        await knex('sudoku').insert({
            puzzle,
            number_of_clues: numberOfClues,
            time_of_creation: req.body.creationTime,
        });
        console.log('Sudoku inserted.')
        res.status(200)
            .json({
                note: 'Success!',
            })
    } catch(err) {
        console.log(err);
        res.status(500)
            .json({
                error: 'Error !',
            })
    }
})

app.get('/api/database', async (req, res) => {
    try {
        const sudokus = await knex('sudoku').select();
        console.log(sudokus.length);
        console.log(sudokus);
        res.status(200)
            .json({
                sudokus,
                error: false,
            })
    } catch(err) {
        console.log(err);
        res.status(500)
            .json({
                error: err,
                message: 'Internal server error.',
            })
    }
    
})

const startServer = (port) => {
    app.listen(port, async () => {
        console.log(`App listening on port ${port}`);
    });
}

startServer(port);