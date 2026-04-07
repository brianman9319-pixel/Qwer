const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const quizzes = require('./data/quizzes.json');

app.get('/api/quizzes', (req, res) => {
    res.json(quizzes);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});