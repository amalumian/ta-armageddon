import { fetchAsteroid } from '@/app/lib/data'
import { AsteroidType } from '@/app/lib/definitions'
import { formatDate } from '@/app/lib/utils'
import styles from '@/app/[id]/page.module.css'

export default async function Page({ params }: { params: { id: string } }) {
  const asteroid: AsteroidType = await fetchAsteroid(params.id)
  const earthApproachData = asteroid.close_approach_data.filter(
    (approach) => approach.orbiting_body === 'Earth',
  )

  return (
    <>
      <h2>{asteroid.name}</h2>
      <h3>Сближения (орбита: Земля)</h3>
      <div className={styles.approaches}>
        {earthApproachData.map((approach) => {
          const approachDate = formatDate(approach.close_approach_date)

          return (
            <ul className={styles.approaches__list} key={approach.close_approach_date}>
              <li className={styles.approaches__item}>
                <b>Скорость:</b> {approach.relative_velocity.kilometers_per_second} км/с
              </li>
              <li className={styles.approaches__item}>
                <b>Время максимального сближения:</b> {approachDate}
              </li>
              <li className={styles.approaches__item}>
                <b>Расстояние:</b>
                <ul className={styles['approaches__distance-list']}>
                  <li className={styles['approaches__distance-item']}>
                    <b>В километрах:</b> {approach.miss_distance.kilometers}
                  </li>
                  <li className={styles['approaches__distance-item']}>
                    <b>В лунных орбитах:</b> {approach.miss_distance.lunar}
                  </li>
                </ul>
              </li>
            </ul>
          )
        })}
      </div>
    </>
  )
}
