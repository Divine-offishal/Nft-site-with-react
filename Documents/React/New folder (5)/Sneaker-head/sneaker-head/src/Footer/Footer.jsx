import React, { useEffect, useRef} from "react";
import { ReactComponent as Logo1} from "../Images/Svg/SneakHeads.svg"
import { ReactComponent as Logo2} from "../Images/Svg/Exclude.svg"
import { IonIcon } from "@ionic/react"
import { logoTwitter } from "ionicons/icons"
import { logoInstagram } from "ionicons/icons"
import { logoFacebook } from "ionicons/icons"

const Footer = (props) => {

    const footerRef = useRef(null)

    useEffect(() => {
        const getTheme = localStorage.getItem("Theme")
        props.setSelected(getTheme)
        if(getTheme !== null && getTheme === "gradTheme" || getTheme === "darkTheme"){
            footerRef.current.className=`md:grid grid-cols-4 ${getTheme} pt-20 pl-10`
        }
        else{
            footerRef.current.className = "md:grid grid-cols-4 bg-blue-50 pt-20 pl-10"
        }
    }, [props.selected])

    return (
        <footer className="md:grid grid-cols-4 bg-blue-50 pt-20 pl-10" ref={footerRef}>
            <div>
                <div className="flex text-center">
                    <Logo2/>
                    <Logo1 className="mt-2 ml-2"/>
                </div>
                <h1 className="font-bold opacity-80 my-2">Create, Sell and enjoy the money</h1>
                <div className="md:text-left text-center">
                    <p className="opacity-70">Follow us</p>
                    <div className="flex mt-2 pl-32">
                        <IonIcon icon={logoTwitter} className="md:mr-2 "/>
                        <IonIcon icon={logoInstagram} className="mx-2 "/>
                        <IonIcon icon={logoFacebook} className="mx-2 "/>
                    </div>
                </div>
            </div>
            <div className="md:text-left text-center ">
                <h1 className="font-bold opacity-80 text-lg py-4">Marketplace</h1>
                <p className="text-sm font-medium opacity-80 py-2">Create</p>
                <p className="text-sm font-medium opacity-80 py-2">Sell</p>
                <p className="text-sm font-medium opacity-80 py-2">Collect</p>
            </div>
            <div className="md:text-left text-center ">
                <h1 className="font-bold opacity-80 text-lg py-4">Company</h1>
                <p className="text-sm font-medium opacity-80 py-2">About us</p>
                <p className="text-sm font-medium opacity-80 py-2">Community Standard</p>
                <p className="text-sm font-medium opacity-80 py-2">Blog</p>
                <p className="text-sm font-medium opacity-80 py-2">Industry</p>
            </div>
            <div className="md:text-left text-center ">
                <h1 className="font-bold opacity-80 text-lg py-4">Help</h1>
                <p className="text-sm font-medium opacity-80 py-2">FAQs</p>
                <p className="text-sm font-medium opacity-80 py-2">Contact us</p>
            </div>
        </footer>
    )
}

export default Footer