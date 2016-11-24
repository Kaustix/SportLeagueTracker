import { Factory } from 'rosie';
import Chance from 'chance';
const chance = new Chance();

export default new Factory()
  .attrs({
    date: chance.date(),
    place: chance.address(),
    opponent: chance.name(),
    home_away: Math.floor(Math.random() * 2) + 1 === 1 ? "H" : "A",
});