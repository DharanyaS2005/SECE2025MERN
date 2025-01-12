import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/FunctionalComponents/Home';
import Comone from './components/FunctionalComponents/Comone';
import Comtwo from './components/FunctionalComponents/Comtwo';
import Comthree from './components/FunctionalComponents/Comthree';
import Comfour from './components/FunctionalComponents/Comfour';
import Comfive from './components/FunctionalComponents/Comfive';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Home/>
      <Comone/>
      <Comtwo/>
      <Comthree/>
      <Comfour/>
      <Comfive/>
    </div>
  )
}

export default App
