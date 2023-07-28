
import {BaseButton, GoogleSignInButton,GitHubSignInButton,FacebookSignInButton,Inverted} from "./button-style.jsx"
export const Button_Type_Class = {
    base : 'base',
    google : 'google-sign-in',
    inverted : 'inverted',
    github:'github-sign-in',
    facebook:'facebook-sign-in'

} 

const getButton = (buttonType = Button_Type_Class.base) =>(
    {
        [Button_Type_Class.base] : BaseButton,
        [Button_Type_Class.google] : GoogleSignInButton,
        [Button_Type_Class.inverted] : Inverted,
        [Button_Type_Class.github] : GitHubSignInButton,
        [Button_Type_Class.facebook] : FacebookSignInButton,
    } [buttonType]
)
const Button =({children,buttonType, ...otherProps}) =>{
    const CustomButton = getButton(buttonType)
    return <CustomButton {...otherProps}>{children}</CustomButton>
    

}
export default Button