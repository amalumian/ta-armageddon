import { formatDateToISO } from './utils';
import { API_FEED, API_LOOKUP } from './api';

export const fetchAsteroids = async () => {
  const response = await fetch(API_FEED);
  const data = await response.json();

  const asteroidsRaw = data.near_earth_objects;
  const asteroidCount = data.element_count;

  const asteroidDates = Object.keys(asteroidsRaw).map((date) => new Date(date));
  const sortedAsteroidDates = asteroidDates
    .slice()
    .sort((a, b) => a.getTime() - b.getTime())
    .map((date) => formatDateToISO(date));

  const asteroids = sortedAsteroidDates.map((asteroidDate) => ({
    date: asteroidDate,
    data: asteroidsRaw[asteroidDate],
  }));

  return { asteroids, asteroidCount };
};

export const fetchAsteroid = async (id: string) => {
  const response = await fetch(API_LOOKUP(id));
  const data = await response.json();

  return data;
};
