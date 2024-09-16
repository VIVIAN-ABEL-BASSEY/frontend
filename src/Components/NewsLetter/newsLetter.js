import "./newSletter.css"


function NewsLetter(){
    return(
        <div className="newSletter">
            <h1>Get Exclusive Offers on you Emails</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div>
                <input type="email" placeholder="your email id"/>
                <button>Subscribe</button>
            </div>
        </div>
    )
}
export default NewsLetter