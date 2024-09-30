import { fetchAsteroid } from '../lib/data';
import { AsteroidType } from '../lib/definitions';
import { formatDate } from '../lib/utils';

export default async function Page({ params }: { params: { id: string } }) {
  const asteroid: AsteroidType = await fetchAsteroid(params.id);
  const earthApproachData = asteroid.close_approach_data.filter(
    (approach) => approach.orbiting_body === 'Earth',
  );

  return (
    <>
      <h2>{asteroid.name}</h2>
      <h3>Сближения</h3>
      <div>Орбита: Земля</div>
      <div>
        {earthApproachData.map((approach) => {
          const approachDate = formatDate(approach.close_approach_date);

          return (
            <div key={approach.close_approach_date}>
              <div>
                Скорость: {approach.relative_velocity.kilometers_per_second}{' '}
                км/с
              </div>
              <div>Время максимального сближения: {approachDate}</div>
              <div>
                Расстояние:
                <ul>
                  <li>В километрах: {approach.miss_distance.kilometers}</li>
                  <li>В лунных орбитах: {approach.miss_distance.lunar}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
