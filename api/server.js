const express = require('express');
const server = express();
const helmet = require('helmet');
const games = require('../games/gamesModel');

server.use(helmet());
server.use(express.json());

server.get('/', async (req, res) => {
    res.send("I am workingggggg");
});

server.get('/games', async (req, res) => {
    const rows = await games.getAll();
  
    res.status(200).json(rows);
});

server.post('/games', async (req, res) => {
    const newGame = await games.insert(req.body);
    res.status(200).json(newGame);
  });


module.exports = server;