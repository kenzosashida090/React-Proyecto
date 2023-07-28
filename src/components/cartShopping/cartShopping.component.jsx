import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' 
import Button from "../button/button.component";
import { useContext} from "react";
import { DropDownBoxContext } from "../context/dropdownContext";
import { useDispatch, useSelector } from "react-redux";
import { selectCartCount,selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { CartIconContainer,ItemCount } from "./cart-shoppin";
const CartShopping = () =>{
    const dispatch = useDispatch()
    const cartCount = useSelector(selectCartCount)
    const isCartOpen = useSelector(selectIsCartOpen)
    const toggleCart = ()=> dispatch (setIsCartOpen(!isCartOpen))
    return(
        <CartIconContainer   onClick={toggleCart}>
      
         <FontAwesomeIcon className="icon-awesome" size="3x" icon={solid("bag-shopping") }  />
            
            <ItemCount>{cartCount}</ItemCount>

        </CartIconContainer>


    )


}

export default CartShopping