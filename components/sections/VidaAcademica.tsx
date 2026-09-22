import React from 'react';
import { Container } from "@/components/shared/Container";
import { Paragraph } from "@/components/shared/Paragraph";
import { AutoCarousel } from "@/components/shared/AutoCarousel";

const eventoImages = [
    { src: "/eventos/img-evento-1.jpeg", alt: "Semana da Computação" },
    { src: "/eventos/img-evento-3.jpeg", alt: "Palestra de TI" },
    { src: "/eventos/img-evento-4.jpeg", alt: "Semana da Computação" },
    { src: "/eventos/img-evento-2.jpeg", alt: "Maratona de Programação" },
];

const atleticaImages = [
    { src: "/atletica/img-atletica-1.jpeg", alt: "Treino da Atlética", caption: "Treinos e Campeonatos Universitários" },
    { src: "/atletica/img-atletica-2.jpeg", alt: "Recepção de Calouros", caption: "Recepção e Integração dos Novos Alunos" },
    { src: "/atletica/img-atletica-3.jpeg", alt: "Campeonato de e-Sports", caption: "Torneios de e-Sports e Jogos da Computação" },
    { src: "/atletica/img-atletica-4.jpeg", alt: "Treino da Atlética", caption: "Treinos e Campeonatos Universitários" },
    { src: "/atletica/img-atletica-5.jpeg", alt: "Recepção de Calouros", caption: "Recepção e Integração dos Novos Alunos" },
    { src: "/atletica/img-atletica-6.jpeg", alt: "Campeonato de e-Sports", caption: "Torneios de e-Sports e Jogos da Computação" },
];

const projetoImages = [
    { src: "/projetos/img-projeto-1.jpeg", alt: "Curso de Desenvolvimento Mobile", caption: "Curso de Desenvolvimento Mobile" },
    { src: "/projetos/img-projeto-2.jpeg", alt: "Curso de Desenvolvimento Mobile", caption: "Curso de Desenvolvimento Mobile" },
    { src: "/projetos/img-projeto-3.jpeg", alt: "Curso de Desenvolvimento Mobile", caption: "Curso de Desenvolvimento Mobile" },
];

export const VidaAcademica = () => {
    return (
        <section id="vida-academica" className="relative pt-16 lg:pt-24 pb-16">
            <div className="absolute w-full lg:w-1/2 inset-y-0 lg:left-0 pointer-events-none">
                <span className="absolute left-4 top-12 w-24 h-24 rounded-3xl bg-primary/20 blur-xl opacity-70" />
            </div>

            <Container className="relative z-10 flex flex-col gap-8 lg:gap-16">
                <div className="relative flex flex-col items-start text-left max-w-3xl lg:mx-0 lg:max-w-none lg:w-full">
                    <span className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400">
                        Vida Acadêmica
                    </span>
                    <h1 className="text-heading-1 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
                        Vivências enquanto estudante de{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-500">
                            computação
                        </span>
                    </h1>
                </div>

                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 lg:gap-12 w-full">
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <h2 className="text-heading-1 text-xl sm:text-2xl font-bold mb-2 lg:mb-3">
                            Eventos & Maratonas de Tecnologia
                        </h2>
                        <Paragraph className="text-body-custom text-base md:text-lg leading-relaxed">
                            Participar de congressos e maratonas é a oportunidade de levar projetos desenvolvidos na UNIR para grandes palcos nacionais. Nessas vivências, nossos estudantes apresentam pesquisas, trocam ideias com especialistas do mercado, fazem networking com grandes empresas e colocam o raciocínio lógico à prova sob pressão.
                            <br /><br />
                            Já na Semana da Computação, os alunos assumem o protagonismo tanto na organização, nas aulas e em competições, vivenciando na prática o trabalho em equipe, a liderança e a imersão nas tecnologias mais recentes antes mesmo de se formarem.
                        </Paragraph>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <AutoCarousel images={eventoImages} className="w-full" delay={4000} />
                    </div>
                </div>

                <hr className="border-box-border/60 opacity-50 my-1 lg:my-0" />

                <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-5 lg:gap-12 w-full">
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <h2 className="text-heading-1 text-xl sm:text-2xl font-bold mb-2 lg:mb-3">
                            Desenvolvimento & Projetos Práticos
                        </h2>
                        <Paragraph className="text-body-custom text-base md:text-lg leading-relaxed">
                            Aqui, a teoria se transforma em código e soluções reais. Ao participar dos projetos de extensão e desenvolvimento do curso, você trabalha em equipes alinhadas aos padrões do mercado, construindo sistemas, bancos de dados e aplicações que resolvem problemas concretos da sociedade e de instituições.
                            <br /><br />
                            Mais do que acumular conhecimento técnico, estar envolvido em projetos fortalece seu portfólio no GitHub, ensina arquitetura de software, controle de versão em Git e coloca você passos à frente nos processos seletivos de tecnologia.
                        </Paragraph>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <AutoCarousel images={projetoImages} className="w-full" delay={4500} />
                    </div>
                </div>

                <hr className="border-box-border/60 opacity-50 my-1 lg:my-0" />

                {/* Bloco 3: Atlética Titânica & Integração */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 lg:gap-12 w-full">
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <h2 className="text-heading-1 text-xl sm:text-2xl font-bold mb-2 lg:mb-3">
                            Atlética Titânica & Integração
                        </h2>
                        <Paragraph className="text-body-custom text-base md:text-lg leading-relaxed">
                            A Atlética Titânica do curso é o coração da integração acadêmica. Ela une os estudantes através de treinos esportivos, torneios universitários, campeonatos de e-sports e eventos sociais de recepção aos calouros.
                            <br /><br />
                            Além de vestir a camisa do curso, fazer parte da Titânica desenvolve liderança, trabalho em equipe e constrói amizades que duram para além da universidade.
                        </Paragraph>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <AutoCarousel images={atleticaImages} className="w-full" delay={5000} />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default VidaAcademica;