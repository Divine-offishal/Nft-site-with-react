import React, { useEffect, useRef, useState} from "react";
import DisData from "../data/DisData"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {ReactComponent as Coin1} from "../Images/Svg/Coin1.svg"
import {ReactComponent as Coin2} from "../Images/Svg/Coin2.svg"


const Discover = (props)=> {

    const [test, setTest] = useState(DisData)
    const [newTest, setNewTest] = useState(null)

    const discRef = useRef(null)

    useEffect(() => {
        const getTheme = localStorage.getItem("Theme")
        props.setSelected(getTheme)
        if(getTheme !== null && getTheme === "gradTheme" || getTheme === "darkTheme"){
            discRef.current.className=`${getTheme}`
        }
        else{
            discRef.current.className = "bg-blue-50"
        }
    }, [props.selected])

    const handleClick = (id, e) => {
        const checkLocal = JSON.parse(localStorage.getItem("cards"))
        e.target.disabled = true
        toast.success("Added Successfully")
        if (checkLocal !== null) {
            let search = test.find(item => item.id === id)
            
            let cardArray = [...checkLocal, search]
            localStorage.setItem("cards", JSON.stringify(cardArray))
            props.setClicked(prevClicked=> prevClicked + 1)
        }
        else {
            const search = test.find(item => item.id === id)
            const arrayed = [search]
            localStorage.setItem("cards", JSON.stringify(arrayed))
            props.setClicked(prevClicked=> prevClicked + 1)
        }
    }

    
    const mapped = test.map((item, index) => (
        <div key={index} className="h-auto lg:w-46 w-auto bg-neutral-50 md:mx-4 ml-6 mt-4 xl:p-0 p-4 p-2 shrink-0 rounded-lg text-neutral-900">
            <img src={item.image} alt="NFT image" className="w-64 h-64 mt-4 md:mx-auto object-cover object-center rounded-md"/>
            <h1 className="font-bold ml-4 my-2">{item.name}</h1>
            <div className="flex text-sm ml-4">
                    <Coin1 style={{width: "15px",
                height: "15px"}}/>
                <p className="font-medium opacity-80 ">{item.eth}</p>
            </div>
            <div className="flex ml-4 text-sm">
                <Coin2 style={{width: "15px",
                height: "15px"}}/>
                <p className="font-medium opacity-80 ">{item.btc}</p>
            </div>
            
            
            <button className="disabled:bg-neutral-400 disabled:text-neutral-50 h-6 w-auto px-2 text-sm font-medium lg:ml-44 md:ml-32 bg-neutral-900 text-neutral-50 rounded-xl text-center mb-2 text-opacity-80 focus:border-2 focus:border-blue-400" onClick={(e) => handleClick(item.id, e)} >Place a Bid</button>
        </div>
    ))

    const handleChange = (e) => {
        if(e.target.value === "blue"){
            const searchColor = DisData.filter(item => item.color === "blue")
            setTest(searchColor)
        }else if(e.target.value === "red"){
            const searchColor = DisData.filter(item => item.color === "red")
            setTest(searchColor)
        }else if(e.target.value === "neutral"){
            const searchColor = DisData.filter(item => item.color === "neutral")
            setTest(searchColor)
        }else if(e.target.value === "brown") {
            const searchColor = DisData.filter(item => item.color === "brown")
            setTest(searchColor)
        }else if(e.target.value === "price up"){
            const sortPrice = [...DisData].sort((a, b) => a.btc > b.btc ? -1: 1)
            setTest(sortPrice)
        }else if(e.target.value === "price down"){
            const sortPrice =  [...DisData].sort((a, b) => a.btc > b.btc ? 1: -1)
            setTest(sortPrice)
        }else {
            setTest(DisData)
        }
        
    }

    

    return (
        <div className="bg-blue-50" ref={discRef}>
            <ToastContainer 
                theme="colored"
                position="top-center"
                hideProgressBar="false"
                autoClose="1000"/>
            <h1 className="text-3xl font-medium ml-10 pt-20">Discover</h1>
            <div className="flex mt-6">
                <select className="ml-10 outline-none md:py-2 font-medium text-neutral-900" onChange={handleChange} >
                    <option value="">Filter</option>
                    <option value="all">All</option>

                    <optgroup label="Color">
                        <option value="red">red Type</option>
                        <option value="neutral">Neutral Type</option>
                        <option value="blue">blue Type</option>
                        <option value="brown">brown Type</option>
                    </optgroup>

                    <optgroup label="Price">
                        <option value="price up">Price Up</option>
                        <option value="price down">Price Down</option>
                    </optgroup>
                </select>
            </div>
            <div className="md:grid xl:grid-cols-4 md:grid-cols-3 xl:grid-rows-auto md:grid-rows-auto mt-8 pb-6 mx-2 flex overflow-x-auto">
                {mapped}
            </div>
        </div>
    )
}

export default Discover