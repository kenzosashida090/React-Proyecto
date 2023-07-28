
import Button,{Button_Type_Class} from "../button/button.component"
import CartItem from "../cart-itme/cartItme.component"

import { CartDropDownContainer,CartItems} from "./cart-dropdown.stule"
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
const CartDropdown = ()=>{
    const cartItems  = useSelector(selectCartItems)
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate('/checkout')

    }
return(
    <CartDropDownContainer>
    <CartItems>
    {
        cartItems.length ?   (cartItems.map((item) =>( <CartItem key={item.id} CartItem={item}/>)))  :
        (
            <span>YOUR CART IS EMPTY</span>

        )
    }
    
    </CartItems>

    <Button buttonType={Button_Type_Class.inverted} onClick = {handleClick}>
    GO TO CHECKOUT
    </Button>



    </CartDropDownContainer>

)


}
export default CartDropdown