import React, { useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { auth} from "../../../firebase"
import { useAuthState} from "react-firebase-hooks/auth"
import { useEffect } from "react";
import { toast, ToastContainer} from "react-toastify"
import { signInWithEmailAndPassword } from "firebase/auth"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate()

    const Login = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            toast.success("Logged in")
            navigate("/home")
        })
        .catch((error) => {
            console.log(error);
            toast.warning(error)
        })
    }
    

    return (
        <div className="h-screen w-screen pt-44">
            <ToastContainer/>
            <h1>Log In</h1>
            <div className="h-32 w-44">
                {/* {error ? <div>{error}</div> : null} */}
                <form onSubmit={Login}>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Your Email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Your Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login