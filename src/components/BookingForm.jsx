import style from './BookingForm.module.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function BookingForm() {
    const today = new Date().toISOString().split('T')[0];
    const [date, setDate] = useState(today);
    const [time, setTime] = useState('00:00');
    const [guests, setGuests] = useState('0');
    const [occasion, setoccasion] = useState('Birthday');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        if (time === '00:00' || time === '') {
            alert('You need to select a time.')
            return
        } else {
            navigate('/Confirmation', {state: { 
            date: date, 
            time: time, 
            occasion: occasion, 
            guests: guests 
        }} )
            return
        }

    }

    return (
        <>
            <div className={style.formBox}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />

                    <label htmlFor="res-time" >Choose time</label>
                    <select id="res-time" required value={time} onChange={(e) => setTime(e.target.value)} style={{ borderColor: time == '00:00' ? 'red' : 'initial' }}>
                        <option value="Invalid">{time}</option>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                        <option value="19:00">19:00</option>
                        <option value="20:00">20:00</option>
                        <option value="21:00">21:00</option>
                        <option value="22:00">22:00</option>
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
            </div>
        </>

    )
}

export default BookingForm;