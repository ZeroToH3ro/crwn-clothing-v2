// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbbOpHUwbNUBd8aSn1WWBKPbRDaiLfRIk",
    authDomain: "crown-clothing-db-8fe23.firebaseapp.com",
    projectId: "crown-clothing-db-8fe23",
    storageBucket: "crown-clothing-db-8fe23.appspot.com",
    messagingSenderId: "938362201008",
    appId: "1:938362201008:web:b70879f90c5389560d2c75",
    measurementId: "G-XKVFNWV1SR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});
//Authentication by google
export const auth = getAuth();
export const signInWithGooglePopup = async () => await signInWithPopup(auth, provider);
//Setup database
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);

    if(!userSnapShot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (e) {
            console.log(e);
        }
    }

    return userDocRef;
}
