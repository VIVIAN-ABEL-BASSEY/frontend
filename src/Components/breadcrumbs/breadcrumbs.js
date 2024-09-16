import "./breadcrumbs.css"
import arrow_icon from "../Assets/Frontend_Assets/breadcrum_arrow.png"

function BreadCrumbs(props){
    const {product} = props;
    return(
        <div className="breadcrumbs">
             HOME <img src={arrow_icon} alt=""/>SHOP <img src={arrow_icon} /> {product.category} <img src={arrow_icon}/>  {product.name}
        </div>
    )
}
export default BreadCrumbs