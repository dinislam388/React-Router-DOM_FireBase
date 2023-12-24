import { Outlet, useNavigation } from 'react-router-dom'
import './App.css'
import NavBar from './LayOut/ShareComponents/NavBar/NavBar'
import Footer from './LayOut/ShareComponents/Footer/Footer'
import Loading from './Components/Loading/Loading'

function App() {
    const navigation = useNavigation()
  return (
    <>
      <div>
          <NavBar />
          <div> {navigation.state === "loading" ? <Loading /> : <Outlet/> }</div>
          <Footer/>
      </div>
    </>
  )
}

export default App
