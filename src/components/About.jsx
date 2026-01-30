import style from './About.module.css'
import restaurantChefB from '../assets/restaurantchefB.jpg'
import restaurant from '../assets/restaurant.jpg'
function About() {
    return (
        <section className={style.about}>
            <div className={style.aboutContainer}>
                <div className={style.titleAndDescriptonBox}>
                    <h1 style={{fontFamily: 'var(--font-family)', fontSize: '3rem'}}>About</h1><br/>
                    <h1 className={style.title}>
                        Little Lemon
                    </h1>
                    <h2 className={style.subTitle}>
                        Chicago
                    </h2>
                    <p className={style.description}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum temporibus pariatur aliquam mollitia hic ullam officia reprehenderit magni, eius necessitatibus recusandae. Ut, aliquam sapiente? Aliquid quo molestias fugiat reiciendis suscipit?
                    </p>
                </div>
                <div className={style.imgBox}>
                        <div className={style.firstImgBox}>
                            <img className={style.firstImg} src={restaurant} alt="restaurant image" />
                        </div>
                        <div className={style.secondImgBox}>
                            <img className={style.secondImg} src={restaurantChefB} alt="restaurant Chef image" />
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default About;