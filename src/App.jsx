
import './App.css'
import { Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import Booking from './components/pages/Booking';
import Confirmation from './components/pages/Confirmation';
import Home from './components/pages/Home'
import AboutPage from './components/pages/AboutPage'
import OnlineMenu from './components/pages/OnlineMenu';
import Login from './components/pages/Login';


function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/menu' element={<OnlineMenu/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/Confirmation' element={<Confirmation/>}/>
        <Route path='/Booking' element={<Booking/>}/>
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
