import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase"
// import { useAuthState} from "react-firebase-hooks/auth"
import { useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth"
import {toast, ToastContainer} from "react-toastify"


const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate()

    const register = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            toast.success("Sign in successful")
            navigate("/login")
        })
        .catch((error) => {
            console.log(error);
            toast.warning(error)
        })
    }

    return (
        <div className="h-screen w-screen pt-32">
            <ToastContainer/>
            <h1 className="text-center">Sign Up</h1>
            <div className="w-72 h-44 border border-neutral-900 mx-auto">
                {/* {error ? <div>{error}</div> : null} */}
                <form onSubmit={register}>
                    <input
                        type="email"
                        name="email"
                        className="border border-neutral-900 mx-6 mt-6"
                        value={email}
                        placeholder="Your Email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        name="password"
                        className="border border-neutral-900 mx-6 mt-2"
                        value={password}
                        placeholder="Your Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="ml-20 bg-neutral-900 hover:bg-green-700 focus:border focus:border-blue-900 text-neutral-50">Submit</button>
                </form>
                <p className="text-sm opacity-70 mt-4 ml-4">already registered? <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default Signup