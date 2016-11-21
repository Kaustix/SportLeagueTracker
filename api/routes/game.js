import express from 'express';
import Game from '../models/game'
import _ from 'underscore';

const router = express.Router();

// Get all
router.get('/', (req, res) => {
  Game.find()
    .then(games => res.json(games))
    .catch(err => {res.send(err)});
});

// Add new
router.post('/', (req, res) => {
  const game = new Game(req.body);
  game.save()
    .then(() => res.send({message: 'success'}))
    .catch(err => res.send(err));
});

// Get by id
router.get('/:id', (req, res) => {
  Game.findOne({_id: req.params.id})
    .then(game => {
      if (!game) res.json({message: "no game found"});
      _.extend(game, req.body);
      game.save().then(res.json({message: "success"})).catch(err => res.send(err));
    })
    .catch(err => res.send(err));
});

// Update by id
router.put('/:id', (req, res) => {
  Game.findOne({ _id: req.params.id})
    .then(game => res.json(game))
    .catch(err => res.send(err));
});

//delete by id
router.put('/:id', (req, res) => {
  Game.remove({ _id: req.params.id})
    .then(res.send({message: 'success'}))
    .catch(err => res.send(err))
});

export default router;