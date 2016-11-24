import '../../imports/chai';
import _ from 'underscore';
import gameFactory from '../../modelFactories/gameFactory';

import Game from '../../../api/models/game';

describe('Game Model', () => {
  describe('Validation', () => {
    it ('should be invalid if date is missing', () => {
      const game = _.extend(new Game(), gameFactory.build({date: null}));
      const error = game.validateSync();
      error.errors.date.should.exist;
    });

    it ('should be invalid if place is missing', () => {
      const game = _.extend(new Game(), gameFactory.build({place: null}));
      const error = game.validateSync();
      error.errors.place.should.exist;
    });
  });
});