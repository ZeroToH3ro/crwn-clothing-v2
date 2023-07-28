import {signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";


const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user).then(() => console.log('create data success'));
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In With Google</button>
        </div>
    )
}

export default SignIn
