import style from './Card.module.css'

function Card({imgUrl, title ,price, btn , bottomImg, description,children}) {
    return (
        <div className={style.cardContainer}>
            <img className={style.img} src={imgUrl} alt="Food Image" /> 
            <div className={style.cardTitleAndPrice}>
                <h3 className={style.cardTitle}>{title}</h3><h3 className={style.price}>{price}</h3>
            </div>
            <p className={style.description}>{description}</p>
            <div className={style.orderAndBike}>
                <h3>{btn}</h3>
                <img className={style.iconImg} src={bottomImg} alt="bike image" />
            </div>      
        </div>
    )
}

export default Card;