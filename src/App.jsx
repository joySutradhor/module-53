
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import PriceList from './Components/PriceLIst/PriceList'
import Dashboard from './Components/Dashboard/Dashboard'
import Phone from './Components/Phone/Phone'

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <PriceList></PriceList>
      <Dashboard> </Dashboard>
      <Phone> </Phone>
    </div>
  )
}

export default App
