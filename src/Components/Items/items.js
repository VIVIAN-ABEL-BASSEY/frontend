import "./items"
function Items(props){
    return(
        <div className="items">
            <img src={props.image}/>
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="new-item-price">
                    {props.new_price}
                </div>
                <div className="old-item-price">
                    {props.old_price}
                </div>
            </div>
        </div>
    )
}
export default Items