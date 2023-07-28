import { createContext } from "react";
import { useEffect,useReducer } from "react";
import { useState } from "react"
import { creatAction } from "../../utils/firebase/reducer.utils";

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

export const DropDownBoxContext = createContext({
    isCartOpen : false,
    setIsCartOpen : ()=>{},
    cartItems : [],
    addItemToCart : ()=>{},
    cartCount :0,
    removeItemToCart : ()=>{},
    deleteItemtoCart :()=>{},
    cartTotal :0 
  
})
export const CART_ACTION_TYPES =  {
    SET_CART_ITEMS : 'SET_CART_ITEMS',
    SET_CART_OPEN : 'SET_CART_OPEN',
    SET_CART_COUNT : 'SET_CART_OPEN',
    SET_CART_TOTAL : 'SET_CART_OPEN'


}
const INITIAL_STATE ={
    isCartOpen: false,
    cartItems : [],
    cartCount: 0,
    cartTotal: 0
}
const cartReducer = (state,action) =>{
    const {type,payload} = action
    switch(type){
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return{
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.SET_CART_OPEN:
            return{
                ...state,
                isCartOpen:payload

            }
            default:
            throw new Error(`Unhandeled error ${type} in userReducer`)

    }
}
export const DropBoxProvider = ({children}) =>{

    
    const [{isCartOpen,cartItems,cartCount,cartTotal},dispatch] = useReducer(cartReducer,INITIAL_STATE)


   const updateCartItemsReducer = (newCartItems) =>{
    const newCartCount =   newCartItems.reduce((accumulator,cartItem)=>accumulator + cartItem.quantity,0)
    const newCartTotal =   newCartItems.reduce((total,cartItem)=>total + cartItem.quantity * cartItem.price,0)
   
    dispatch(creatAction(CART_ACTION_TYPES.SET_CART_ITEMS,{cartItems:newCartItems,cartCount:newCartCount,cartTotal:newCartTotal}))}

    const addItemToCart = (productToAdd)=>{

       const newCartItems = addCartItem(cartItems,productToAdd)
       updateCartItemsReducer(newCartItems)
    }

    const removeItemToCart = (productoToRemove) =>{

        const newCartItems =  removeCartItem(cartItems,productoToRemove)
        updateCartItemsReducer(newCartItems)
    }
    const deleteItemtoCart = (productoToRemove) =>{

        const newCartItems =  deleteCartItem(cartItems,productoToRemove)
        updateCartItemsReducer(newCartItems)
    }
    const setIsCartOpen = (bool) =>{
            dispatch(creatAction(CART_ACTION_TYPES.SET_CART_OPEN,bool))

    }
  
    const value = {isCartOpen,setIsCartOpen,cartItems,addItemToCart,cartCount,removeItemToCart,deleteItemtoCart,cartTotal}
    return <DropDownBoxContext.Provider value={value}>{children}</DropDownBoxContext.Provider>
}

