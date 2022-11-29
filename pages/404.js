import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './header'
// import Image from 'next/image'
import Link from 'next/link'


export default function ForOhFour(){
    return(
        <div className={styles.error}>
        <Head>
            <title>Oops wrong way...</title>
            <meta name="description" content="Creative boy, who aims to undertake and bring a solution for tomorrow " />
            <meta property="og:image" content="../src/img"/>

            <link rel="icon" href="../src/img/logofade.png" />
        
        </Head>
        <Header/>
        </div>

    )
}