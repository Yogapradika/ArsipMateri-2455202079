import express from 'express';
import { semua } from './materi.repository.js';

const router = express.Router();

// Menangani permintaan GET /api/materi
router.get('/', async (req, res, next) => {
  try {
    const data = await semua();
    res.status(200).json(data); // Mengirim status 200 dan data dalam format JSON
  } catch (error) {
    next(error); // Melempar error ke middleware penanganan error di server.js
  }
});

export default router;