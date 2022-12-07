import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './header'
import { gsap } from "gsap";

// import Image from 'next/image'
import Link from 'next/link'



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
          Creative boy, who aims to undertake and bring a solution for tomorrow. 
        </h1>
            <p className={styles.job}>Working on <a className={styles.kluster} href='kluster'>Kluster</a>, formerly Project Manager at <a className={styles.limpide}href="https://limpide.fr">Limpide</a> and also student at <a className={styles.hetic} href='https://hetic.net'>HETIC</a></p>
          {/* Cards avec les projets */}
          <div className={styles.snakes}></div>
            <div className={styles.grid}>
                <Link href="/" >
                  <a className={`${styles.card} ${styles.card1}`}><h2>Corse Matin</h2></a>
                </Link>
                <Link href="/" >
                  <a className={`${styles.card} ${styles.card2}`}><h2>Myflexoffice</h2></a>
              </Link>
                <Link href="/" >
                  <a className={`${styles.card} ${styles.card3}`}><h2>Bump</h2></a>
                </Link>
                <Link href="/" >
                  <a className={`${styles.card} ${styles.card4}`}><h2>Dismoi</h2></a>
              </Link>
              <Link href="/" >
                  <a className={`${styles.card} ${styles.card5}`}><h2>Flocs</h2></a>
              </Link>
            </div> 
      </main>

      <footer className={styles.footer}>
        <p> made with ❤️  by Robin Pautigny 🎉 </p>
      </footer>
    </div>
  )
}
