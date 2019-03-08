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
    try {
    const rows = await games.getAll();
  
    res.status(200).json(rows);
    } catch(error)  {
        res.status(500).json({message:'internal server error'})
        
    }
});

server.post('/games', async (req, res) => {
    const{title, genre} = req.body;
    if(!title || !genre)
    return res.status(422).json({message:'you need to provide a title and genre'})
    try {
        const newGame = await games.insert(req.body);
        res.status(201).json(newGame);
    } catch (error) {
        res.status(500).json({message:'internal sever error'})
    }
   
  });


module.exports = server;