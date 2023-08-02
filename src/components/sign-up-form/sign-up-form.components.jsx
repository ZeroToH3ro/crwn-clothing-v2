import {useState, useContext} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.components";
import Button from "../button/button.components";
import { UserContext } from "../../contexts/user.contexts";
import './sign-up.styles.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Password does not match');
            return 0;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            setCurrentUser(user);
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
        } catch (e) {
            console.log(e);
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    };

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account</h2>
            <span>Sign Up With Email Or Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Display Name'
                    type="text"
                    required
                    onChange={handleChange}
                    name='displayName'
                    value={displayName}/>
                <FormInput label='Email' type="email" required onChange={handleChange} name='email' value={email}/>
                <FormInput label='Password' type="password" required onChange={handleChange} name='password'
                           value={password}/>
                <FormInput label="Confirm Password" type="password" required onChange={handleChange}
                           name='confirmPassword' value={confirmPassword}/>
                <Button buttonType='inverted' type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;
