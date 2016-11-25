import sinon from '../../imports/sinon';
import gameFactory from '../../modelFactories/gameFactory';

import {Game} from '../../../api/models';
import {all} from '../../../api/routes/gameRoutes';

describe('Game Routes', () => {
  describe('GET ALL games', () => {

    let GameMock;
    let Games;
    beforeEach(() => {
      GameMock = sinon.mock(Game);
      Games = [gameFactory.build(), gameFactory.build()];
    });

    afterEach(() => {
      GameMock.restore();
    });

    it('should get all games', () => {
      GameMock.expects('find').resolves(Games);

      const req = {params: {}};
      const res = {json: sinon.stub()};

      all(req, res).then(() => {
        res.json.should.have.been.calledWith(Games);
      });
    });

    it('should send error when failed', () => {
      const error = new Error('error');
      GameMock.expects('find').rejects(error);

      const req = {params: {}};
      const res = {send: sinon.stub()};

      all(req, res).catch(() => {
        res.send.should.have.been.calledWith(error);
      });
    })

  });
});


