import React from 'react';
import '../App.css';

const Header = (props) => {
    console.log("Home : ",props.data);
    return (
        <React.Fragment>
            <div className="add-to-cart">
            <div className="cart-count">
                <p >{props.data.length}</p>
            </div>            
                <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="Cart icon not available" />
            </div>
        </React.Fragment>
    )
}

export default Header;
