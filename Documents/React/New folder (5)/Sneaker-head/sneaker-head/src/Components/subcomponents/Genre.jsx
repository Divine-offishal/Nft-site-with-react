import React from "react";

const Genre = (props) => {

    return (
        <div className={`h-32 md:w-1/2 text-3xl ml-4 mr-20 my-4 rounded-lg hover:bg-green-500 transition-all ease-in-out duration-500 ${props.selected === null && "bg-neutral-50"} ${props.selected === "lightTheme" && "bg-neutral-50"} ${props.selected === "gradTheme" && "shadow-2xl backdrop-blur-lg bg-gradient-to-r from-neutral-900/60 to-neutral-50/40"} ${props.selected === "darkTheme" && "bg-neutral-900 border border-neutral-500"}`}>
            <h1 className="mt-10">{props.text}</h1>
        </div>
    )
}

export default Genre