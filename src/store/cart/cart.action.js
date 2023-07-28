import { creatAction } from "../../utils/firebase/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";
export const  addCartItem = (cartItems,productToAdd ) =>{

    const existingCartItem =  cartItems.find((items) => items.id === productToAdd.id)
           if (existingCartItem){
               return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? 
                       {...cartItem, quantity : cartItem.quantity +1}
                   :
   
                       cartItem
               
               )
   
           }
           return [...cartItems,{...productToAdd,quantity:1}]
   }
   
   export const  removeCartItem = (cartItems,productToRemove ) =>{
   
       const existingCartItem =  cartItems.find((items) => items.id === productToRemove.id)
       
              if (existingCartItem.quantity  === 1){
                  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id  )
      
              }
           
              return cartItems.map((cartItem) => cartItem.id === productToRemove.id ? 
              {...cartItem, quantity : cartItem.quantity - 1}
          :
   
              cartItem
              );
      }
   
   export const deleteCartItem = (cartItems,productToRemove) =>{
       const existingCartItem =  cartItems.find((items) => items.id === productToRemove.id)
   
       if(existingCartItem){
           return cartItems.filter((cartItem)=> cartItem.id !== productToRemove.id)
   
       }
   
   }



export const setIsCartOpen = (bool) => creatAction(CART_ACTION_TYPES.SET_CART_OPEN,bool)


export  const addItemToCart = (cartItems,productToAdd)=>{

    const newCartItems = addCartItem(cartItems,productToAdd)
    return creatAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems)
 }

 export const removeItemToCart = (cartItems,productoToRemove) =>{

     const newCartItems =  removeCartItem(cartItems,productoToRemove)
     return creatAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
 }
 export const deleteItemtoCart = (cartItems,productoToRemove) =>{

     const newCartItems =  deleteCartItem(cartItems,productoToRemove)
     return creatAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems)
 }