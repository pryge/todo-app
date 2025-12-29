import { useState } from 'react';
import './App.scss'
import Footer from './Components/Footer/footer'
import Header from './Components/Header/header'
import Main from './Components/Main/main'

function App() {
  const [searchQuery, setSearchQuery] = useState("");


  return (
    <div className='app'>
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <Main searchQuery={searchQuery} />
      <Footer />
    </div>
  )
}

export default App
