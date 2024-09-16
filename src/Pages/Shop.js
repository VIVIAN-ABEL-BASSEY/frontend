import Hero from "../Components/Hero/Hero"
import Popular from "../Components/popular/Popular"
import Offers from "../Components/Offers/Offers"
import NewCollections from "../Components/NewCollections.js/NewCollections"
import NewsLetter from "../Components/NewsLetter/newsLetter"
function Shop(){
    return(
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/>
            <NewsLetter/>
        </div>
    )
}
export default Shop