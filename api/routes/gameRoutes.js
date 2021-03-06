import {Game} from '../models'
import _ from 'underscore';

export function all(req, res) {
  return new Promise((resolve, reject) => {
    Game.find()
      .then(games => {
        res.json(games);
        resolve();
      })
      .catch(err => {
        res.send(err);
        reject();
      });
  });
}

export function create(req, res) {
  const game = new Game(req.body);
  game.save()
    .then(() => res.send({message: 'success'}))
    .catch(err => res.send(err));
}

export function get(req, res) {
  Game.findOne({_id: req.params.id})
    .then(game => res.json(game))
    .catch(err => res.send(err));
}

export function update(req, res) {
  Game.findOne({_id: req.params.id})
    .then(game => {
      if (!game) res.json({message: "no game found"});
      _.extend(game, req.body);
      game.save().then(res.json({message: "success"})).catch(err => res.send(err));
    })
    .catch(err => res.send(err));
}

export function remove(req, res) {
  Game.remove({_id: req.params.id})
    .then(res.send({message: 'success'}))
    .catch(err => res.send(err))
}