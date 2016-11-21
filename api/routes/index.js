import express from 'express';
import GameRoutes from './game';

const router = express.Router();

// index
router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.use('/games', GameRoutes);

export default router;

