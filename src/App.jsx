
import { useState } from 'react'
import Banner from './Components/Banner'
import Bottom from './Components/Bottom'
import Nav from './Components/Nav'
import Footer from './Components/Footer'



function App() {
  const [coin, setCoin] = useState(0)

  return (
    <div>
      <div className='px-[5vw] font-inter'>
        <Nav coin={coin}></Nav>
        <Banner coin={coin} setCoin={setCoin}></Banner>
        <Bottom coin={coin} setCoin={setCoin}></Bottom>
       
      </div>
      <Footer></Footer>
    </div>


  )
}

export default App
