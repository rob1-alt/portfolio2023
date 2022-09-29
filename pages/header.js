import styles from '../styles/Home.module.css'
import Image from 'next/image'


export default function header(){
    return(
        <div className={styles.navbar}>
            <div className={styles.name}>
            <Image
                src="/../src/img/logo.png"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              layout='fill'
            
            />
                <p >Robin Pautigny</p>
            </div>                
            <ul className={styles.menuNav}>
                    <li>About</li>
                    <li>Work</li>
                    <li>Contact</li>
            </ul>
        </div>
    )
}