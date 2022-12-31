import React, {useRef} from "react";
import IMAGES from "../../Images/Images";
import { useInView } from "framer-motion";

const HeroComp2 = () => {

    const mot2Ref = useRef(null)
    const IsInView = useInView(mot2Ref, {once: true})

    return (
        <div className="flex ml-auto mr-8 mt-4" ref={mot2Ref}>
                <div className="flex flex-col mt-20 md:ml-0 ml-4" style={{
                        transform: IsInView ? "none" : "translateY(200px)",
                        opacity: IsInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}>
                    <div className="bg-white p-4 m-2 rounded-xl text-neutral-900">
                        <img src={IMAGES.image9}/>
                        <h2 className="font-bold pt-4">Gladiator Head</h2>
                        <ul className="text-sm opacity-80 pt-2">
                            <li>
                                0.0005 ETH
                            </li>
                            <li>
                                0.0005 BTC
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 m-2 rounded-xl text-neutral-900">
                        <img src={IMAGES.image7}/>
                        <h2 className="font-bold pt-4">Travis Head</h2>
                        <ul className="text-sm opacity-80 pt-2">
                            <li>
                                0.0005 ETH
                            </li>
                            <li>
                                0.0005 BTC
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col" style={{
                        transform: IsInView ? "none" : "translateY(-200px)",
                        opacity: IsInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}>
                    <div className="bg-white p-4 m-2 rounded-xl text-neutral-900">
                        <img src={IMAGES.image14}/>
                        <h2 className="font-bold pt-4">Lebby Head</h2>
                        <ul className="text-sm opacity-80 pt-2">
                            <li>
                                0.0005 ETH
                            </li>
                            <li>
                                0.0005 BTC
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 m-2 rounded-xl text-neutral-900">
                        <img src={IMAGES.image5}/>
                        <h2 className="font-bold pt-4">O.G Head</h2>
                        <ul className="text-sm opacity-80 pt-2">
                            <li>
                                0.0005 ETH
                            </li>
                            <li>
                                0.0005 BTC
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default HeroComp2