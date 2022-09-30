import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Logo from '../src/img/logo.png'


export default function header(){
    return(
        <div className={styles.navbar}>
            <Image className={styles.logoNav} src={Logo} alt="/"/>   
            <div className={styles.name}>
                <p>Robin Pautigny</p>
            </div>   
                    
            <ul className={styles.menuNav}>
                    <li>About</li>
                    <li>Work</li>
                    <li>Contact</li>
            </ul>
        </div>
    )
}