
import SignUpForm from "../../components/signUpForm/sign-up-form.component";
import React from "react";
import SignInEmail from "../../components/signInForm/sign-in-form.component";

import './sign-in.style.scss'
const Authentication= ()=>{
    
    return(
        <div className="auth-container">
          
                
            <SignInEmail/>
            <SignUpForm/>
            

        </div>
    )


}

export default Authentication