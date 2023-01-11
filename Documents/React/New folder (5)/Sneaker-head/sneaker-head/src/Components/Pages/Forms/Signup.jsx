import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase"
// import { useAuthState} from "react-firebase-hooks/auth"
import { useRef,  useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth"
import {toast, ToastContainer} from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"



const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate()
    const divRef = useRef()

    useEffect(() => {
        divRef.current.className = "opacity-0"
    }, [])

    const register = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            toast.success("Sign in successful")
        })
        .then(() => {
            navigate("/login")
        })
        .catch((error) => {
            console.log(error);
            // toast.error(error)
            if(error.code === "auth/email-already-in-use"){
                toast.error("Please login, Email in use")
            }
        })
    }

    return (
        <div className="h-screen w-screen pt-44 z-50 bg-blue-50">
            <ToastContainer 
                theme="colored"
                position="top-center"
                hideProgressBar="false"
                autoClose="2000"/>
            <h1 className="text-center">Sign Up</h1>
            <div className="w-72 h-56 border border-neutral-900 mx-auto bg-neutral-50 rounded-lg">
                {/* {error ? <div>{error}</div> : null} */}
                <form onSubmit={register}>
                    <div ref={divRef}>

                    </div>
                    <input
                        type="email"
                        name="email"
                        className="border border-neutral-900 mx-6 mt-6 rounded-md"
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
                <p className="text-sm opacity-70 mt-4 ml-4">already registered? <Link to="/login"><span className="text-red-700">Login</span></Link></p>
            </div>
        </div>
    )
}

export default Signup