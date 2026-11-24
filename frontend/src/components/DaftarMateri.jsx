import React from 'react';

export default function DaftarMateri({ materi }) {
  return (
    <div>
      {materi.map((item) => (
        <div key={item.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
          <h3>{item.judul}</h3>
          <p>Mata Kuliah: {item.mataKuliah}</p>
          <p>Pertemuan {item.pertemuan}</p>
          {item.tautan && (
            <p>
              <a href={item.tautan} target="_blank" rel="noopener noreferrer">
                Buka
              </a>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}