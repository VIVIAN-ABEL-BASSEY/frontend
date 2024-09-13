import "./hero.css"
import hand_icon from "../Assets/Frontend_Assets/hand_icon.png"
import arrow_icon from "../Assets/Frontend_Assets/arrow.png"
import hero_image from "../Assets/Frontend_Assets/hero_image.png"
function Hero(){
    return(
        <div className="hero">
           <div className="hero-left">
                <h2>New Arrivals</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>New</p>
                        <img src={hand_icon}/>
                    </div>
                    <p>Collections</p>
                    <p>For Everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Lastest Collections</div>
                    <img src={arrow_icon}/>
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image}/>
            </div> 
        </div>
    )
}
export default Hero