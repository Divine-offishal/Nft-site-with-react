import React, { useState } from "react";
import {useEffect, useRef } from "react";
import { IonIcon } from "@ionic/react"
import { closeOutline } from "ionicons/icons"
import { NavLink } from "react-router-dom";
// import { IonIcon } from "@ionic/react"
import { cart } from "ionicons/icons"



const NavItems = (props) => {

    const [value, setValue] = useState(0)

    const selectRef = useRef(null)

    const { open, setOpen, selected, setSelected, clicked, setClicked}= props

    const checker = JSON.parse(localStorage.getItem("cards"))

    useEffect(() => {

        if(checker !== null){
            const lengtharr = checker.length
            setValue(lengtharr)
        }else{
            setValue(0)
        }
    }, [clicked])

    
    useEffect(() => {
        // get items from local storage
        const getTheme = localStorage.getItem("Theme")
        //loop run to change className of refs based on local storage value
        if(getTheme !== null && getTheme === "gradTheme" || getTheme === "darkTheme" || getTheme === "lightTheme"){
            selectRef.current.className= `lg:mx-6 md:mx-2 ${getTheme} h-10`
        }
        setOpen(false)

        console.log(clicked);
    }, [props.selected])

    // function for setting props.selected state based on select tag current value and saving to local storage
    const handler = (event) => {
        if(event.target.value === "gradTheme" ||event.target.value === "darkTheme" || event.target.value === "lightTheme" ){
            localStorage.setItem("Theme", event.target.value)
            props.setSelected(event.target.value)
        }
    }

    const handleClick = () => {
        if(open===true){
            setOpen(false)
        }else{
            setOpen(true)
        }
    }


    return (
        <div className={`md:flex md:ml-auto font-bold text-lg md:h-0 h-screen w-screen bg-neutral-50 md:mt-0 mt-6 md:border-0 border-2 border-blue-300 z-50 fixed md:top-10 top-[-20px] bottom-0 transition-all ease-in-out duration-300 text-center  ${open ? "right-0": "xl:right-[-600px] lg:right-[-350px] md:right-[-300px] right-[-400px]"} ${selected=== "lightTheme" && "text-neutral-900"} ${selected === "gradTheme"&& "md:text-neutral-50 text-neutral-900"} ${selected === "darkTheme"&& "md:text-neutral-50 text-neutral-900"}`}>
                <span className="absolute top-8 right-4 text-5xl md:hidden" onClick={handleClick}>
                    <IonIcon icon={closeOutline}></IonIcon>
                </span>
                <NavLink to="/">
                    <h2 className="lg:mx-6 md:mx-2 md:mt-2 mt-44" onClick={() => setOpen(false)}>Home</h2>
                </NavLink>
                <NavLink to="/trending">
                    <h2 className="lg:mx-6 md:mx-2 md:mt-2 my-10" onClick={() => setOpen(false)}>Trending</h2>
                </NavLink>
                <NavLink to="/discover">
                    <h2 className="lg:mx-6 md:mx-2 md:mt-2 my-10" onClick={() => setOpen(false)}>Discover</h2>
                </NavLink>
                {/* <h2 className="lg:mx-6 md:mx-2">Community</h2> */}
                <select className="lg:mx-6 md:mx-2 bg-blue-50 h-10 md:my-0 my-10" onChange={handler} ref={selectRef}>
                    <option defaultValue="theme" disabled="true">Theme</option>
                    <option value="lightTheme">Light Theme</option>
                    <option value="gradTheme" className="bg-pink-500">Grad Theme</option>
                    <option value="darkTheme" className="bg-neutral-900 text-neutral-50">Dark Theme</option>
                </select>
                <NavLink to="/about">
                    <h2 className="lg:mx-6 md:mx-2 md:mt-2 my-10" onClick={() => setOpen(false)}>About Us</h2>
                </NavLink>
                <NavLink to="/collection">
                    <span className="relative">
                        <IonIcon icon={cart} className="text-4xl"></IonIcon>
                        <div className="absolute top-[-25px] right-[-10px] bg-red-500 text-neutral-50 rounded-full z-40 h-6 w-6">
                            {/* {value} */}
                            {checker===null? 0 : checker.length}
                        </div>
                    </span>
                </NavLink>
            </div>
    )
}

export default NavItems