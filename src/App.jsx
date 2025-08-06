import Body from './Components/Body'
import Searchbar from './Components/Searchbar'
import Filters from './Components/Filters'
import Cardcontainer from './Components/Cardcontainer'
import RestaurantCard from './Components/Restaurantcard'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { Outlet } from 'react-router'

function App() {
  
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
      
    </>
  )
}

export default App
