import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>EHIS GODSWILL</title>
        <meta name="description" content="portfolio for Ehis Godswill, Software Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        LANDING PAGE
      </main>

    </div>
  )
}
