import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './header'
import Image from 'next/image'


export default function Home() {
return (
    <div className={styles.container}>
    <Head>
        <title>Projet site web Corse Matin</title>
        <meta name="description" content="Le projet Corse Matin est un projet d'école sur la refonte du site web" />
        <meta property="og:image" content="../src/img"/>

        <link rel="icon" href="/favicon.ico" />
        
    </Head>
    <Header/>

    <main className={styles.main}>
    </main>

    <footer className={styles.footer}>
        <p>made with ❤️ by Robin Pautigny</p>
    </footer>
    </div>
)
}
