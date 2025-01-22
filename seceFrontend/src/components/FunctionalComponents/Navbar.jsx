import {useState} from 'react'
import { Link } from 'react-router-dom';
import "../../css/Nav.css";

const Navbar = () => {
  var [dropDown,setDropdown]= useState(false)
  const toggleDropdown=()=>{
    setDropdown(dropDown=>!dropDown);
  };
 
  return (
    <header>
    <nav>
      <ol>
        <li><Link to='/' className="link">Home</Link></li>
        <li><Link to='/about' className="link">About</Link></li>
        <li><Link to='/gallery' className="link">Gallery</Link></li>
        <li><Link to='/contact'className="link">Contact</Link></li>
        
        <div onMouseEnter={toggleDropdown}onMouseLeave={toggleDropdown} className="div">
        <span >Hooks</span>
          {dropDown &&( 
          <ul>
            <li><Link to='/usestate'>useState</Link></li>
            <li><Link to='/useeffect'>useEffect</Link></li>
          </ul>)}
        </div>
      </ol>
    </nav>
    </header>
  )
}

export default Navbar
