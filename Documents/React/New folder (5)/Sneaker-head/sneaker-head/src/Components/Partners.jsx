import React, { useEffect, useRef} from "react";

const Partners = (props) => {

    const partnerRef = useRef(null)

    useEffect(() => {
        const getTheme = localStorage.getItem("Theme")
        props.setSelected(getTheme)
        if(getTheme !== null && getTheme === "gradTheme" || getTheme === "darkTheme"){
            partnerRef.current.className=`text-center ${getTheme} pt-20 pb-32`
        }
        else{
            partnerRef.current.className = "text-center bg-blue-50 pt-20 pb-32"
        }
    }, [props.selected])

    return (
        <div className="text-center bg-blue-50 pt-20 pb-32" ref={partnerRef}>
            <h1 className="text-3xl font-bold opacity-80 uppercase">Digital Wallet Partners</h1>
            <div className="text-6xl md:flex items-center justify-center mt-10 pb-10">
                <h1 className="mx-20">luno</h1>
                <h1 className="mx-20">Coinbase</h1>
            </div>
        </div>
    )
}

export default Partners