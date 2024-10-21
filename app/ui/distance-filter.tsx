import clsx from 'clsx'

import styles from './distance-filter.module.css'

type FilterProps = {
  onDistanceFilter: (unit: 'km' | 'lunar') => void
  distanceUnit: 'km' | 'lunar'
}

export default function DistanceFilter({ onDistanceFilter, distanceUnit }: FilterProps) {
  return (
    <div className={styles.filter}>
      <button
        className={clsx(styles.filter__button, {
          [styles.filter__button_active]: distanceUnit === 'km',
        })}
        type='button'
        onClick={() => onDistanceFilter('km')}
      >
        в километрах
      </button>
      <div className={styles.filter__separator}></div>
      <button
        className={clsx(styles.filter__button, {
          [styles.filter__button_active]: distanceUnit === 'lunar',
        })}
        type='button'
        onClick={() => onDistanceFilter('lunar')}
      >
        в лунных орбитах
      </button>
    </div>
  )
}
