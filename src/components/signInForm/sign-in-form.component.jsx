import React from "react";
import {SignWithGooglePopup } from "../../utils/firebase/firebase.utils"
import { SignWithFacebookPopup,SignWithGitHubPopup,signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormComponent from "../forms-components/form.component";
import { useState } from "react";
import "../signUpForm/signup-form.style.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button,{Button_Type_Class} from "../button/button.component";
import "../../routes/auth/sign-in.style.scss"
import {brands} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
// import Button from '@mui/material/Button';
import { useContext } from "react";
import { useDispatch } from "react-redux";
import "./singIn.style.scss"
import { googleSignInStart,facebookSignInStart, githubSignInStart,emailSignInStart } from "../../store/user/user.action";
const defaultFormatFields = {
    Email :'',
    Password: ''
}
const SignInEmail = ()=>{
    const dispatch = useDispatch()
   
    //const {setCurrentUser} = useContext(UserContext) // will connect the context to this sign in form 
    const[formFields,setFormFields] = useState(defaultFormatFields)
    const {Email,Password} = formFields
    const resetForm= ()=>{
        setFormFields(defaultFormatFields)
    }
    const logGoogleUser = async ()=>{
        dispatch(googleSignInStart())
    }
    const logFacebookUser = async ()=>{
        dispatch(facebookSignInStart())
   
    }
    const logGitHubUser = async()=>{
        dispatch(githubSignInStart())

     //   {setCurrentUser(user)} // this will allow us to track if we are sign in or not .

    }
    
    const handleSubmit = async (event) =>{
        event.preventDefault();

        try{
            dispatch(emailSignInStart(Email,Password))
         //   {setCurrentUser(user)}
            resetForm()
        }catch (error){
            console.log(error.message);

        }

    }
    const handleChange = (event)=>{
        const {name,value} = event.target

        setFormFields({...formFields,[name]:value})
           
    }
    return(
        <div className="sign-up-container">
        <h2>I already have an account</h2>
        <span> Sign In with your Email and Password</span>
        <form onSubmit={handleSubmit} >
            <FormComponent label="Email" type ="email" onChange={handleChange} name="Email" value={Email} required/>
            <FormComponent label="Password" type ="password" onChange={handleChange} name="Password" value={Password} required/>
            
            <div className="buttons-container">
            <Button  type="submit" buttonType="inverted" id="button-size">Sign In</Button>
            <Button type="button"  onClick={logGoogleUser} buttonType={Button_Type_Class.google} id="button-size" ><FontAwesomeIcon id="IconAwesome" icon={brands('google')} size='2x'/> Sign In with google  </Button>
                
            <Button type="button" onClick={logFacebookUser} buttonType={Button_Type_Class.facebook} id="button-size">
            <FontAwesomeIcon icon={brands('facebook')} size='2x' id="IconAwesome" />
                
                     Sign In with Facebook
             
            </Button>

            <Button type="button" onClick={logGitHubUser} buttonType={Button_Type_Class.github} id="button-size">
            <FontAwesomeIcon icon={brands('github')} size='2x' id="IconAwesome" />
                
                     Sign In with GitHub
             
            </Button>
            </div>
        </form>
        </div>
    )

}
export default SignInEmail