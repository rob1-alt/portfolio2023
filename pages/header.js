import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Logo from '../src/img/logo.png'
import Link from 'next/link'


export default function header(){
    return(
        <div className={styles.navbar}>
            <div className={styles.name}>
                <p>Robin Pautigny</p>
            </div>   
            <div>
                <ul className={(styles.menuItems)}>
                    <Link href="/">
                        <li>
                            <a href='#'>Work</a>
                        </li>
                    </Link>
                    <Link href="/">
                        <li>
                            <a href='#'>About</a>
                        </li>
                    </Link>
                    <Link className={styles.contact}href="/">
                        <li>
                            <a href='#'>Contact</a>
                        </li>
                    </Link>

                </ul>
            </div>
        
                    
        </div>
    )
}