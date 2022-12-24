import React, { useEffect, useRef} from "react";
import Top2Data from "../data/Top2Data";
import IMAGES from "../Images/Images"
import { IonIcon } from "@ionic/react"
import { caretDownOutline } from "ionicons/icons"
import { caretUpOutline } from "ionicons/icons"


const Top2 = (props) => {

    const top2Ref = useRef(null)

    useEffect(() => {
        const getTheme = localStorage.getItem("Theme")
        props.setSelected(getTheme)
        if(getTheme !== null && getTheme === "gradTheme" || getTheme === "darkTheme"){
            top2Ref.current.className=`${getTheme} pt-20`
        }
        else{
            top2Ref.current.className = "bg-blue-50 pt-20"
        }
    }, [props.selected])

    const mapped = Top2Data.map((item, index) => (
        <div key={index} className="flex md:my-2 mt-6">
            <p className="ml-2">{item.id}</p>
            <div className="flex">
                <img src={IMAGES.image19} className="h-10 w-10 rounded-full mx-4"/>
                <div>
                    <h1 className="text-xl font-bold opacity-80">{item.name}</h1>
                    <div className="flex">
                        <p className="font-medium opacity-80">{item.type}</p>
                        <p className="ml-8 font-medium opacity-80">{item.price}</p>
                    </div>
                </div>
                <div className="ml-10 mt-4">
                    <p className={item.red? "text-red-600 font-bold" : "text-green-500 font-bold"}>
                    {item.red?  <IonIcon icon={caretDownOutline}></IonIcon>: <IonIcon icon={caretUpOutline}></IonIcon>}{item.value}</p>
                </div>
            </div>
        </div>
    ))
    
    return (
        <div className="bg-blue-50 pt-20" ref={top2Ref}>
            <h1 className="text-3xl font-bold ml-10 mb-10">
                Our Top Collection
            </h1>
            <div className="md:grid grid-cols-3 grid-rows-4 grid-flow-col lg:ml-20 mx-10">
                {mapped}
            </div>
        </div>
    )
}

export default Top2 