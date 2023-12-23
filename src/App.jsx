import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './LayOut/ShareComponents/NavBar/NavBar'
import Footer from './LayOut/ShareComponents/Footer/Footer'
// import Home from './Components/Home/Home'

function App() {

  return (
    <>
      <div>
          <NavBar />
            <Outlet/>
          <Footer/>
      </div>
    </>
  )
}

export default App
