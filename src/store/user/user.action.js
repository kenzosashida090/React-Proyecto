
import { creatAction } from "../../utils/firebase/reducer.utils"


import { USER_ACTION_TYPES } from "./user.types"
export const setCurrentUser = (user)=>creatAction(USER_ACTION_TYPES.SET_CURRENT_USER,user)


export const checkUserSession =()=>creatAction(USER_ACTION_TYPES.CHECK_USER_SESSION);
export const googleSignInStart = ()=>creatAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);
export const facebookSignInStart = ()=>creatAction(USER_ACTION_TYPES.FACEBOOK_SIGN_IN_START);
export const githubSignInStart = ()=>creatAction(USER_ACTION_TYPES.GITHUB_SIGN_IN_START);
export const emailSignInStart = (email,password)=>creatAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START,{email,password});
export const signInSucces = (user)=>creatAction(USER_ACTION_TYPES.SING_IN_SUCCESS,user);
export const signInFailed =(error)=>creatAction(USER_ACTION_TYPES.SING_IN_FAILED,error);
export const signUpStart = (email,password,displayName) =>creatAction(USER_ACTION_TYPES.SIGN_UP_START,{email,password,displayName});
export const signUpSucces = (user,additionalDetails)=>creatAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS,{user,additionalDetails});
export const signUpFailed = (error)=>creatAction(USER_ACTION_TYPES.SIGN_UP_FAILED,error);
export const signOutStart = ()=>creatAction(USER_ACTION_TYPES.SIGN_OUT_START);
export const singOutSuccess = ()=>creatAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);
export const signOutFailed = (error)=>creatAction(USER_ACTION_TYPES.SIGN_OUT_FAILED,error);
