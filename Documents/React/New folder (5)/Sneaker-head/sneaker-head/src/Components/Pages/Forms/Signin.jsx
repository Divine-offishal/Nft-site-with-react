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
        toast.loading("loading.....", {autoClose:1000})
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            toast.success("Logged in")
        })
        .then((userCredential) => {
            navigate("/home")
        })
        .catch((error) => {
            console.log(error);
            toast.error(error)
            if(error.code === "auth/wrong-password"){
                toast.error("Please check the password")
            }
            if(error.code === "auth/user-not-found"){
                toast.error("Please check the Email")
            }
            if(error.code === "auth/email-already-in-use"){
                toast.error("Please login, Email in use")
            }
        })
    }

    const dismiss = () => toast.dismiss()
    

    return (
        <div className="h-screen w-screen pt-44 bg-blue-50">
            <ToastContainer 
                theme="colored"
                position="top-center"
                hideProgressBar="false"
                autoClose="2000"/>
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
                        onClick={dismiss}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        name="password"
                        className="border border-neutral-900 mx-6 mt-6 rounded-md"
                        value={password}
                        placeholder="Your Password"
                        required
                        onClick={dismiss}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="ml-20 bg-neutral-900 hover:bg-green-700 focus:border focus:border-blue-900 text-neutral-50 rounded-md p-2 mt-4">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login