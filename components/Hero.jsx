"use client"
import Image from "next/image"
import HeroImage from "/public/landing.gif"
import CTA from "@/components/CTA"

const Hero = (props) => {
    return (
        <div
            className={`w-screen h-screen bg-poudre`}>
            <p>Hero</p>
            <div className={"h-[700px] w-[500px] relative"}>
                <Image
                    src={HeroImage}
                    fill
                    style={{objectFit: "contain"}}
                    priority
                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
                    alt={"Tarot cards"}
                />
            </div>
            <div>{props.children}</div>
            <CTA
                content={"Découvrir"}
                type={"secondary"}
                size={"L"}
            />
        </div>
    )
}

export default Hero