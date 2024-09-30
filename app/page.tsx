import styles from '@/app/page.module.css';

import Asteroids from './ui/asteroids';
import { Suspense } from 'react';
import { fetchAsteroids } from './lib/data';

export default async function Page() {
  const { asteroids, asteroidCount } = await fetchAsteroids();

  return (
    <>
      <h2>Ближайшие подлёты астероидов</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Asteroids asteroids={asteroids} asteroidCount={asteroidCount} />
      </Suspense>
    </>
  );
}
