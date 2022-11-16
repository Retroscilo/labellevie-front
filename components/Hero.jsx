"use client"
import Image from "next/image"
import HeroImage from "/public/landing.gif"
import CTA from "@/components/CTA"

const Hero = (props) => {
    return (
        <div className={`w-screen h-screen bg-poudre flex flex-col items-center min-h-[700px]`}>
            <div className={"h-full w-full absolute flex justify-center items-center top-0 overflow-hidden pt-12"}>
                <div className={"w-[120vh] max-w-[700px] relative"}>
                    <Image
                        src={HeroImage}
                        priority
                        quality={75}
                        sizes="(max-width: 768px) 100vw,
                              (max-width: 1200px) 50vw,
                              33vw"
                        alt={"Tarot cards"}
                        style={{zIndex: "0"}}
                    />
                </div>
            </div>
            <div className={"absolute top-[15vh]"}>
                <div className={"w-fit -rotate-6 -translate-x-12"}>
                    <h2 className={"text-titles text-3xl w-fit mx-[10px]"}>adieu divination,</h2>
                    <div className={"bg-highlight h-[2px] animate-[expand_.7s] relative top-[-17px] origin-left"}/>
                </div>
                <h2 className={"text-titles text-3xl font-bold -rotate-6 translate-x-12"}>bonjour
                    intuition !</h2>
            </div>
            <div className={"absolute bottom-1/3"}>
                <CTA
                    content={"Découvrir"}
                    type={"secondary"}
                    size={"L"}
                />
            </div>
        </div>
    )
}

export default Hero