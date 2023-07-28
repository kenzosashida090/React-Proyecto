import React from "react";
import {DropDownBoxContext } from "../../components/context/dropdownContext"
import { useContext } from "react"
import "./checkout-style.scss"
import { useSelector } from "react-redux";
import { selectCartItems,newCartTotal } from "../../store/cart/cart.selector";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
const CheckOut= ()=>{

    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(newCartTotal)

    
    
    return(
    <div className="checkout-container">
        <div className="checkout-header">

            <div className="header-block">
                <span>Product</span>

            </div>
            <div className="header-block">
                <span>Description</span>

            </div>
            <div className="header-block">
                <span>Quantity</span>

            </div>
            <div className="header-block">
                <span>Price</span>

            </div>
            <div className="header-block">
                <span>Remove</span>

            </div>


        </div>

       

         {cartItems.map((item)=>(
            
                <CheckOutItem key={item.id} item={item }/>

         ))}
         <span className="total">Total: {cartTotal}</span>
    </div>
        
    )
}
export default CheckOut