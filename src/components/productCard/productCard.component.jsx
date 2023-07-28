import React from "react";
import Button,{Button_Type_Class} from "../button/button.component";
import "./product-card.styles.scss"
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({products})=>{
    
    const {name,price,imageUrl} = products
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const addProductToCar = ()=> dispatch(addItemToCart(cartItems,products))
    return(
        <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`}/>
        <div className="footer">

            <span className="name">{name}</span>
            <span className="price">{price}</span>

        </div>

            <Button buttonType={Button_Type_Class.inverted} onClick ={addProductToCar} >Add to card</Button>


        </div>
    )

}
export default ProductCard