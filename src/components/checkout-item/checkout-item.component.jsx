 import "./checkout-item.style.scss"
 import { useContext } from "react"
 import { DropDownBoxContext } from "../context/dropdownContext"
import { useSelector } from "react-redux"
 import { useDispatch } from "react-redux"
 import { selectCartItems } from "../../store/cart/cart.selector"
 import { addItemToCart,removeItemToCart,deleteItemtoCart } from "../../store/cart/cart.action"
 import "./checkout-item.style.scss"
import { useSelect } from "@mui/base"
const CheckOutItem = ({item})=>{
  
    const {name,imageUrl,price,quantity} = item
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()

    const deleteProductToCar = ()=> dispatch(deleteItemtoCart(cartItems,item))
    const removeItemHandler = ()=> dispatch(removeItemToCart(cartItems,item))
    const addItemHandler = ()=> dispatch(addItemToCart(cartItems,item))
    return(
        <div className="checkout-item-container">

            <div className="image-container">
                    <img src={imageUrl} alt ={`${name}`}/>

            </div>
    
            <span className="name">{name} </span>
            <span className="quantity">
            <div className="arrow" onClick={removeItemHandler}> &#10094; </div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={addItemHandler}> &#10095; </div>
            
        
            </span>
            <span className="price">{price}</span>
      
            <div className="remove-buton" onClick={deleteProductToCar}>&#10005;</div>
            
        </div>

    )


}

export default CheckOutItem