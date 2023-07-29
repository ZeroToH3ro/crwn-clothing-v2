// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, signInWithRedirect, createUserWithEmailAndPassword ,GoogleAuthProvider } from "firebase/auth";
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
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});
//Authentication by google
export const auth = getAuth();
export const signInWithGooglePopup = async () => await signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = async () => await signInWithRedirect(auth, googleProvider);
//Authentication by email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}
//Setup database
export const db = getFirestore();
//Create database
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);

    if(!userSnapShot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            })
        } catch (e) {
            console.log(e);
        }
    }

    return userDocRef;
}
