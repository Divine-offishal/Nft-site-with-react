import React from "react";
import Discover from "../Discover";
import Hero from "../Hero";
import Intro1 from "../Intro1";
import Intro2 from "../Intro2";
import Partners from "../Partners";
import Services from "../Services";
import Top from "../Top";
import Top2 from "../Top2";


const Home = (props) => {

    const {selected, setSelected, clicked, setClicked} = props
    
    return (
        <>
            <Hero
                selected={selected}
                setSelected={setSelected}/>
            <Intro1
                selected={selected}
                setSelected={setSelected}/>
            <Intro2
                selected={selected}
                setSelected={setSelected}/>
            <Top
                selected={selected}
                setSelected={setSelected}/>
            <Discover
                selected={selected}
                setSelected={setSelected}
                clicked={clicked}
                setClicked={setClicked}/>
            <Services
                selected={selected}
                setSelected={setSelected}/>
            <Top2
                selected={selected}
                setSelected={setSelected}/>
            <Partners
                selected={selected}
                setSelected={setSelected}/>
            </>
    )
}

export default Home