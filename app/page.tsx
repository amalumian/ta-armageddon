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
        <h2>Ближайшие подлёты астероидов</h2>
        <div>Block for filter</div>
        <div>Block for list</div>
        <div>Block for cart</div>
        <div className={styles['logo-container']}>
          <Image
            className={styles.logo}
            src="/earth.webp"
            alt="Earth locating on the left path of content"
            width={1450}
            height={1450}
          />
        </div>
      </main>
      <footer className={styles.footer}>© Все права и планета защищены</footer>
    </div>
  );
}
