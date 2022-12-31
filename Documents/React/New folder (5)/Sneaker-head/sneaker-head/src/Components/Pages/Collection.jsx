import React, { useEffect, useState, useRef } from "react";
import Card from "../subcomponents/Card";


const Collection = (props) => {

    const [card, setCard] = useState([])
    const { clicked, setClicked, selected, setSelected } = props
    const collectRef = useRef(null)

    useEffect(() => {
        const getItems = JSON.parse(localStorage.getItem("cards"))
        setCard(getItems)

    }, [])

    useEffect(() => {
        const getTheme = localStorage.getItem("Theme")
        setSelected(getTheme)
        if (getTheme === "gradTheme" || getTheme === "darkTheme") {
            collectRef.current.className = `min-h-screen mt-32 ${getTheme} text-neutral-50`
        }else{
            collectRef.current.className = "min-h-screen mt-32 bg-blue-50"
        }

        // if (getTheme === "gradTheme") {
        //     mappedRef.current.className = ""
        // }
    }, [selected])

    const deleted = (id) => {

        const checklocal = JSON.parse(localStorage.getItem("cards"))
        const check = checklocal.filter(item => item.id !== id)
        localStorage.setItem("cards", JSON.stringify(check))
        setCard(check)
        setClicked(prevClicked=> prevClicked + 1)
        if(card.length === 1){
            localStorage.removeItem("cards")
            window.location.reload()
        }
    }

    
    if (card !== null){
        const mapped = card.map((item, index) => (
            <div key={index} className={`w-screen h-auto py-6 my-4 flex ${selected === "gradTheme" && "shadow-2xl backdrop-blur-lg bg-gradient-to-r from-neutral-900/60 to-neutral-50/40"} ${selected === "darkTheme" && "bg-neutral-900 border border-neutral-500"} ${selected === "lightTheme" || selected === null && "bg-neutral-50"}`}>
                <Card 
                    image={item.image}
                    btc={item.btc}
                    eth={item.eth}
                    name={item.name}/>

                {/* <div ref={collectRef}>
                    <h1>{bidMap}</h1>
                </div> */}

                <div className="ml-10">
                    <div className="mt-2">
                        <button className="h-auto w-32 p-2 bg-neutral-900 text-neutral-50 mr-10 rounded-md border-2 border-neutral-50 hover:bg-green-500 transition-all ease-in-out duration-500">Bid</button>
                    </div>
                    <div className="my-4">
                        <button className="h-auto w-32 p-2 bg-neutral-900 text-neutral-50 mr-10 rounded-md border-2 border-neutral-50 hover:bg-green-500 transition-all ease-in-out duration-500">Buy</button>
                    </div>
                    <div className="my-4">
                        <button className="h-auto w-32 p-2 bg-neutral-900 text-neutral-50 rounded-md border-2 border-neutral-50 hover:bg-green-500 transition-all ease-in-out duration-500" onClick={() => deleted(item.id)}>Delete Card</button>
                    </div>
                        
                </div>
            </div>
        ))
        return (
            <div className="min-h-screen pt-32" ref={collectRef}>
                <h1 className="text-neutral-900 text-center text-4xl font-bold">Bid</h1>
                {mapped}
            </div>
        )

    }
    else {
        return (
            <div className="h-screen text-neutral-900 text-center pt-32">
                <h1 className=" text-4xl font-bold">Collection</h1>
                <p className="pt-56">There is nothing here...</p>
            </div>
        )
    }
}

export default Collection