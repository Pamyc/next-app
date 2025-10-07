'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://your-fastify-app.twc1.net/example/data')
      .then(res => res.json())
      .then(setData)
      .catch(err => setError(err.message));
  }, []);

  return (
    <main style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>Next.js + Fastify</h1>
      {error && <p style={{ color: 'red' }}>Ошибка: {error}</p>}
      {data ? (
        <div>
          <p>{data.message}</p>
          <p>ID: {data.data.id}</p>
          <p>Name: {data.data.name}</p>
        </div>
      ) : (
        <p>Загрузка данных...</p>
      )}
    </main>
  );
}
