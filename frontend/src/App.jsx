import React, { useState, useEffect } from 'react';
import DaftarMateri from './components/DaftarMateri';
import { ambilMateri } from './api/materi';

export default function App() {
  const [materi, setMateri] = useState([]);
  const [status, setStatus] = useState('memuat'); // 'memuat', 'sukses', 'galat'
  const [pesanGalat, setPesanGalat] = useState('');

  const muatDataMateri = async () => {
    setStatus('memuat');
    try {
      const data = await ambilMateri();
      setMateri(data);
      setStatus('sukses');
    } catch (err) {
      setPesanGalat(err.message);
      setStatus('galat');
    }
  };

  useEffect(() => {
    muatDataMateri();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>ArsipMateri</h1>

      {/* 1. Keadaan Memuat */}
      {status === 'memuat' && <p>Memuat…</p>}

      {/* 2. Keadaan Galat / Error */}
      {status === 'galat' && (
        <div style={{ color: 'red', margin: '10px 0' }}>
          <p>Terjadi galat: {pesanGalat}</p>
          <button onClick={muatDataMateri} style={{ padding: '5px 10px', cursor: 'pointer' }}>
            Coba lagi
          </button>
        </div>
      )}

      {/* 3. Keadaan Sukses */}
      {status === 'sukses' && (
        materi.length === 0 ? (
          <p>Belum ada materi</p>
        ) : (
          <DaftarMateri materi={materi} />
        )
      )}
    </div>
  );
}