import { useState } from 'react'
import './App.css'
import LandingPage from './components/LandingPagePavyn'
import Navbar from './components/Nav';
import DashBoard from './components/Dashboard'



function App() {

  const [login, setLogin] = useState(0);
  return (
    <>
      <Navbar login={login} setLogin={setLogin} />
      { login ?  
        <>
          <div style={{ minHeight: "100vh", background: "var(--navy)" }}>
            <DashBoard></DashBoard>
          </div> 
        </> 
        :
        <LandingPage setLogin={setLogin}/>   
      }
    </>
  )
}

export default App
