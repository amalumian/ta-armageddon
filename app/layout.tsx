import type { Metadata } from 'next'
import Image from 'next/image'

import { passionOne } from '@/app/ui/fonts'
import '@/app/globals.css'
import styles from '@/app/layout.module.css'
import Link from 'next/link'
import { CartProvider } from './lib/context/cart-context'

export const metadata: Metadata = {
  title: 'ARMAGEDDON',
  description: 'ООО "Команда им. Б. Уиллиса". Взрываем астероиды с 1998 года.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <CartProvider>
      <html lang='ru'>
        <body>
          <header className={styles.header}>
            <h1 className={`${passionOne.className} ${styles.id}`} lang='en'>
              <Link href='/'>ARMAGEDDON</Link>
            </h1>
            <p>ООО “Команда им. Б. Уиллиса”.</p>
            <p>Взрываем астероиды с 1998 года.</p>
          </header>
          <main className={styles.main}>
            {children}
            <div className={styles['logo-container']}>
              <Image
                className={styles.logo}
                src='/earth.webp'
                alt='Earth locating on the left path of content'
                width={1450}
                height={1450}
                priority
              />
            </div>
          </main>
          <footer className={styles.footer}>© Все права и планета защищены</footer>
        </body>
      </html>
    </CartProvider>
  )
}
