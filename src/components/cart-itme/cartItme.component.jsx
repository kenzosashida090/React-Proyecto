import {CartItemContainer,ItemDetails,Name} from './cart-item.jsx'

const CartItem = ({CartItem})=>{
const {name,quantity,price,imageUrl} = CartItem


return(

    <CartItemContainer>
    <img src={imageUrl} alt={`${name}`}/>
        <ItemDetails>
        <Name> {name} </Name>
        <span className='price'>
        {quantity} x ${price}
        
        </span>
        </ItemDetails>
        
    </CartItemContainer>
)


}

export default CartItem