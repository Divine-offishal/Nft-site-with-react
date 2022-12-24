import React, { useEffect} from "react";
import { useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import HeroComp from "./subcomponents/HeroComp1";
import HeroComp2 from "./subcomponents/HeroComp2";


const Hero = (props) => {

    // REFS
    const div2Ref = useRef(null)

    useEffect(() => {
        // get items from local storage
        const getTheme = localStorage.getItem("Theme")

        //loop run to change className of refs based on local storage value
        if(getTheme !== null && getTheme === "gradTheme" || getTheme === "darkTheme" || getTheme === "lightTheme"){
            div2Ref.current.className=`md:flex ${getTheme} pt-20`
        }
        else{
            div2Ref.current.className = `md:flex ${props.selected} pt-20`
        }
    }, [props.selected])

    return (
        <div className="md:flex bg-gradient-to-l from-blue-200 via-blue-50 to-neutral-50 pt-20" ref={div2Ref}>
            {/* Letters goes here */}
            <HeroComp/>
        

            {/* Images goes here */}
            <HeroComp2/>
        </div>
    )
}

export default Hero