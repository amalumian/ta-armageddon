import Link from 'next/link';
import styles from './cart.module.css';
import { useCart } from '../lib/context/cart-context';

export default function Cart() {
  const { cart } = useCart();

  return (
    <div className={styles.cart}>
      <div>Корзина</div>
      <div>{cart.length} астероида</div>
      <Link href="/cart">Отправить</Link>
    </div>
  );
}
