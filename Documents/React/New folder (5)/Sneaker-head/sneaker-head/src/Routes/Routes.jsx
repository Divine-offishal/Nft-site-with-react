import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Pages/Home";
import Trending from "../Components/Pages/Trending";
import Page3 from "../Components/Pages/Page3";
import Aboutus from "../Components/Pages/Aboutus";
import Collection from "../Components/Pages/Collection";

const PageRoutes = (props) => {

    const {selected, setSelected, clicked, setClicked} = props

    return (
        <Routes>
            <Route path="/" element={<Home 
                                        selected={selected}
                                        setSelected={setSelected}
                                        clicked={clicked}
                                        setClicked={setClicked}/>}/>
            <Route path="/trending" element={<Trending
                                        selected={selected}
                                        setSelected={setSelected}/>}/>
            <Route path="/discover" element={<Page3
                                        selected={selected}
                                        setSelected={setSelected}/>}/>
            <Route path="/about" element={<Aboutus/>}/>
            <Route path="/collection" element={<Collection
                                            clicked={clicked}
                                            setClicked={setClicked}
                                            selected={selected}
                                            setSelected={setSelected}/>}/>
        </Routes>
    )
}

export default PageRoutes