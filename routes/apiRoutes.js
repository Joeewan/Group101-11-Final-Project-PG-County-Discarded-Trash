/* eslint-disable no-console */
import express from 'express';
import fetch from 'node-fetch';

import littertrak from './littertrak.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to PG County Dataset!');
});

// Generic API inclusion demonstration
// Replace this with the group member's actual route
// This leads to /api/member1
router.use('/littertrak', littertrak);

export default router;
