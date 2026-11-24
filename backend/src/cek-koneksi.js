import pool from './db.js';

async function ujiKoneksi() {
  try {
    const [rows] = await pool.query('SELECT VERSION() AS versi, DATABASE() AS db');
    console.log('Koneksi Berhasil!');
    console.log('Versi MySQL:', rows[0].versi);
    console.log('Nama Database:', rows[0].db);
    
    // Menampilkan nama pengguna (opsional/tambahan informasi)
    const [userRows] = await pool.query('SELECT CURRENT_USER() AS pengguna');
    console.log('Nama Pengguna:', userRows[0].pengguna);
  } catch (error) {
    console.error('Koneksi Gagal:', error.message);
  } finally {
    process.exit();
  }
}

ujiKoneksi();