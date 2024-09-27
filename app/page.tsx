import Image from 'next/image';

import styles from '@/app/page.module.css';
import { passionOne } from '@/app/ui/fonts';

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={`${passionOne.className} ${styles.id}`} lang="en">
          ARMAGEDDON
        </h1>
        <p>ООО “Команда им. Б. Уиллиса”.</p>
        <p>Взрываем астероиды с 1998 года.</p>
      </header>
      <main className={styles.main}>
        MAIN BLOCK
        <Image
          className={styles.logo}
          src="/earth.webp"
          alt="Earth"
          width={1000}
          height={1000}
          priority
        />
      </main>
      <footer className={styles.footer}>© Все права и планета защищены</footer>
    </div>
  );
}
