import React from "react";

const Card = (props) => {

    return(
        <div className="bg-neutral-50 w-64 h-auto p-2 ml-6 rounded-md">
            <img src={props.image} className="w-64 h-64 mt-4 md:mx-auto object-cover object-center rounded-md"/>
            <h1 className="text-xl font-medium text-neutral-900">{props.name}</h1>
            <p className="text-md opacity-80 text-neutral-900">{props.btc}</p>
            <p className="text-md opacity-80 text-neutral-900">{props.eth}</p>
        </div>
    )
}

export default Card