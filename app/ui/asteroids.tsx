'use client';

import { AsteroidsType } from '@/app/lib/definitions';

import { useState } from 'react';
import DistanceFilter from './distance-filter';
import Cart from './cart';
import AsteroidList from './asteroid-list';

type AsteroidsProps = { asteroids: AsteroidsType };

export default function Asteroids({ asteroids }: AsteroidsProps) {
  const [distanceUnit, setDistanceUnit] = useState<'km' | 'lunar'>('km');

  const handleDistanceFilter = (unit: 'km' | 'lunar') => {
    setDistanceUnit(unit);
  };

  return (
    <>
      <div>
        {<DistanceFilter onDistanceFilter={handleDistanceFilter} />}
        {<AsteroidList distanceUnit={distanceUnit} asteroids={asteroids} />}
      </div>
      <Cart />
    </>
  );
}
