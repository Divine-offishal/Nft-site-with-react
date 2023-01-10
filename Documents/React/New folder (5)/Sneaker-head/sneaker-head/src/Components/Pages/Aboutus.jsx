import React from "react";
import { useRef, useEffect } from "react";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

const Aboutus = (props) => {

    const {selected, setSelected, clicked, setClicked} = props
    const aboutRef = useRef(null)

    useEffect(() => {
        const getTheme = localStorage.getItem("Theme")
        setSelected(getTheme)
        if (getTheme === "gradTheme" || getTheme === "darkTheme") {
            aboutRef.current.className = `text-center pt-44 w-screen h-screen ${getTheme}`
        }else{
            aboutRef.current.className = "text-center pt-44 w-screen h-screen bg-blue-50"
        }

        // if (getTheme === "gradTheme") {
        //     mappedRef.current.className = ""
        // }
    }, [selected])

    return (
        <>
        <Navbar
            selected={selected}
            setSelected={setSelected}
            clicked={clicked}
            setClicked={setClicked}/>
            <div className="text-center pt-44 w-screen h-screen text-5xl " ref={aboutRef}>
                <h1 className="text-5xl font-bold">About Us</h1>
                <p className="text-md font-bold mx-10 pt-10">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis dolorum in doloribus temporibus quibusdam architecto illum molestias nam exercitationem adipisci reiciendis, ipsum est impedit? Ex, veritatis incidunt! Rerum dignissimos natus obcaecati qui possimus assumenda soluta amet nihil? Aut quae temporibus sint nostrum adipisci obcaecati quis, repellat, quaerat corporis porro nemo quos earum molestias dignissimos totam quam ipsum dolor necessitatibus tempore vero ea molestiae rerum debitis. Facilis sapiente officiis dolores, nemo corrupti in, nihil adipisci consequuntur, vero corporis magnam? Totam explicabo saepe dicta voluptatum eos voluptatibus amet, esse minus reprehenderit officia earum impedit molestiae, nihil fuga nostrum veritatis, libero iusto praesentium.
                </p>
            </div>
            <Footer
                selected={selected}
                setSelected={setSelected}/>
        </>
    )
}

export default Aboutus