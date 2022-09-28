import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Robin Pautigny</title>
        <meta name="description" content="Creative boy, who aims to undertake and bring a solution for tomorrow " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header/>
        <h1 className={styles.h1}>
        Creative boy, who aims to undertake and bring a solution for tomorrow 
        </h1>

        

        <div className={styles.grid}>
          
          <a
            href=""
            className={styles.card}
          >
            <h2>Example 1 project</h2>
            <p>Discover</p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h2>Example 2 project</h2>
            <p>Discover</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
