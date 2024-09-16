import "./offer.css"
import explusive_image from "../Assets/Frontend_Assets/exclusive_image.png"
function Offers(){
    return(
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers for you</h1>
                <p>ONLY ON BEST SELLERS PRICE</p>
                <button>Check now</button>
            </div>
            <div className="offers-right">
                <img src={explusive_image}/>
            </div>
        </div>
    )
}
export default Offers