import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { useCart } from '../lib/context/cart-context'
import styles from './asteroid-item.module.css'

type AsteroidItemProps = {
  date: string
  distance: string
  id: string
  diameter: string
  isHazardous: boolean
  name: string
}

export default function AsteroidItem({
  date,
  distance,
  id,
  diameter,
  isHazardous,
  name,
}: AsteroidItemProps) {
  const { cart, handleCart } = useCart()
  const isInCart = cart.some((cartAsteroid) => cartAsteroid.id === id)

  return (
    <div className={styles['asteroid__item']}>
      <h3 className={styles.asteroid__heading}>{date}</h3>
      <div className={styles.asteroid__description}>
        <div className={styles.asteroid__distance}>
          <div className={styles.distance__value}>{distance}</div>
          <Image
            className={styles.distance__arrow}
            src='/arrow.webp'
            width='105'
            height='6'
            alt='Asteroid'
          />
        </div>
        <Image
          className={styles.asteroid__picture}
          src='/asteroid.webp'
          width={parseInt(diameter, 10) > 100 ? 37 : 22}
          height={parseInt(diameter, 10) > 100 ? 40 : 24}
          alt='Asteroid'
        />
        <div className={styles.asteroid__details}>
          <Link className={styles.details__name} href={`/${id}`}>
            {name}
          </Link>
          <div className={styles.details__diameter}>Ø {diameter}</div>
        </div>
      </div>
      <div className={styles.asteroid__order}>
        <button
          className={clsx(styles.order__button, {
            [styles.order__button_active]: isInCart
          })}
          onClick={() =>
            handleCart({
              date,
              distance,
              id,
              diameter,
              isHazardous,
              name,
            })
          }
        >
          {isInCart ? 'В корзине' : 'Заказать'}
        </button>
        {isHazardous && <div className={styles.order__hazardous}>⚠️ Опасен</div>}
      </div>
    </div>
  )
}
