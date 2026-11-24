import express from 'express';
import cors from 'cors';
import materiRoutes from './materi.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Konfigurasi CORS hanya mengizinkan origin dari front-end
app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());

// Endpoint uji sehat peladen
app.get('/api/sehat', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// 1. Mendaftarkan rute materi ke prefix /api/materi
app.use('/api/materi', materiRoutes);

// 2. Penangan rute tidak dikenal (404) - Harus diletakkan di bawah seluruh rute
app.use((req, res) => {
  res.status(404).json({ error: "Rute tidak ditemukan" });
});

// 3. Penangan error umum server (500) - Harus memiliki 4 parameter (err, req, res, next)
app.use((err, req, res, next) => {
  console.error("Detail Error Asli (di Terminal):", err.message); // Dicetak di terminal saja
  res.status(500).json({ error: "Terjadi kesalahan pada server" }); // Pesan umum ke klien
});

app.listen(PORT, () => {
  console.log(`Server backend berjalan di port ${PORT}`);
});