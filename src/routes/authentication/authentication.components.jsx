import {auth, signInWithGooglePopup, signInWithGoogleRedirect ,createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import {getRedirectResult} from "firebase/auth";
import {useEffect} from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.components";

const SignIn = () => {
    // useEffect(async()=>{
    //     const response= await getRedirectResult(auth);
    //     if(response){
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     } else {
    //         console.log('Error redirect');
    //     }
    // }, []);
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user).then(() => console.log('create data success with google popup'));
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In With Google</button>
            <SignUpForm/>
        </div>
    )
}

export default SignIn
