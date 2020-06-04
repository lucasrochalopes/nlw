import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Teste');

    response.json([
        'Lucas',
        'Jose',
        'Maria',
        'Mario'

    ]);
});

app.listen(3333);