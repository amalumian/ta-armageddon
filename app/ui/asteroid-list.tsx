import {
  formatDate,
  formatDiameterInM,
  formatDistanceInKm,
  formatDistanceInLunar,
} from '@/app/lib/utils'
import AsteroidItem from '@/app/ui/asteroid-item'
import { AsteroidsType } from '@/app/lib/definitions'
import styles from '@/app/ui/asteroid-list.module.css'

type AsteroidListProps = {
  asteroids: AsteroidsType
  distanceUnit: 'km' | 'lunar'
}

export default function AsteroidList({ distanceUnit, asteroids }: AsteroidListProps) {
  return (
    <div className={styles['asteroid__list']}>
      {asteroids.map((obj) =>
        obj.data.map((asteroid) => {
          const date = formatDate(obj.date)

          const distance = {
            km: formatDistanceInKm(asteroid.close_approach_data[0].miss_distance.kilometers),
            lunar: formatDistanceInLunar(asteroid.close_approach_data[0].miss_distance.lunar),
          }

          const name = asteroid.name.match(/\(([^)]+)\)/)![1]

          const diameterMin: number = asteroid.estimated_diameter.meters.estimated_diameter_min
          const diameterMax: number = asteroid.estimated_diameter.meters.estimated_diameter_max
          const diameterAverage = formatDiameterInM((diameterMax + diameterMin) / 2)

          const isHazardous = asteroid.is_potentially_hazardous_asteroid

          return (
            <AsteroidItem
              key={asteroid.id}
              date={date}
              distance={distance[distanceUnit]}
              id={asteroid.id}
              diameter={diameterAverage}
              isHazardous={isHazardous}
              name={name}
            />
          )
        }),
      )}
    </div>
  )
}
