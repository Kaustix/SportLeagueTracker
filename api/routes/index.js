import express from 'express';
import * as GameRoutes from './game';

const router = express.Router();

// Index
router.get('/', (req, res) => {
res.send('Hello World!');
});

router.route('/games').get(GameRoutes.all).post(GameRoutes.create);
router.route('/games/:id').get(GameRoutes.get).put(GameRoutes.update).delete(GameRoutes.remove);

export default router;

