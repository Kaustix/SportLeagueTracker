import sinon from '../../imports/sinon';
import gameFactory from '../../modelFactories/gameFactory';

import {Game} from '../../../api/models';
import {all, s} from '../../../api/routes/gameRoutes';

describe('Game Routes', () => {
  describe('GET ALL games', () => {

    let GameMock;
    beforeEach(() => {
      GameMock = sinon.mock(Game);
    });

    afterEach(() => {
      GameMock.restore();
    });

    it ('should get all games', () => {
      const games = [gameFactory.build(), gameFactory.build()];
      GameMock.expects('find').resolves(games);

      const req = { params: {} };
      const res = { json: sinon.stub()};

      all(req, res).then(() => {
        res.json.should.have.been.calledOnce;
      });
    });

    it ('should get error message on error', () => {
        const res = sinon.stub();
        s(res);
        res.should.have.been.calledOnce;
    });

  });
});


