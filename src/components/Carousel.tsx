import { animationGalleryData } from "@/lib/data";
import React from "react";

export default function Carousel() {
    return (
        <>
            {animationGalleryData.map((item) => (
                <div
                    className="min-w-[15rem] min-h-[20rem] w-2/5 p-[40px]"
                    key={item.title}
                >
                    <a href={item.link} target="_blank">
                        <img
                            className="w-[60%] h-[60%] rounded-3xl pointer-events-none"
                            src={item.image.src}
                            alt={item.title}
                        />
                    </a>
                    <p className="text-center ml-[-4rem]">{item.title}</p>
                </div>
            ))}
        </>
    );
}
