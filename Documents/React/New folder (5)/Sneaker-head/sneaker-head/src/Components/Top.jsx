import React, { useEffect, useRef} from "react";
import { TopData } from "../data/TopData";

const Top = (props) => {

    const topRef = useRef(null)

    useEffect(() => {
        const getTheme = localStorage.getItem("Theme")
        props.setSelected(getTheme)
        if(getTheme !== null && getTheme === "gradTheme" || getTheme === "darkTheme"){
            topRef.current.className=`${getTheme}`
            // selectRef.current.value = {getTheme}
        }
        else{
            topRef.current.className = "bg-blue-50"
        }
    }, [props.selected])


    const mapped = TopData.map((item, index) => (
        <div key={index} className= {`
        ${props.selected === "lightTheme" && "bg-neutral-50 h-44 w-72 flex ml-10 rounded-xl lg:my-4"} 
        ${props.selected === "gradTheme" && "shadow-2xl backdrop-blur-lg bg-gradient-to-r from-neutral-900/60 to-neutral-50/40 h-44 w-72 flex ml-10 rounded-xl lg:my-4"
        } ${props.selected === "darkTheme" && "g-neutral-900 border border-neutral-500 h-44 w-72 flex ml-10 rounded-xl lg:my-4"}`}>
            <img src={item.image} className="h-24 mt-10 ml-2"/>
            <div className="mt-12 ml-4">
                <h1 className="text-2xl font-bold opacity-80">{item.name}</h1>
                <p className="font-bold opacity-80">{item.count} Followers</p>
            </div>
        </div>
    ))

    return (
        <div className="bg-blue-50" ref={topRef}>
            <h1 className="py-20 text-3xl font-bold opacity-80 ml-10">Top Artists</h1>
            <div className="xl:flex md:grid grid-cols-2 lg:ml-10 lg:mr-10">
                {mapped}
            </div>
        </div>
    )
}

export default Top