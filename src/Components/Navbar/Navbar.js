import "./Navbar.css"
import logo from "../Assets/Frontend_Assets/logo.png"
import cart_icon from "../Assets/Frontend_Assets/cart_icon.png"
import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar(){
    const [menu, setMenu] = useState("shop")
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt=""/>
                <p>Shopper</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link to="/" className="LinktextDecoration">Shop</Link> {menu==="shop" ? <hr/> : <></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link to='/mens' className="LinktextDecoration">Men</Link> {menu==="mens" ? <hr/> : <></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link to='/womens' className="LinktextDecoration">Women</Link> {menu==="womens" ? <hr/> : <></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link to='/kids' className="LinktextDecoration">Kids</Link> {menu==="kids" ? <hr/> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to="/cart"><img src={cart_icon}/></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}
export default Navbar