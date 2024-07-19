import { animationGalleryData } from "@/lib/data";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";

export default function CarouselComponent() {
    return (
        <Carousel
            opts={{
                align: "start"
            }}
            className="w-full max-w-sm"
        >
            <CarouselContent>
                {animationGalleryData.map((item, index) => (
                    <CarouselItem
                        key={index}
                        // className="md:basis-1/2 lg:basis-1/2"
                    >
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex justify-center items-center p-6 aspect-square">
                                    <Link href={item.link} target="_blank">
                                        <Image
                                            src={item.image.src}
                                            alt={item.title}
                                            width={500}
                                            height={500}
                                        />
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
