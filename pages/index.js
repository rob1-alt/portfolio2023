import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './header'
import Image from 'next/image'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Robin Pautigny</title>
        <meta name="description" content="Creative boy, who aims to undertake and bring a solution for tomorrow " />
        <meta property="og:image" content="../src/img"/>

        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Header/>

      <main className={styles.main}>
        <h1 className={styles.h1}>
          Creative boy, who aims to undertake and bring a solution for tomorrow 
        </h1>

            <p className={styles.job}>Work for <a className={styles.kluster} href='kluster'>Kluster</a>, Project Manager at <a className={styles.limpide}href="https://limpide.fr">Limpide</a> and also student at <a className={styles.hetic} href='https://hetic.net'>HETIC</a></p>
      <div className={styles.grid}>
          <a
            href=""
            className={`${styles.card} ${styles.card1}`}
          >
            <h2>Corse matin</h2>
          </a>

          <a
            target="_blank" href="https://www.myflexoffice.fr/"  rel="noopener noreferrer"
            className={`${styles.card} ${styles.card2}` }
          >
            <h2>Myflexoffice</h2>
          </a>
        </div> 
      </main>

      <footer className={styles.footer}>
        <p>made with ❤️ by Robin Pautigny</p>
      </footer>
    </div>
  )
}
