import React from "react";


const HeroComp = () => {

    return (
        <div className="mt-8 md:w-1/2 md:pr-8 md:ml-10 ml-2">
                <h1 className="font-extrabold md:text-6xl text-5xl md:mx-0 mx-6 text-center">Create, sell, buy, discover and collect 
                    <div className="bg-gradient-to-r from-pink-400 to-blue-300 text-transparent bg-clip-text md:ml-4">
                        <h1>SneakHeads</h1></div> NFT and arts</h1>
                <p className="font-bold text-xl mt-8 text-center md:ml-6 mx-4">Begin your hoarding journey with the most unique and artistic digital <span className="font-extrabold">ARTS</span> and <span className="font-extrabold">NFTs</span></p>
                <div className="flex mt-10">
                    <button className="btn-primary md:m-0 ml-4">Get Started</button>
                    {/* Remember to get logo from figma design */}
                    <p className="mt-2 md:ml-12 ml-6 text-xl font-medium">See NFTs History</p>
                </div>
                <div className="md:flex mt-8 text-center">
            <div className="mr-12 md:my-0 my-10">
                        <h1 className="md:text-5xl text-6xl font-bold">100k</h1>
                        <p className="text-xl font-medium opacity-70">Artworks</p>
                    </div>
                    {/* Icon goes here */}
                    <div className="mx-12 md:my-0 my-10">
                        <h1 className="md:text-5xl text-6xl font-bold">50k</h1>
                        <p className="text-xl font-medium opacity-70">Artists</p>
                    </div>
                    {/* Icon goes here */}
                    <div className="mx-12 md:my-0 my-10">
                        <h1 className="md:text-5xl text-6xl font-bold">500k</h1>
                        <p className="text-xl font-medium opacity-70">Followers</p>
                    </div>
        </div>
    </div>
    )
}

export default HeroComp