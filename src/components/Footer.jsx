import style from './Footer.module.css'
import logo from '../assets/logo.svg'

function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.imgDiv}>
                    <img className={style.img} src={logo} alt="Imagem footer" />
            </div>
            <div className={style.footerNavigation}>
                <h3>
                    Navigation
                </h3>
                <ul>
                    <li>
                        <a href="#">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Menu
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Reservations
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Order online
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Login
                        </a>
                    </li>
                </ul>

            </div>

            <div className={style.footerContact}>
                <h3>
                    Contact
                </h3>
                <ul>
                    <li>
                        <a href="#">
                            Adress
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Phone Number
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            E-mail
                        </a>
                    </li>
                </ul>

            </div>

            <div className={style.footerSocialMedia}>
                <h3>
                    Social Media
                </h3>
                <ul>
                    <li>
                        <a href="#">
                            Adress
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Phone Number
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            E-mail
                        </a>
                    </li>
                </ul>

            </div>
        </footer>
    )
}

export default Footer;