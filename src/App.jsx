
import './App.css'
import Home from './components/pages/Home'

import { Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import Reserve from './components/pages/Reserve';

function App() {

  return (
    <>
      <Routes>
        <Route path='/reserve' element={<Reserve/>}/>
        <Route path='/' element={<Home />} />
        <Route path='*' element={
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h1>Página não encontrada!</h1>
            <Link to='/'>Voltar</Link>
          </div>
        } />
      </Routes>
    </>
  )
}

export default App
