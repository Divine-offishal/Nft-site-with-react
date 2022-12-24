import React, { useState } from "react";
import { ReactComponent as Logo1} from "../Images/Svg/SneakHeads.svg"
import { ReactComponent as Logo2} from "../Images/Svg/Exclude.svg"
import { IonIcon } from "@ionic/react"
import { reorderThreeOutline } from "ionicons/icons"
import { closeOutline } from "ionicons/icons"
import { useRef } from "react";
import { useEffect } from "react";


const Navbar = (props) => {

    // STATES
    const [open, setOpen] = useState(false)

    // REFS
    const divRef = useRef(null)
    const selectRef = useRef(null)

    useEffect(() => {
        // get items from local storage
        const getTheme = localStorage.getItem("Theme")
        props.setSelected(getTheme)

        //loop run to change className of refs based on local storage value
        if(getTheme !== null && getTheme === "gradTheme" || getTheme === "darkTheme" || getTheme === "lightTheme"){
            divRef.current.className=`md:flex p-10 ${getTheme} fixed top-0 right-0 left-0 z-30`
            selectRef.current.className= `lg:mx-6 md:mx-2 ${getTheme} h-10`
        }
        else{
            divRef.current.className = `md:flex p-10 ${props.selected} fixed top-0 right-0 left-0 z-30`
        }
        setOpen(false)
    }, [props.selected])

    // function for reversing state boolean value
    const handleClick = () => {
        if(open===true){
            setOpen(false)
        }else{
            setOpen(true)
        }
    }

    // function for setting props.selected state based on select tag current value and saving to local storage
    const handler = (event) => {
        if(event.target.value === "gradTheme" ||event.target.value === "darkTheme" || event.target.value === "lightTheme" ){
            localStorage.setItem("Theme", event.target.value)
            props.setSelected(event.target.value)
        }
    }

    return (
        <nav className="md:flex p-10 bg-gradient-to-l from-blue-200 via-slate-50 to-neutral-50 fixed top-0 right-0 left-0 z-30" ref={divRef}>
            {/* SVGS goes here*/}
            <span className="flex">
                <Logo2/>
                <Logo1 className={`mt-2 ml-2 ${props.selected === "gradTheme" && "text-neutral-50"} ${props.selected === "darkTheme" && "text-neutral-50"} ${props.selected === "lightTheme" && "text-neutral-900"}`}/>
            </span>
            {/* button to reverse open state */}
            <span className="fixed top-8 right-4 z-50 text-5xl md:hidden" onClick={handleClick}>
                <IonIcon icon={reorderThreeOutline}></IonIcon>
            </span>

            <div className={`md:flex md:ml-auto font-bold text-lg md:h-0 h-screen w-screen bg-neutral-50 md:mt-0 mt-6 md:border-0 border-2 border-blue-300 z-50 fixed md:top-10 top-[-20px] bottom-0 transition-all ease-in-out duration-300 text-center  ${open ? "right-0": "xl:right-[-600px] lg:right-[-350px] md:right-[-300px] right-[-400px]"} ${props.selected=== "lightTheme" && "text-neutral-900"} ${props.selected === "gradTheme"&& "md:text-neutral-50 text-neutral-900"} ${props.selected === "darkTheme"&& "md:text-neutral-50 text-neutral-900"}`}>
                <span className="absolute top-8 right-4 text-5xl md:hidden" onClick={handleClick}>
                    <IonIcon icon={closeOutline}></IonIcon>
                </span>
                <h2 className="lg:mx-6 md:mx-2 md:my-0 mt-44" onClick={() => setOpen(false)}>Home</h2>
                <h2 className="lg:mx-6 md:mx-2 md:my-0 my-10" onClick={() => setOpen(false)}>Trending</h2>
                <h2 className="lg:mx-6 md:mx-2 md:my-0 my-10" onClick={() => setOpen(false)}>Discover</h2>
                {/* <h2 className="lg:mx-6 md:mx-2">Community</h2> */}
                <select className="lg:mx-6 md:mx-2 bg-blue-50 h-10 md:my-0 my-10" onChange={handler} ref={selectRef} value={props.selected}>
                    <option defaultValue="theme" disabled="true">Theme</option>
                    <option value="lightTheme">Light Theme</option>
                    <option value="gradTheme" className="bg-pink-500">Grad Theme</option>
                    <option value="darkTheme" className="bg-neutral-900 text-neutral-50">Dark Theme</option>
                </select>
                <h2 className="lg:mx-6 md:mx-2 md:my-0 my-10" onClick={() => setOpen(false)}>About Us</h2>
            </div>
        </nav>
    )
}

export default Navbar