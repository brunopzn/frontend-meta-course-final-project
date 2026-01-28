import logo from "../assets/logo.svg"
import styles from './Header.module.css'
import Nav from "../components/Nav"
import { Link } from 'react-router-dom';


function Header(){
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to="/"><img src={logo} alt="website Logo" className={styles.logo}></img></Link>
                <Nav/>
            </div>
        </header>
    )
}

export default Header;