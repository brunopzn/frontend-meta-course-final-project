import style from './Hero.module.css'
import heroImg from "../assets/restauranfood.jpg"
import { Link } from 'react-router-dom';
function Hero() {
    return (
        <section className={style.hero}>
            <div className={style.container}>
                <div className={style.textArea}>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Link to='/reserve'><button className={style.btnHero}>Reserve a Table</button></Link>
                </div>
                <div className={style.divImg}>
                    <img src={heroImg} className={style.heroImg} alt="Food Image"/>
                </div>
            </div>
        </section>
    )
}

export default Hero;