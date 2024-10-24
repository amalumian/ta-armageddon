import { useRouter } from 'next/navigation'

import { useCart } from '../lib/context/cart-context'
import styles from './cart.module.css'

const getAsteroidWord = (count: number): string => {
  if (count % 10 === 1 && count % 100 !== 11) {
    return 'астероид'
  } else if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) {
    return 'астероида'
  } else {
    return 'астероидов'
  }
}

export default function Cart() {
  const { cart } = useCart()

  const router = useRouter()

  const handleOrderClick = () => {
    if (cart.length > 0) {
      router.push('/cart')
    } else {
      alert('Корзина пуста, добавьте астероиды прежде чем оформить заказ!')
    }
  }

  return (
    <section className={styles.cart}>
      <div className={styles.cart__info}>
        <h3 className={styles.cart__heading}>Корзина</h3>
        <div className={styles['cart__asteroids-count']}>
          {cart.length} {getAsteroidWord(cart.length)}
        </div>
      </div>
      <button onClick={handleOrderClick} className={styles.cart__order}>
        Отправить
      </button>
    </section>
  )
}
