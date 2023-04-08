import React, {useState} from 'react';
import firebase from 'firebase/app';

const LoginForm = () => {
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');

    const handleLogin = async(e)=>{
        e.preventDefault();
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            console.log("User logged In successfully!!")
        } catch (error) {
            console.error("Error logging in: ", error.message)
        };
    };

    return (
        <form>
        <input type="email"  value={email} onChange={(e)=> setEmail(e,target.value)}/>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type='submit'>Log In</button>
        </form>
    )
}

export default LoginForm;
