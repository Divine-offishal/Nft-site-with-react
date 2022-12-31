import React, { useState } from "react";
import { ReactComponent as Logo1} from "../Images/Svg/SneakHeads.svg"
import { ReactComponent as Logo2} from "../Images/Svg/Exclude.svg"
import { IonIcon } from "@ionic/react"
import { reorderThreeOutline } from "ionicons/icons"
import { useRef } from "react";
import { useEffect } from "react";
import NavItems from "./Navitems";


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
            divRef.current.className =`md:flex p-10 ${getTheme} fixed top-0 right-0 left-0 z-30`
        }
        else{
            divRef.current.className = `md:flex p-10 bg-gradient-to-l from-blue-200 via-slate-50 to-neutral-50 fixed top-0 right-0 left-0 z-30`
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

            <NavItems
                open={open}
                setOpen={setOpen}
                selected={props.selected}
                setSelected={props.setSelected}
                clicked={props.clicked}
                setClicked={props.setClicked}/>
        </nav>
    )
}

export default Navbar