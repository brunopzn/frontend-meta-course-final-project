import { useLocation, Link } from "react-router-dom";
import style from './Confirmation.module.css'
import Header from "../Header";
import Footer from "../Footer";

function Confirmation() {
    const location = useLocation();
    const {date, time, occasion, guests} = location.state || {}
    return (
        <>
        <Header/>
        <div className={style.confirmation}>
            <div className={style.container}>
                <h1>Reservation Confirmed!</h1>
                <p>Date: {date}</p>
                <p>Hour: {time}</p>
                <p>Occasion: {occasion}</p>
                <p>Guests: {guests}</p>
            </div>
            <Link to={'/'}>Return to Home</Link>
            <Link to={'/Booking'}>Return to Form</Link>
       </div>
       <Footer/>
        </>
    )
}

export default Confirmation;