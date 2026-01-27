import Card from './Card';
import style from './Hightlights.module.css'
import greekSalad from '../assets/greeksalad.jpg'
import bikeIcon from '../assets/bikeIcon.svg'
import bruchetta from '../assets/bruchetta.svg'
import lemon from '../assets/lemondessert.jpg'

function Hightlights() {
    return (
        <section className={style.hightlights}>
            <div className={style.container}>
                <div className={style.TitleAndBtn}>
                    <h1>This Week Specials!</h1>
                    <button className={style.btnHigh}>Online Menu</button>
                </div>
                <div className={style.cardsContainer}>
                    <Card  title="Greek salad" price='$12.99' imgUrl={greekSalad}
                        description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
                        bottomImg={bikeIcon} btn='Order a delivery' />

                        <Card title="Bruchetta" price='$5.99' imgUrl={bruchetta}
                        description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
                        bottomImg={bikeIcon} btn='Order a delivery' />

                        <Card title="Lemon Dessert" price='$5.00' imgUrl={lemon}
                        description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. "
                        bottomImg={bikeIcon} btn='Order a delivery' />
                </div>
            </div>
        </section>
    )
}

export default Hightlights;