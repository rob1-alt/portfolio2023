import styles from '../styles/Home.module.css'


export default function header(){
    return(
        <div className={styles.navbar}>
            <p>Robin Pautigny</p>
                <ul className={styles.menuNav}>
                    <li>About</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            
        </div>
    )
}