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
}

interface AutoCarouselProps {
    images: CarouselImage[];
    delay?: number;
    className?: string;
    showButtons?: boolean;
}

export const AutoCarousel = ({
                                 images,
                                 delay = 7000,
                                 className = "aspect-video w-full",
                                 showButtons = true,
                             }: AutoCarouselProps) => {
    const [mounted, setMounted] = React.useState(false)

    // Plugin de Autoplay memoizado
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
                className="w-full"
            >
                <CarouselContent>
                    {images.map((img, index) => (
                        <CarouselItem key={index}>
                            <div className="relative w-full overflow-hidden rounded-3xl">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={1200}
                                    height={900}
                                    quality={75}
                                    priority={index === 0}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="h-auto w-full rounded-3xl"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Renderiza as setas APENAS após a montagem no cliente */}
                {mounted && showButtons && images.length > 1 && (
                    <CarouselButtons />
                )}
            </Carousel>
        </div>
    )
}

// Subcomponente isolado para os botões
const CarouselButtons = () => {
    return (
        <>
            <CarouselPrevious className="hidden sm:flex left-4" />
            <CarouselNext className="hidden sm:flex right-4" />
        </>
    )
}