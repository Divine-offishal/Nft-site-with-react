import React from "react";
import {useEffect, useRef } from "react";
import Genre from "../subcomponents/Genre";

const Page3 = (props) => {

    const newRef = useRef(null)

    useEffect(() => {
        const getTheme = localStorage.getItem("Theme")
        props.setSelected(getTheme)
        if(getTheme !== null && getTheme === "gradTheme" || getTheme === "darkTheme"){
            newRef.current.className=`${getTheme} text-center pt-44 w-screen h-auto pb-10`
            // selectRef.current.value = {getTheme}
        }
        else{
            newRef.current.className = "bg-blue-50 text-center pt-44 w-screen h-auto pb-10"
        }
    }, [props.selected])


    return (
        <div className="text-center pt-44 w-auto " ref={newRef}>
            <h1 className="text-5xl font-bold text-neutral-900">Genres</h1>
            <div className="flex pt-6">
                <Genre 
                    selected={props.selected}
                    text="Apes"/>
                <Genre 
                    selected={props.selected}
                    text="Celebrities"/>
            </div>
            <div className="flex my-6">
                <Genre 
                    selected={props.selected}
                    text="Cars"/>
                <Genre 
                    selected={props.selected}
                    text="Abstract"/>
            </div>
            <div className="flex my-6">
                <Genre 
                    selected={props.selected}
                    text="Sneaks"/>
                <Genre 
                    selected={props.selected}
                    text="Song Covers"/>
            </div>
            <div className="flex my-6">
                <Genre 
                    selected={props.selected}
                    text="Art"/>
                <Genre 
                    selected={props.selected}
                    text="Brands"/>
            </div>
        </div>
    )
}

export default Page3