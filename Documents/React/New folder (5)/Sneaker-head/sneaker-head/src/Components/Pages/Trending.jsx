import React, {useRef, useEffect} from "react";
import Card from "../subcomponents/Card";
import IMAGES from "../../Images/Images";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const Trending = (props) => {

    const trendRef = useRef(null)

    useEffect(() => {
        const getTheme = localStorage.getItem("Theme")
        props.setSelected(getTheme)
        if(getTheme !== null && getTheme === "gradTheme" || getTheme === "darkTheme"){
            trendRef.current.className=`text-center pt-44 w-screen h-auto ${getTheme} text-neutral-50`
        }
        else{
            trendRef.current.className = `text-center pt-44 w-screen h-auto bg-blue-50 text-neutral-900`
        }
    }, [props.selected])

    return (
        <>
            <Navbar
                selected={props.selected}
                setSelected={props.setSelected}
                clicked={props.clicked}
                setClicked={props.setClicked}/>
            <div className="text-center pt-44 " ref={trendRef}>
                <h1 className="text-5xl font-bold mb-10">Check out our highest selling nft</h1>
                <div className="flex justify-center">
                    <Card 
                        name="Trippy Head"
                        eth="0.0002"
                        btc="0.0002"
                        image={IMAGES.image1}/>
                </div>

                <div className="py-6 mx-4">
                    <h1 className="font-medium text-2xl">Description :</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, molestias!</p>
                </div>
            </div>
            <Footer
                selected={props.selected}
                setSelected={props.setSelected}/>
        </>
    )
}

export default Trending