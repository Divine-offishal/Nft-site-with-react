import React, { useEffect, useRef} from "react";
import DisData from "../data/DisData"


const Discover = (props)=> {

    const discRef = useRef(null)
    
    const mapped = DisData.map((item, index) => (
        <div key={index} className="h-auto lg:w-46 w-auto bg-neutral-50 md:mx-4 ml-6 mt-4 xl:p-0 p-4 p-2 shrink-0 rounded-lg text-neutral-900">
            <img src={item.image} alt="NFT image" className="w-64 h-64 mt-4 md:mx-auto object-cover object-center rounded-md"/>
            <h1 className="font-bold ml-4 my-2">{item.name}</h1>
            <p className="font-medium opacity-80 text-sm ml-4">{item.eth}</p>
            <p className="font-medium opacity-80 text-sm ml-4">{item.btc}</p>
            <button className="h-6 w-20 text-sm font-medium lg:ml-44 md:ml-32 bg-neutral-900 text-neutral-50 rounded-xl text-center mb-2 text-opacity-80 focus:border-2 focus:border-blue-400">Place a Bid</button>
        </div>
    ))

    useEffect(() => {
        const getTheme = localStorage.getItem("Theme")
        props.setSelected(getTheme)
        if(getTheme !== null && getTheme === "gradTheme" || getTheme === "darkTheme"){
            discRef.current.className=`${getTheme}`
            // selectRef.current.value = {getTheme}
        }
        else{
            discRef.current.className = "bg-blue-50"
        }
    }, [props.selected])

    return (
        <div className="bg-blue-50" ref={discRef}>
            <h1 className="text-3xl font-medium ml-10 pt-20">Discover</h1>
            <div className="flex align-center justify-center mt-6">
                <h3 className="md:ml-20 ml-4 font-medium">Category</h3>
                <h3 className="md:ml-10 ml-4 font-medium md:block hidden">Collection</h3>
                <h3 className="md:ml-10 ml-4 font-medium">Price Range</h3>
                <select className="md:ml-auto md:mr-10 ml-4 outline-none md:py-2 font-medium">
                    <option value="">Filter</option>
                    <option value="category">Category</option>
                    <option value="collection">Collection</option>
                    <option value="price range">Price Range</option>
                </select>
            </div>
            <div className="md:grid xl:grid-cols-4 md:grid-cols-3 xl:grid-rows-3 md:grid-rows-4 mt-8 pb-6 mx-2 flex overflow-x-auto">
                {mapped}
            </div>
        </div>
    )
}

export default Discover