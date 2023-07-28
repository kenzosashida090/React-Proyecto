import { takeLatest,put,all,call } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import { signInSucces,signInFailed, signUpSucces, signUpFailed, singOutSuccess, signOutFailed } from "./user.action";
import { getCurrentUser,createUserDocumentFromAuth,SignWithGooglePopup,SignWithFacebookPopup,SignWithGitHubPopup,signInAuthUserWithEmailAndPassword,createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { signOutUser } from "../../utils/firebase/firebase.utils";
export function* getSnapshotFromUserAuth(userAuth,additionalDeatils){
    try{
            const userSnapshot = yield call(
                createUserDocumentFromAuth,
                userAuth,
                additionalDeatils

            )
        
            yield put(signInSucces({id:userSnapshot.id, ...userSnapshot.data}))
    
}catch(error){
    yield put(signInFailed(error))
}

}
export function* signInWithGoogle(){
    try{
        const {user} = yield call(SignWithGooglePopup)
        yield call(getSnapshotFromUserAuth,user)
    }catch (error){
        yield put(signInFailed(error))

    }
}
export function* signInWithFacebook(){
    try{
        const {user} = yield call(SignWithFacebookPopup)
        yield call(getSnapshotFromUserAuth,user)
    }catch(error){
        yield put(signInFailed(error))
    }
}
export function* signInWithGituHub(){
    try{
        const {user} = yield call(SignWithGitHubPopup)
        yield call(getSnapshotFromUserAuth,user)
    }catch(error){
        yield put(signInFailed(error))
    }

}
export function* signInWithEmail({payload:{email,password}}){
    try{
        const {user} = yield call (signInAuthUserWithEmailAndPassword,email,password)
        yield call(getSnapshotFromUserAuth,user)
    }catch(error){
        yield put(signInFailed(error))
    }

}
export function* signUp({payload:{email,password,displayName}}){
    
        try{
            console.log(displayName);
        const {user} = yield call(createAuthUserWithEmailAndPassword,email,password)
            yield put (signUpSucces(user,{displayName})) 
    

        }catch(error){
            yield put(signUpFailed(error))
        }
    

}
export function* isUserAuthenticated (){
    try{
        const userAuth = yield call(getCurrentUser);
        if(!userAuth) return;
        yield call(getSnapshotFromUserAuth,userAuth)
    }catch (error){

        yield put(signInFailed(error))
    }
}
export function* onSignOut(){
    try{
    yield call (signOutUser);
    yield put(singOutSuccess())
    }catch(error){
        yield put(signOutFailed(error))

    }

}
export function* signInAfterSignUp({payload:{user,additionalDeatils}}){
    yield call(getSnapshotFromUserAuth,user,additionalDeatils)

}
export function* onGoogleSingInStart(){
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START,signInWithGoogle)
}

export function* onFacebookSignInStart(){
    yield takeLatest(USER_ACTION_TYPES.FACEBOOK_SIGN_IN_START,signInWithFacebook)

}
export function* onGitHunSignInStart(){
    yield takeLatest(USER_ACTION_TYPES.GITHUB_SIGN_IN_START,signInWithGituHub)
}
export function* onEmailAndPasswordInStart(){
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START,signInWithEmail)
}
export function* onCheckUserSession(){
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION,isUserAuthenticated)

}
export function* onSignUpSuccess(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS,signInAfterSignUp)

}
export function* onSignUpStart(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START,signUp)

}
export function* onSignOutStart(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START,onSignOut)

}

export function* userSagas(){
    yield all([call(onCheckUserSession),call(onGoogleSingInStart),call(onFacebookSignInStart),call(onGitHunSignInStart),call(onEmailAndPasswordInStart),call(onSignUpStart),call(onSignUpSuccess),call(onSignOutStart)])

}