import { Link } from "react-router-dom"
import "./items.css"
function Items(props){
    return(
        <div className="items">
            <Link to={`/product/${props.id}`}><img src={props.image}/></Link>
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="new-item-price">
                    ${props.new_price}
                </div>
                <div className="old-item-price">
                    ${props.old_price}
                </div>
            </div>
        </div>
    )
}
export default Items