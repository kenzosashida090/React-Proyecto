import { FirebaseError, initializeApp } from "firebase/app";
import { FacebookAuthProvider } from "firebase/auth";
import {
    
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    signInWithRedirect,
    onAuthStateChanged
    } from "firebase/auth"
    import { GithubAuthProvider } from "firebase/auth";
import {
    getFirestore,
    doc, //retrieve doc isnide our database 
    getDoc, 
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDInFFyoaeq5cAovEpLx789B53gM_k2KWY",
    authDomain: "clothes-db-f1228.firebaseapp.com",
    projectId: "clothes-db-f1228",
    storageBucket: "clothes-db-f1228.appspot.com",
    messagingSenderId: "404439792812",
    appId: "1:404439792812:web:aa1549b993c3cb8203b309"
  };
 


  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider()
  const facebookProvider = new FacebookAuthProvider()
  const githubProvider = new GithubAuthProvider()
  provider.setCustomParameters({
        prompt:"select_account"
  });
  facebookProvider.setCustomParameters({
        prompt: "select_account"
  })
  githubProvider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth(); //auth allows us to get track of our credential even if we are in our dominion so with this we can use redirect toget the response out of our localhost 
  export const SignWithGooglePopup = () => signInWithPopup(auth,provider).catch(function(e){
    if (e.code == 'auth/account-exists-with-different-credential') {
      alert('This user has already been logged in in another account. Try to sign In with another account')
    }
  });
  export const signInWitGooglehRedirect =()=>signInWithRedirect(auth, provider);
  export const SignWithFacebookPopup = () => signInWithPopup(auth,facebookProvider).catch(function(e){
    if (e.code == 'auth/account-exists-with-different-credential') {
      alert('This user has already been logged in in another account. Try to sign In with another account')
    }
  });
  export const SignWithGitHubPopup = ()=> signInWithPopup(auth,githubProvider).catch(function(e){
    if (e.code == 'auth/account-exists-with-different-credential') {
      alert('This user has already been logged in in another account. Try to sign In with another account')
    }
  });



  export const db = getFirestore() // allows us to tell firebase when we want to set a doc o get a doc
  export const addCollectionAndDocuments = async(collectionKey,objectsToAdd,field) =>{
      const collectionRef = collection(db,collectionKey)
      const batch = writeBatch(db);

      objectsToAdd.forEach((object)=>{
        const docRef = doc(collectionRef,object.title.toLowerCase())
        batch.set(docRef,object)


      })
      await batch.commit()
      console.log("done");

  }
  export const getCategoriesAndDocuments = async ()=>{
    const collectionRef = collection(db,'categories');
    const q = query(collectionRef)

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(docSnapshot => docSnapshot.data())

  
  }
  export const createUserDocumentFromAuth = async (userAuth,additionalInformation={}) =>{
    if(!userAuth) return;    
    const userDocRef = doc(db,'users',userAuth.uid)
        
        const userResponse = await getDoc(userDocRef)
        
        if(!userResponse.exists()){
            const {displayName, email} = userAuth
            console.log(userAuth.displayName);
            const createdAt =new Date();
            
            try{
                await setDoc(userDocRef,{
                    displayName,
                    email,
                    createdAt,
                    ...additionalInformation // this will make that if we dont have for example a display name then the form actually will fill this display name of what we werote in the name
                })
            }catch(error){
               
              
                console.log('error creating the user',error.message);
              
              
            }
        }
    return userResponse
  }
 


  export const createAuthUserWithEmailAndPassword = async (email,password) =>{
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password)


  }
  export const signInAuthUserWithEmailAndPassword = async (email,password) =>{
    if (!email || !password) return;

    return await signInWithEmailAndPassword (auth,email,password)


  }
  

  export const signOutUser = async () => await signOut(auth)
  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback)
  export const getCurrentUser = ()=>{
    return new Promise((resolve,reject)=>{
        const unsubscribe = onAuthStateChanged(
            auth,
            (userAuth)=>{
                unsubscribe()
                resolve(userAuth)
            },
            reject

        )

    })
  }
  //for our auth theres only one way to auth but with signin wit pop up 
  //we need to provide the auth and the provider that in this case is a google auth provider
  // So this is a class that we can set if we want a facebook auth or a github auth 