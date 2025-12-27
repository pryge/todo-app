// import { useState } from 'react'

import './App.scss'
import Footer from './Components/Footer/footer'
import Header from './Components/Header/header'
import Main from './Components/Main/main'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
