import React from "react";
import {useEffect, useRef } from "react";
import Navbar from "../../Navbar/Navbar";
import Genre from "../subcomponents/Genre";
import Footer from "../../Footer/Footer";

const Page3 = (props) => {

    const newRef = useRef(null)

    useEffect(() => {
        const getTheme = localStorage.getItem("Theme")
        props.setSelected(getTheme)
        if(getTheme !== null && getTheme === "gradTheme" || getTheme === "darkTheme"){
            newRef.current.className=`${getTheme} text-center pt-44 w-screen h-auto pb-10 text-neutral-50`
            // selectRef.current.value = {getTheme}
        }
        else{
            newRef.current.className = "bg-blue-50 text-center pt-44 w-screen h-auto pb-10 text-neutral-900"
        }
    }, [props.selected])


    return (
        <>
        <Navbar
            selected={props.selected}
            setSelected={props.setSelected}
            clicked={props.clicked}
            setClicked={props.setClicked}/>
            <div className="text-center pt-44 w-auto " ref={newRef}>
                <h1 className="text-5xl font-bold">Genres</h1>
                <div className="md:flex md:px-0 pl-10 pt-6">
                    <Genre 
                        selected={props.selected}
                        text="Apes"/>
                    <Genre 
                        selected={props.selected}
                        text="Celebrities"/>
                </div>
                <div className="md:flex my-6 md:px-0 pl-10">
                    <Genre 
                        selected={props.selected}
                        text="Cars"/>
                    <Genre 
                        selected={props.selected}
                        text="Abstract"/>
                </div>
                <div className="md:flex my-6 md:px-0 pl-10">
                    <Genre 
                        selected={props.selected}
                        text="Sneaks"/>
                    <Genre 
                        selected={props.selected}
                        text="Song Covers"/>
                </div>
                <div className="md:flex my-6 md:px-0 pl-10">
                    <Genre 
                        selected={props.selected}
                        text="Art"/>
                    <Genre 
                        selected={props.selected}
                        text="Brands"/>
                </div>
            </div>
            <Footer
                selected={props.selected}
                setSelected={props.setSelected}/>
        </>
    )
}

export default Page3