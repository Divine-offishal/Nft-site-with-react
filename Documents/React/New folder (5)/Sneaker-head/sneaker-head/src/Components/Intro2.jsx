import React, { useEffect, useRef } from "react";
import IMAGES from "../Images/Images";

const Intro2 = (props) => {

    const div4Ref = useRef(null)
    const innerRef = useRef(null)

    useEffect(() => {
        const getTheme = localStorage.getItem("Theme")
        if(getTheme !== null && getTheme === "gradTheme" || getTheme === "darkTheme"){
            div4Ref.current.className=`${getTheme} relative`
        }
        else{
            div4Ref.current.className = "bg-blue-50 relative"
        }

        if(getTheme === "gradTheme"){
            innerRef.current.className = "mx-8 lg:flex shadow-2xl backdrop-blur-lg bg-gradient-to-r from-neutral-900/60 to-neutral-50/40"
        }else if(getTheme === "darkTheme"){
            innerRef.current.className = "bg-neutral-900 border border-neutral-500 mx-8 lg:flex"
        }else {
            innerRef.current.className = "bg-neutral-50 mx-8 lg:flex"
        }
    }, [props.selected])

    // className="bg-neutral-50 mx-8 lg:flex"

    return (
        <div className="bg-blue-50 relative" ref={div4Ref}>
            <div className="mx-8 lg:flex" ref={innerRef}>
                <div className="lg:w-1/2 pt-14 ml-6" >
                    <h1 className="text-3xl font-bold">INTRODUCING OUR LATEST COLLECTIONS</h1>
                    <p className="font-medium text-xl my-4">Be the first to discover our latest collections of art from top artists and bid at an affordable rate</p>
                    <button className="btn-primary mt-4">Explore</button>
                </div>
                {/* Images goes here */}
                <div className="lg:w-1/2 xl:ml-44 lg:ml-32 md:mx-32 ml-6 mt-4">
                    <div className="md:flex ">
                        <img src={IMAGES.image20} className="md:mt-10 md:mb-0 mr-4 md:h-auto h-64 my-8"/>
                        <img src={IMAGES.image21} className="self-start md:mb-0 md:mt-4 mr-4 md:h-auto h-64 my-8"/>
                        <img src={IMAGES.image22} className="self-start md:mb-0 md:h-auto h-64 md:my-0 my-8"/>
                    </div>
                    <div className="md:flex hidden">
                        <img src={IMAGES.image27} className="ml-10 mt-10 mr-4"/>
                        <img src={IMAGES.image26} className="mt-4 self-start mr-4"/>
                        <img src={IMAGES.image23} className="self-start"/>
                    </div>
                    <div className="md:flex hidden ">
                        <img src={IMAGES.image24} className="ml-20 mt-10 mr-4"/>
                        <img src={IMAGES.image25} className="mt-4 self-start mr-4"/>
                        <img src={IMAGES.image19} className="self-start"/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Intro2