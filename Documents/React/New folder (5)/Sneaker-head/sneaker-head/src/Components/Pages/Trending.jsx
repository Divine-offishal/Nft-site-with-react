import React from "react";
import Card from "../subcomponents/Card";
import IMAGES from "../../Images/Images";

const Trending = () => {

    return (
        <div className="text-center mt-44 w-screen h-screen ">
            <h1 className="text-5xl font-bold text-neutral-900">Check out our highest selling nft</h1>

            <div className="">
                <Card 
                    name="Trippy Head"
                    eth="0.0002"
                    btc="0.0002"
                    image={IMAGES.image1}/>
            </div>
        </div>
    )
}

export default Trending