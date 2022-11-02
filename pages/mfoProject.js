import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './header'
import Image from 'next/image'


export default function Home() {
return (
    <div className={styles.container}>
    <Head>
        <title>Projet site web Myflexoffice</title>
        <meta name="description" content="Le projet Myflexoffice est un projet sur lequel j'ai pu contribuer au sein de Limpide" />
        <meta property="og:image" content="../src/img"/>
        <link rel="icon" href="/favicon.ico" />    
    </Head> 
    <Header/>
    
    <main className={styles.main1}>
        <h1 className={styles.title}>Projet Myflexoffice</h1>
        <h2 className={styles.subtitle}>Le début du projet</h2>
    </main>

    <footer className={styles.footer}>
        <p>made with ❤️ by Robin Pautigny</p>
    </footer>
    </div>
)
}
