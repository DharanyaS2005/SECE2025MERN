
import './App.css'
import Home from './components/FunctionalComponents/Home';
import About from './components/FunctionalComponents/About';
import Gallery from './components/FunctionalComponents/gallery';
import Contact from './components/FunctionalComponents/Contact';
import Navbar from './components/FunctionalComponents/Navbar';
import Signup from './components/FunctionalComponents/Signup';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/about" element={<About />} ></Route>
      <Route path="/gallery" element={<Gallery page="Gallery" img ="time"/>} ></Route>
      <Route path="/contact" element={<Contact />} ></Route>
      <Route path="/signup" element={<Signup />} ></Route>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App