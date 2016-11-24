import mongoose from 'mongoose';

const GameSchema = new mongoose.Schema({
  date: {type: Date, required: true},
  place: {type: String, required: true},
  address: {type: String},
  opponent: {type: String},
  home_away: {type: String},
  score: {
    team: {type: Number},
    opponent: {type: Number}
  }
});

let Game;
if (mongoose.models.Game) {
  Game = mongoose.model("Game");
} else {
  Game = mongoose.model("Game", GameSchema);
}

export default Game;