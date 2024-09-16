import "./ProductDisplay.css"
import star_icon from "../Assets/Frontend_Assets/star_icon.png"
import star_dull_icon from "../Assets/Frontend_Assets/star_dull_icon.png"

function ProductDisplay(props){
    const {product} = props;
    return(
        <div className="ProductDisplay">
            <div className="ProductDisplay-left">
                 <div className="ProductDisplay-img-list">
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                </div>
                <div className="ProductDisplay-img">
                    <img src={product.image} className="ProductDisplay-main-img"/>
                </div>
            </div>
            <div className="ProductDisplay-right">
                <h1>{product.name}</h1>
                <div className="ProductDisplay-right-star">
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_dull_icon} alt=""/>
                    <p>(122)</p>
                </div>
                <div className="ProductDisplay-right-prices">
                    <div className="ProductDisplay-right-old-price">${product.old_price}</div>
                    <div className="ProductDisplay-right-new-price">${product.new_price}</div>
                </div>
                <div className="ProductDisplay-right-description">
                    A lightweight, usually knitted. pullovershirt, close-fitting and with a round neckline and short sleaves, worn as undershirt or outer garment
                </div>
                <div className="ProductDisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="ProductDisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button>Add To Cart</button>
                <p className="ProductDisplay-right-category"><span>Category: </span> Women, T-shirt, Crop Top</p>
                <p className="ProductDisplay-right-category"><span>Tags: </span> Modern, Latest</p>
            </div>
        </div>
    )
}
export default ProductDisplay