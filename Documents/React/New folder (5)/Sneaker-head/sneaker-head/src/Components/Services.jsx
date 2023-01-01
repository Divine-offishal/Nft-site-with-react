import React, {useEffect, useRef} from "react";
import { IonIcon } from "@ionic/react";
import { addCircle } from "ionicons/icons"
import ServiceData from "../data/ServiceData";
import { useInView } from "framer-motion";

const Services = (props) => {

    const serviceRef = useRef(null)
    const IsInView2 = useInView(serviceRef, { once: true, amount: "some" })


    useEffect(() => {
        const getTheme = localStorage.getItem("Theme")
        props.setSelected(getTheme)
        if(getTheme !== null && getTheme === "gradTheme" || getTheme === "darkTheme"){
            serviceRef.current.className=`${getTheme} pt-20`
        }
        else{
            serviceRef.current.className = "bg-blue-50 pt-20"
        }
    }, [props.selected])

    const mapped = ServiceData.map((item, index) => (
        <div key={index} className={` h-auto md:w-72 w-auto lg:mx-20 p-4 rounded-lg md:my-0 mt-4 mx-4 ${props.selected === null && "bg-neutral-50"} ${props.selected === "lightTheme" && "bg-neutral-50"} ${props.selected === "gradTheme" && "shadow-2xl backdrop-blur-lg bg-gradient-to-r from-neutral-900/60 to-neutral-50/40"} ${props.selected === "darkTheme" && "bg-neutral-900 border border-neutral-500"}`}>
            <h1 className="text-2xl opacity-90">{item.header}</h1>
            <p className="text-xl opacity-90">{item.para}</p>
        </div>
    ))

    return (
        <div className="bg-blue-50 pt-20" ref={serviceRef}>
            <h1 className="text-center text-3xl font-bold opacity-90 mb-6" style={{
                        transform: IsInView2 ? "none" : "translateY(-200px)",
                        opacity: IsInView2 ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}>ADD, SELL, CREATE</h1>
            <div className="md:flex lg:mx-auto justify-center" style={{
                        transform: IsInView2 ? "none" : "translateX(-200px)",
                        opacity: IsInView2 ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}>
                {mapped}
            </div>
        </div>
    )
}

export default Services