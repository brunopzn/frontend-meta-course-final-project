
import './App.css'
import { useReducer, useEffect, useState, use } from 'react';
import { Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import Confirmation from './components/pages/Confirmation';
import Home from './components/pages/Home'
import AboutPage from './components/pages/AboutPage'
import OnlineMenu from './components/pages/OnlineMenu';
import Login from './components/pages/Login';
import Booking from './components/pages/Booking';



export const initializeTimes = () => ({
  availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  reservations: [] 
});

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'updateTime':
      return initializeTimes();
    case 'removeTime':
      return {
        ...state,
        availableTimes: state.availableTimes.filter(t => t !== action.payload),
        reservations: [...state.reservations, action.reservation] 
      };
    case 'addReservation':
      return {
        ...state,
        reservations: [...(state.reservations || []), action.payload]
      };
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(updateTimes, [], initializeTimes);
  return (
    <>
      <Routes>
        <Route path='/Booking' element={<Booking
          availableTimes={state.availableTimes || []} 
          reservations={state.reservations || []}
          dispatch={dispatch} 
          />} />
        <Route path='/login' element={<Login />} />
        <Route path='/menu' element={<OnlineMenu />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/Confirmation' element={<Confirmation />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h1>Page not Found!</h1>
            <Link to='/'>Return</Link>
          </div>
        } />
      </Routes>
    </>
  )
}

export default App
