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
                        <Link to='/' aria-current="page" className={styles.link}>
                            HOME
                        </Link> 
                    </li>
                    <li>
                        <Link to='/about' aria-current="page" className={styles.link}>
                            ABOUT
                        </Link> 
                    </li>
                    <li>
                        <Link to='/menu' aria-current="page" className={styles.link}>
                            MENU
                        </Link>
                    </li>
                    <li>
                        <Link to='/Booking' aria-current="page" className={styles.link}>
                            RESERVATIONS
                        </Link>
                    </li>
                    <li>
                        <Link to='/orderonline'aria-current="page"  className={styles.link}>
                            ORDER ONLINE
                        </Link>
                    </li>
                    <li>
                        <Link to='/login' aria-current="page" className={styles.link}>
                            LOGIN
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;