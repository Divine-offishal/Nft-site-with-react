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
            toast.success("Logged in")
            navigate("/home")
        })
        .catch((error) => {
            console.log(error);
            toast.warning(error)
        })
    }
    

    return (
        <div className="h-screen w-screen pt-44 bg-blue-50">
            <ToastContainer/>
            <h1 className="text-center">Log In</h1>
            <div className="w-72 h-56 border border-neutral-900 mx-auto bg-neutral-50 rounded-lg">
                {/* {error ? <div>{error}</div> : null} */}
                <form onSubmit={Login}>
                    <input
                        type="email"
                        className="border border-neutral-900 mx-6 mt-6 rounded-md"
                        name="email"
                        value={email}
                        placeholder="Your Email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        name="password"
                        className="border border-neutral-900 mx-6 mt-6 rounded-md"
                        value={password}
                        placeholder="Your Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="ml-20 bg-neutral-900 hover:bg-green-700 focus:border focus:border-blue-900 text-neutral-50 rounded-md p-2 mt-4">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login