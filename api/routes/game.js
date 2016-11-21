import express from 'express';
import Game from '../models/game'
import _ from 'underscore';

const router = express.Router();

// Get all
router.get('/', (req, res) => {
  Game.find({}, (err, games) => {
    if (err) {
      return res.send(err);
    }

    res.json(games);
  })
});

// Add new
router.post('/', (req, res) => {
  const game = new Game(req.body);

  game.save((err) => {
    if (err) {
      return res.send(err);
    }

    res.send({message: 'Success'});
  });
});

// Get by id
router.get('/:id', (req, res) => {
  Game.findOne({_id: req.params.id}, (err, game) => {
    if (err) {
      return res.send(err);
    }

    if (!game) {
      res.json({message: "No game found"});
    }

    _.extend(game, req.body);

    game.save((err) => {
      if (err) {
        res.send(err);
      }

      res.json({message: 'Success'});
    });
  });
});

// Update by id
router.put('/:id', (req, res) => {
  Game.findOne({ _id: req.params.id}, (err, game) => {
    if (err) {
      return res.send(err);
    }

    res.json(game);
  });
});

//delete by id
router.put('/:id', (req, res) => {
  Game.remove({ _id: req.params.id}, (err, game) => {
    if (err) {
      return res.send(err);
    }

    res.json({ message: 'Success'});
  });
});

export default router;