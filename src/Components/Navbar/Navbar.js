import "./Navbar.css"
import logo from "../Assets/Ecommerce_Assets/Assets/Frontend_Assets/logo.png"
import cart_icon from "../Assets/Ecommerce_Assets/Assets/Frontend_Assets/cart_icon.png"


function Navbar(){
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt=""/>
                <p>Shopper</p>
            </div>
            <ul className="nav-menu">
                <li>Shop</li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart_icon}/>
            </div>
        </div>
    )
}
export default Navbar