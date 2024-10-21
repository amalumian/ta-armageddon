import Link from 'next/link'

import { useCart } from '../lib/context/cart-context'
import styles from './cart.module.css'

export default function Cart() {
  const { cart } = useCart()

  return (
    <div className={styles.cart}>
      <div>Корзина</div>
      <div>{cart.length} астероида</div>
      <Link href='/cart'>Отправить</Link>
    </div>
  )
}
