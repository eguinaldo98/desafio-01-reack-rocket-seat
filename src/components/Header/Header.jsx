import styles from './Header.module.css'
import Rocket from '../../assets/rocket.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <strong>
                <img src={Rocket} className={styles.rocket} alt="Rocket" />
                <span>to</span>
                <span>do</span>
            </strong>
        </header>
    )
}