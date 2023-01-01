import React, { useEffect, useRef} from "react";
import { useInView } from "framer-motion";

const Partners = (props) => {

    const partnerRef = useRef(null)
    const IsInView2 = useInView(partnerRef, { once: true, amount: "some" })


    useEffect(() => {
        const getTheme = localStorage.getItem("Theme")
        props.setSelected(getTheme)
        if(getTheme !== null && getTheme === "gradTheme" || getTheme === "darkTheme"){
            partnerRef.current.className=`text-center ${getTheme} pt-20 pb-32`
        }
        else{
            partnerRef.current.className = "text-center bg-blue-50 pt-20 pb-32"
        }
    }, [props.selected])

    return (
        <div className="text-center bg-blue-50 pt-20 pb-32" ref={partnerRef}>
            <h1 className="text-3xl font-bold opacity-80 uppercase">Digital Wallet Partners</h1>
            <div className="text-6xl md:flex items-center justify-center mt-10 pb-10">
                <h1 className="mx-20" style={{
                        transform: IsInView2 ? "none" : "translateX(-200px)",
                        opacity: IsInView2 ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}>luno</h1>
                <h1 className="mx-20" style={{
                        transform: IsInView2 ? "none" : "translateX(200px)",
                        opacity: IsInView2 ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}>Coinbase</h1>
            </div>
        </div>
    )
}

export default Partners