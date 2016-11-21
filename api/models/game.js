import mongoose from 'mongoose';

const GameSchema = new mongoose.Schema({
  date: {type: Date, default: Date.now, required: true},
  place: {type: String, required: true},
  address: {type: String},
  opponent: {type: String},
  home_away: {type: String},
  score: {
    team: {type: Number},
    opponent: {type: Number}
  }
});

export default mongoose.model("Game", GameSchema);