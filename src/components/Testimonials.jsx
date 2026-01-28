import CardTestimonials from './CardTestimonials';
import style from './Testimonials.module.css'
import profileImg from '../assets/perfil.svg'

function Testimonials() {
    return (
        <section className={style.testimonials}>
            <div className={style.container}>
                <h1 className={style.title}>Testimonials</h1>
                <div className={style.CardsContainer}>
                    <CardTestimonials rating='Rating: 9.5' name='Sophie' review='Amazing experience! The food was exceptional and the staff was very attentive.' imgUrl={profileImg} />
                    <CardTestimonials rating='Rating: 8' name='Liam' review='Everything was honestly delicious and I cannot wait to go back.' imgUrl={profileImg} />
                    <CardTestimonials rating='Rating: 8.5' name='Henry' review='The service was impeccable from beginning to end!' imgUrl={profileImg} />
                    <CardTestimonials rating='Rating: 10' name='Charlotte' review='Five stars! Every bite was better than the last.' imgUrl={profileImg} />
                </div>
            </div>
        </section>
    )
}

export default Testimonials;