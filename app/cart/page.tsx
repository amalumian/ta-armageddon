'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { useCart } from '../lib/context/cart-context'
import styles from './page.module.css'

export default function Page() {
  const { cart, clearCart } = useCart()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [copyCart, setCopyCart] = useState(cart)

  useEffect(() => {
    clearCart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <h2>Заказ отправлен!</h2>
      {copyCart.map((asteroid) => (
        <div key={asteroid.id} className={styles['asteroid__item']}>
          <h3 className={styles.asteroid__heading}>{asteroid.date}</h3>
          <div className={styles.asteroid__description}>
            <div className={styles.asteroid__distance}>
              <div className={styles.distance__value}>{asteroid.distance}</div>
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
              width={parseInt(asteroid.diameter, 10) > 100 ? 37 : 22}
              height={parseInt(asteroid.diameter, 10) > 100 ? 40 : 24}
              alt='Asteroid'
            />
            <div className={styles.asteroid__details}>
              <Link className={styles.details__name} href={`/${asteroid.id}`}>
                {asteroid.name}
              </Link>
              <div className={styles.details__diameter}>Ø {asteroid.diameter}</div>
            </div>
          </div>
          {asteroid.isHazardous && <div className={styles.order__hazardous}>⚠️ Опасен</div>}
        </div>
      ))}
    </>
  )
}
