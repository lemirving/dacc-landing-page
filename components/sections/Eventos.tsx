import React from 'react'
import { Container } from "@/components/shared/Container"
import { Paragraph } from "@/components/shared/Paragraph"
import { AutoCarousel } from "@/components/shared/AutoCarousel"

const eventImages = [
    {
        src: "/maratona/img-5.jpeg",
        alt: "Maratona de Programação 1",
    },
    {
        src: "/maratona/img-7.jpeg",
        alt: "Maratona de Programação 2",

    },
    {
        src: "/maratona/img-8.jpeg",
        alt: "Maratona de Programação 3",
    },
    {
        src: "/maratona/img-3.jpeg",
        alt: "Maratona de Programação 3",
    },
    {
        src: "/maratona/img-4.jpeg",
        alt: "Maratona de Programação 4",
    },
    {
        src: "/maratona/img-1.jpeg",
        alt: "Maratona de Programação 5",
    },
    {
        src: "/maratona/img-6.jpeg",
        alt: "Maratona de Programação 6",
    },
    {
        src: "/maratona/img-2.jpeg",
        alt: "Maratona de Programação 7",
    },
];

export const Eventos = () => {
    return (
        <section id="eventos" className="relative pt-16 lg:pt-30">

            <div className="absolute w-full lg:w-1/2 inset-y-0 lg:left-0 pointer-events-none">
                <span className="absolute left-4 top-12 w-24 h-24 rounded-3xl bg-primary/20 blur-xl opacity-70" />
            </div>

            <Container className="relative z-10 flex flex-col gap-10 lg:gap-12">

                <div className="relative flex flex-col items-start text-left lg:py-4 max-w-3xl lg:mx-0 lg:max-w-none lg:w-full">
                    <span className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400">
                        Eventos, congressos, maratonas e mais
                    </span>

                    <h1 className="text-heading-1 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
                        Experiências que marcam a{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-500">
                            graduação
                        </span>
                    </h1>

                    <div className="flex flex-col mt-6 items-start gap-8 lg:gap-10 w-full">
                        <Paragraph className="text-body-custom text-base md:text-lg leading-relaxed">
                            A vivência na universidade vai muito além da sala de aula: ela acontece no ecossistema de eventos e desafios práticos que movimentam o curso ao longo do ano.
                            <br /><br />
                            Nossos alunos testam suas habilidades em <strong>Maratonas de Programação</strong> da Sociedade Brasileira de Computação (SBC) e participam dos principais <strong>Congressos de TI</strong> do país, apresentando pesquisas e criando conexões com o mercado.
                            <br /><br />
                            O grande destaque é a tradicional <strong>Semana da Computação da UNIR</strong> (antiga INFOUNIR), um encontro científico e cultural com palestras, minicursos e e-sports que aborda tendências como IA, Ciência de Dados e Inovação.
                        </Paragraph>

                        <div className="w-full max-w-3xl mx-auto mt-4">
                            <AutoCarousel images={eventImages} />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Eventos;