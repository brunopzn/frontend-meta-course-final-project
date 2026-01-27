import styles from './Nav.module.css'

function Nav() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <a href="#" className={styles.link}>
                        HOME
                    </a>
                </li>
                <li>
                    <a href="#" className={styles.link}>
                        ABOUT
                    </a>
                </li>
                <li>
                    <a href="#" className={styles.link}>
                        MENU
                    </a>
                </li>
                <li>
                    <a href="#" className={styles.link}>
                        RESERVATIONS
                    </a>
                </li>
                <li>
                    <a href="#" className={styles.link}>
                        ORDER ONLINE
                    </a>
                </li>
                <li>
                    <a href="#" className={styles.link}>
                        LOGIN
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;