import logo from "../assets/logo.svg"
import styles from './Header.module.css'
import Nav from "../components/Nav"


function Header(){
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <img src={logo} alt="website Logo" className={styles.logo}>
                </img>
                <Nav/>
            </div>
        </header>
    )
}

export default Header;