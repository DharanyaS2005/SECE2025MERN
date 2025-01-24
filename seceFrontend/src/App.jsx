import { useState } from 'react';
import './App.css';
import Home from './components/FunctionalComponents/Home';
import About from './components/FunctionalComponents/About';
import Gallery from './components/FunctionalComponents/Gallery';
import Contact from './components/FunctionalComponents/Contact';
import Navbar from './components/FunctionalComponents/Navbar';
import Signup from './components/FunctionalComponents/Signup';
import Login from './components/FunctionalComponents/Login';
import UseState from './components/FunctionalComponents/Hooks/UseState';
import UseEffect from './components/FunctionalComponents/Hooks/UseEffect';
import UseEffectAPI from './components/FunctionalComponents/Hooks/UseEffectAPI';
import UseReducer from './components/FunctionalComponents/Hooks/UseReducer';
import UseEffectAPIimage from './components/FunctionalComponents/Hooks/UseEffectAPIimage'
import UseRef from './components/FunctionalComponents/Hooks/UseRef'
import UseMemo from './components/FunctionalComponents/Hooks/UseMemo'
import UseCallback from './components/FunctionalComponents/Hooks/UseCallback';
import ReactLifecycle from './components/classComponents/ReactLifecycle';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({ username: '', password: '' }); 

  const handleSignup = (username, password) => {
    setUser({ username, password }); 
    alert('Signup successful! Please log in.');
  };

  const handleLogin = (username, password) => {
    if (username === user.username && password === user.password) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid username or password!');
    }
  };

  return (
    <>
      <BrowserRouter>
       {isAuthenticated ? (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery page="Gallery" img="time" />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/usestate" element={<UseState />} />
              <Route path="/useeffect" element={<UseEffect />} />
              <Route path="/useapi" element={<UseEffectAPI/>}/>
              <Route path="/usered" element={<UseReducer />} />
              <Route path="/useimg" element={<UseEffectAPIimage/>} />
              <Route path="/useref" element={<UseRef/>}/>
              <Route path="/usememo" element={<UseMemo/>} />
              <Route path="/usecall" element={<UseCallback/>} />
              <Route path="/reactlm" element={<ReactLifecycle/>}/>
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
