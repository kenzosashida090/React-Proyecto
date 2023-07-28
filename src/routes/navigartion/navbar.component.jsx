import React from "react";
import { Outlet } from 'react-router-dom';
import { Fragment,useContext } from 'react';
import { useSelector } from "react-redux";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { selectCurrentUser } from "../../store/user/user.selectro";
import { signOutStart } from "../../store/user/user.action";
import CartShopping from "../../components/cartShopping/cartShopping.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import { NavigationContainer,LogoContainer,NavLinks,NavLink } from "./navigation.styles";
import {selectIsCartOpen} from "../../store/cart/cart.selector"
import { useDispatch } from "react-redux";
const NavigationBar = ()=>{
 const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch()
  const isCartOpen = useSelector(selectIsCartOpen)
  const signOutUser = ()=> dispatch(signOutStart())
    return(
        <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
           <CrwnLogo className="logo"/>
           </LogoContainer>
        <NavLinks>
            <NavLink to="/shop">
                Shop

            </NavLink>
            {currentUser ? <><NavLink as='span' onClick={signOutUser}>Sign Out</NavLink></> 
              :
              <>
              <NavLink to="/Auth">
                Sign In 

            </NavLink>

              </>
              

            }
            <CartShopping/>

            </NavLinks>
        {isCartOpen && <CartDropdown />}
        </NavigationContainer>
          <Outlet/>
  
      
      </Fragment>
    )
  
  }
  export default NavigationBar