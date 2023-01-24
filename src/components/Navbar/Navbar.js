import React from "react"
import './Navbar.css'
const Navbar = () => {

    // Element
    // logo
    // inputfield
    // item1
    // Item2
    // Item3
    // Item4
    return (
        <div className="navbar">
            {/* {logo} */}
            <div className="searchbox">
            <p> Flipkart</p>
            <div className="inputtab">
            <input className="inputtab" ></input>
            </div>
            </div>
            <div className="navbar_right">
            <p>Name</p>
            <p>Become a Seller</p>
            <p>More</p>        
            <p>Cart</p>
            </div>
        </div>
    );
};
export default Navbar;