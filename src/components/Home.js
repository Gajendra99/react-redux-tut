import React from 'react';
import '../App.css';
const Home = (props) => {
    console.log("Home : ",props.data);
    return (
        <React.Fragment>
            <h3>Home Component</h3>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png" alt="image not found" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={() => 
                        props.addToCartHandler({price:1000, name:'I-phone 11s'})
                    } >Add To Cart</button>

                    <button className="removeBtn" onClick={() => 
                        props.removeToCartHandler({price:1000, name:'I-phone 11s'})
                    } >Remove To Cart</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;
