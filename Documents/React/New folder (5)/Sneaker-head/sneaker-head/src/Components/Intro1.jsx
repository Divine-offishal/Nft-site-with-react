import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const Intro1 = (props) => {

    const div3Ref = useRef(null)
    const IsInView2 = useInView(div3Ref, { once: true, amount: "some" })


    useEffect(() => {
        const getTheme = localStorage.getItem("Theme")
        props.setSelected(getTheme)
        if(getTheme !== null && getTheme === "gradTheme" || getTheme === "darkTheme"){
            div3Ref.current.className=`px-auto pb-10 ${getTheme}`
        }
        else{
            div3Ref.current.className = `px-auto pb-10 bg-blue-50`
        }
    }, [props.selected])

    return (
        <>
            <div className="px-auto pb-10 bg-blue-50" ref={div3Ref}>
                <h1 className="text-5xl font-bold opacity-80 text-center pt-14 mx-4 mb-10" style={{
                        transform: IsInView2 ? "none" : "translateX(-200px)",
                        opacity: IsInView2 ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}>Trending Auctions just for you</h1>
                <p className="text-xl font-medium text-center mt-2 mx-6" style={{
                        transform: IsInView2 ? "none" : "translateX(200px)",
                        opacity: IsInView2 ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                    }}>A collection of Unimaginable and Unexplainable arts from Sneakheads, made and designed with AI and Sketch</p>
                {/* Logo goes here */}
            
            </div>
        </>
    )
}

export default Intro1