 import {NavLink, Link} from 'react-router-dom';
 import Logo from '../assets/homelogo.png';
 import { useCart } from "../context/CartContext";


 export const Header = () => {
  const {cartList} = useCart()
  return (
    <header className='container'>
        <div className="brand-container">
         <Link to='/'><img src={Logo} alt="hompage-logo" /></Link>
         <Link to='/'><span>Context - Reducer</span></Link>
        </div>

        <nav className="nav">
          <p ><NavLink to='/' end>Home</NavLink></p>
          <p><NavLink to='/cart'>Cart</NavLink></p>
        </nav>

        <div className="cart-count">
           <NavLink to='/cart'><p>Cart {cartList.length}</p></NavLink>
        </div>
    </header>
  )
}
