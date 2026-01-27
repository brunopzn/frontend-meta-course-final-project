import styles from './Nav.module.css'
import hamburger from '../assets/hamburgerIcon.svg'
import { useState } from 'react';

function Nav() {
    const [menuAberto, setMenuAberto] = useState(false)

    const toggleMenu = () => {
        setMenuAberto(!menuAberto)
    }

    return (
        <nav className={styles.navbar}>
            <button onClick={toggleMenu} className={styles.hamburguerBtn}><img src={hamburger} className={styles.hamburguerImg} alt="Hamburger menu icon"  /></button>
            <div className={menuAberto ? styles.navbarMobile : styles.navbarMobileHide}>
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
            </div>
        </nav>
    )
}

export default Nav;