import mongoose from 'mongoose';

const GameSchema = new mongoose.Schema({
  time: {type: Date, default: Date.now, required: true},
  place: {type: string, required: true},
  address: {type: string},
  opponent: {type: string},
  home_away: {type: string},
  score: {
    team: {type: number},
    opponent: {type: number}
  }
});

export default Game = mongoose.model("Game", GameSchema);