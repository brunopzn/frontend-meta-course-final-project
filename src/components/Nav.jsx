import styles from './Nav.module.css'
import hamburger from '../assets/hamburgerIcon.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
                        <Link to='/' className={styles.link}>
                            HOME
                        </Link> 
                    </li>
                    <li>
                        <Link to='/about' className={styles.link}>
                            ABOUT
                        </Link> 
                    </li>
                    <li>
                        <Link to='/menu' className={styles.link}>
                            MENU
                        </Link>
                    </li>
                    <li>
                        <Link to='/Booking' className={styles.link}>
                            RESERVATIONS
                        </Link>
                    </li>
                    <li>
                        <Link to='/orderonline' className={styles.link}>
                            ORDER ONLINE
                        </Link>
                    </li>
                    <li>
                        <Link to='/login' className={styles.link}>
                            LOGIN
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;