
import Home from './pages/Home'
import Navbar from './components/Home/Navbar'
import BackOnTop from './components/Home/BackOnTop'
import {PacmanLoader} from 'react-spinners'
import { useState,useEffect } from 'react'
function App() {

  const [isLoading,setLoading] = useState(true)

  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  

  if (isLoading) {
    return (
      <div className="loader">
          <PacmanLoader
          
            color="rgb(120, 6, 227)"
            cssOverride={{}}
            loading
            margin={2}
            size={40}
            speedMultiplier={2}
          />
      </div>
    );
  }

  return (
    <>
    <BackOnTop/>
      <Navbar/>
      <Home/>
      
    </>
  )
}

export default App
