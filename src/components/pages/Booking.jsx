import style from './Booking.module.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';


function Booking({ availableTimes, reservations, dispatch }) {
    const today = new Date().toISOString().split('T')[0];
    const [date, setDate] = useState(today);
    const [time, setTime] = useState('00:00');
    const [guests, setGuests] = useState('0');
    const [occasion, setoccasion] = useState('Birthday');
    const navigate = useNavigate();

    const handleChangeDate = (e) => {
        const newDate = e.target.value
        setDate(newDate)
        dispatch({ type: updateTime, payload: newDate })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (time === '00:00' || time === '') {
            alert('You need to select a time.')
            return
        } else {

            const reservationDate = {
                date: date,
                time: time,
                occasion: occasion,
                guests: guests
            }

            dispatch({
                type: 'removeTime',
                payload: time,
                reservation: reservationDate
            });

            navigate('/Confirmation', {
                state: {
                    date: date,
                    time: time,
                    occasion: occasion,
                    guests: guests
                }
            })
            return
        }

    }

    return (
        <>
            <Header />
            <section className={style.booking}>
                <div className={style.formBox}>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="res-date">Choose date</label>
                        <input type="date" id="res-date" value={date} onChange={handleChangeDate} />

                        <label htmlFor="res-time" >Choose time</label>
                        <select id="res-time" required value={time} onChange={(e) => setTime(e.target.value)} style={{ borderColor: time == '00:00' ? 'red' : 'initial' }}>
                            <option value="00:00">Select a time</option>
                            {availableTimes?.map((t) => {
                                return <option key={t} value={t}>{t}</option>
                            })}
                        </select>

                        <label htmlFor="guests">Number of guests</label>
                        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} style={{ borderColor: guests == '0' ? 'red' : 'initial' }} />

                        <label htmlFor="occasion">Occasion</label>
                        <select id="occasion" value={occasion} onChange={(e) => setoccasion(e.target.value)}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>

                        <input className={style.submit} type="submit" value="Make Your reservation" />
                    </form>
                    <h1 className={style.avaliableTimesH1}>Available Times</h1>
                    <div className={style.disponibleHours}>
                        {availableTimes?.map((t) => {
                            return <h2 key={t} value={t}>{t}</h2>
                        })}
                    </div>
                </div>
                <div className={style.reservationsList}>
                    <h3>Registered Reservations:</h3>
                    {reservations?.length === 0 ? <p>No reservations made.</p> : (
                        <ul>
                            {reservations?.map((res, index) => (
                                <li key={index}>
                                    <div className={style.reservationsDiv}><h4>Data: </h4>{res.date}</div> <div className={style.reservationsDiv}><h4>Time: </h4> {res.time}</div> <div className={style.reservationsDiv}><h4>Guests: </h4> {res.guests}</div> <div className={style.reservationsDiv}><h4>Occasion: </h4>  ({res.occasion})</div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </section>
            <Footer />
        </>

    )
}

export default Booking;