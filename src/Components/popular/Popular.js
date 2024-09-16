import "./popular.css"
import data_product from "../Assets/Frontend_Assets/data"
import Items from "../Items/items"
function Popular(){
    return(
        <div className="popular">
            <h1>Women's Trendy</h1>
            <hr/>
            <div className="popular-item">
                {data_product.map((item,i)=>{
                    // console.log("data_product",data_product);
                    return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                
                    })}
            </div>
        </div>
    )
}
export default Popular