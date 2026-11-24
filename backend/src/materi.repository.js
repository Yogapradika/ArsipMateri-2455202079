import pool from './db.js';

export async function semua() {
  // Mengambil data dari tabel materi diurutkan berdasarkan id ASC
  // Mengubah nama kolom mata_kuliah menjadi mataKuliah sesuai kontrak API
  const [rows] = await pool.query(
    'SELECT id, judul, mata_kuliah AS mataKuliah, pertemuan, tautan, dibuat FROM materi ORDER BY id ASC'
  );
  return rows;
}