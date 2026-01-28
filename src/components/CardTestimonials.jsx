import style from './CardTestimonials.module.css'

function CardTestimonials ({rating, name, review, imgUrl}) {
    return (
        <div className={style.cardTestimonials}>
            <h3 className={style.rating}>{rating}</h3>
            <div className={style.imgAndName}>
                <img className={style.img} src={imgUrl} alt="Rating Image" />
                <h3 className={style.name}>{name}</h3>
            </div>
            <div className={style.reviewDiv}>
                <h3 className={style.review}>{review}</h3>
            </div>
        </div>
    )
}

export default CardTestimonials;