import {Container} from "@/components/shared/Container"
import {Paragraph} from "@/components/shared/Paragraph"
import Image from "next/image"
import {AutoCarousel} from "@/components/shared/AutoCarousel"

const heroImages = [
    { src: "/ccomp.jpeg", alt: "ccomp" },
    { src: "/faeti.jpeg", alt: "faeti" },
]

export const Hero = () => {
    return (
        <section id={"hero"} className={"relative pt-32 lg:pt-36 "}>
            <Container className={"flex flex-col lg:flex-row gap-10 lg:gap-12"}>
                <div className={"absolute w-full lg:w-1/2 inset-y-0 lg:right-0"}>
                    <span className={"absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 " +
                        "rotate-90 skew-x-12 rounded-3xl bg-gradient-to-r from-blue-600/80 via-sky-500/50 " +
                        "blur-xl opacity-60 lg:opacity-80  lg:block hidden" }>

                    </span>
                    <span className={"absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80"}></span>
                </div>

                <div className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start max-w-3xl mx-auto lg:mx-0 lg:max-w-none lg:flex-1 lg:w-1/2">
                    <span className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-600">
                        Coordenação de Ciência da Computação · UNIR
                    </span>
                    <h1 className="text-heading-1 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
                        Abra as portas para o seu futuro na{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-500">
                         computação
                        </span>
                    </h1>
                    <div className="flex flex-col lg:flex-row mt-10 items-center lg:items-start gap-8 lg:gap-12 w-full">
                        <div className="w-full lg:w-1/2 flex flex-col justify-center">
                            <Paragraph className="text-body-custom text-base md:text-lg leading-relaxed">
                                Atuando junto à Universidade Federal de Rondônia, a Coordenação dos Cursos de Ciência da Computação (DACC) integra ensino, pesquisa e extensão para impulsionar o desenvolvimento científico e tecnológico na região.
                                <br /><br />
                                Oferecemos uma formação completa, que abrange tanto os cursos de Bacharelado quanto de Licenciatura, combinando uma sólida fundamentação teórico-prática com a aplicação de soluções computacionais modernas.
                                <br /><br />
                                Nosso compromisso é capacitar profissionais e educadores proativos, pautados por elevados padrões éticos, preparados para se adaptar às constantes transformações da tecnologia e responder às demandas sociais e do mercado de trabalho no contexto amazônico e nacional.
                            </Paragraph>
                        </div>

                        <div className="w-full lg:w-1/2 overflow-hidden rounded-3xl">
                            <AutoCarousel
                                images={heroImages}
                                className="aspect-[4/3] w-full"
                                delay={6000}
                            />
                        </div>
                    </div>
                </div>

            </Container>

        </section>
    )
}