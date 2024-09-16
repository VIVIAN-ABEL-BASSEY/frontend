import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from "./Components/Assets/Frontend_Assets/banner_mens.png"
import women_banner from "./Components/Assets/Frontend_Assets/banner_women.png"
import kids_banner from "./Components/Assets/Frontend_Assets/banner_kids.png"
// console.log("kids banner",kid_banner)

function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>} />
          <Route path='/Product' element={<Product/>}>  
            <Route path=':productId' element={<Product/>} />
          </Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path='login' element={<LoginSignup/>} />
        </Routes>

        <Footer/>
    </div>
  );
}

export default App;
