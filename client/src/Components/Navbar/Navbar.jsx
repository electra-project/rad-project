import {useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import Logo from '../Assets/logo.png';
import Cart from '../Assets/cart.png';

const Navbar = () => {

  const [menu,setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={Logo} alt="Logo" />
        <p> Electra</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=> {setMenu("shop")}}> <Link to='/'>Shop</Link> {menu==="shop"? <hr/>:<></>}</li>
        <li onClick={()=> {setMenu("mens")}}> <Link to='/mens'>Men </Link>{menu==="mens"? <hr/>:<></>}</li>
        <li onClick={()=> {setMenu("women")}}> <Link to='/women'>Women </Link>{menu==="women"? <hr/>:<></>}</li>
        <li onClick={()=> {setMenu("kids")}}> <Link to='/kids'>Kids</Link> {menu==="kids"? <hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login"><button> Login </button></Link>
        <Link to="/cart"><img src={Cart} alt="Cart" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar