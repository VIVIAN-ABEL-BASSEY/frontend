import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import "./CSS/shopCategory.css"
import dropdown_icon from "../Components/Assets/Frontend_Assets/dropdown_icon.png"
import Items from "../Components/Items/items"

function ShopCategory(props){
    const {all_product} = useContext(ShopContext)
    // console.log("all_product",all_product)
    return(
        <div className="shop-category">
            <img className="shopcategory-banner" src={props.banner}/>
            <div className="shopcategory-indexsort">
                <p><span>Showing 1-12</span>of 36 product</p>
                <div className="shopcategory-sort">
                    sort by <img src={dropdown_icon}/>
                </div>
            </div>
            <div className="shopcategory-products">
                {all_product.map((item,i)=>{
                    if (props.category === item.category){
                        return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/> 
                    }
                    else
                    return null
                })}
            </div>
            <div className="shopcategory-loadmore">Explore more</div>
        </div>
    )
}
export default ShopCategory