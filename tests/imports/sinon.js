import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import 'sinon-as-promised';
import 'sinon-mongoose';

chai.should();
chai.use(sinonChai);

export default sinon;