
import './App.css'
import Home from './components/FunctionalComponents/Home';
import Comone from './components/FunctionalComponents/Comone';
import About from './components/FunctionalComponents/About';
import Comtwo from './components/FunctionalComponents/Comtwo';
import Comthree from './components/FunctionalComponents/Comthree';
import Comfour from './components/FunctionalComponents/Comfour';
import Comfive from './components/FunctionalComponents/Comfive';
import Gallery from './components/FunctionalComponents/gallery';
import ClassCompEG from'./components/classComponents/ClassCompEG';
import Contact from './components/FunctionalComponents/Contact';


function App() {


  return (
    <div>
      <Home/>
      <About/>
      <Comone/>
      <Comtwo/>
      <Comthree/>
      <Comfour/>
      <Comfive/>
      <ClassCompEG/>
      <Gallery image=" time" page="Gallery"/>
      <Contact/>
      
    </div>
  )
}

export default App