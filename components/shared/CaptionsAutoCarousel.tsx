"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export interface CarouselImage {
    src: string;
    alt: string;
    caption?: string;
}

interface CaptionAutoCarouselProps {
    images: CarouselImage[];
    delay?: number;
    className?: string;
    showButtons?: boolean;
}

export const CaptionsAutoCarousel = ({
                                         images,
                                         delay = 3000,
                                         className = "w-full",
                                         showButtons = true,
                                     }: CaptionAutoCarouselProps) => {
    const [mounted, setMounted] = React.useState(false)

    const autoplayPlugin = React.useMemo(
        () => Autoplay({ delay, stopOnInteraction: false, stopOnMouseEnter: true }),
        [delay]
    )

    React.useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className="w-full relative">
            <Carousel
                plugins={mounted ? [autoplayPlugin] : []}
                className={`w-full ${className}`}
            >
                <CarouselContent>
                    {images.map((img, index) => (
                        <CarouselItem key={index}>
                            <div className="relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    quality={80}
                                    priority={index === 0}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover rounded-2xl"
                                />
                            </div>

                            {img.caption && (
                                <p className="mt-2.5 text-center text-sm sm:text-md font-medium text-muted-foreground">
                                    {img.caption}
                                </p>
                            )}
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {mounted && showButtons && images.length > 1 && (
                    <CarouselButtons />
                )}
            </Carousel>
        </div>
    )
}

const CarouselButtons = () => {
    return (
        <>
            <CarouselPrevious className="hidden sm:flex left-4 border-none bg-background/80 backdrop-blur-sm hover:bg-background" />
            <CarouselNext className="hidden sm:flex right-4 border-none bg-background/80 backdrop-blur-sm hover:bg-background" />
        </>
    )
}