import React from 'react';
import { Container } from '@/components/shared/Container';
import { Paragraph } from "@/components/shared/Paragraph";

const projetosData = [
    {
        sigla: "PIBIC",
        nome: "Iniciação Científica",
        foco: "Pesquisa & Ciência",
        descricao: "Iniciação à pesquisa acadêmica ao lado de professores pesquisadores, com foco na publicação de artigos e preparação para mestrado/doutorado.",
        destaques: [
            "Bolsas de apoio financeiro ao estudante",
            "Publicação em congressos e simpósios de TI",
            "Preparação direta para Pós-Graduação"
        ]
    },
    {
        sigla: "PIBEC",
        nome: "Extensão e Cultura",
        foco: "Comunidade & Impacto Social",
        descricao: "Aplicação do conhecimento acadêmico na comunidade através da criação de sistemas, aplicativos e bancos de dados para atender demandas reais da sociedade.",
        destaques: [
            "Desenvolvimento de software e interfaces reais",
            "Atuação direta com demandas da comunidade local",
            "Vivência prática do ciclo de vida de projetos de TI"
        ]
    },
    {
        sigla: "PIBITI",
        nome: "Desenvolvimento Tecnológico",
        foco: "Inovação & Mercado",
        descricao: "Focado no desenvolvimento de protótipos inovadores, patentes e transferência de tecnologia da universidade para o mercado e ecossistema de startups.",
        destaques: [
            "Criação de protótipos e produtos tecnológicos",
            "Foco em inovação, startups e mercado",
            "Depósito de patentes e registros de software"
        ]
    }
];

export const Projetos = () => {
    return (
        <section id="projetos" className="relative pt-16 lg:pt-24 pb-12">
            <div className="absolute w-full lg:w-1/2 inset-y-0 lg:left-0 pointer-events-none">
                <span className="absolute left-4 top-12 w-24 h-24 rounded-3xl bg-primary/20 blur-xl opacity-70" />
            </div>

            <Container className="relative z-10 flex flex-col gap-10 lg:gap-12">
                <div className="relative flex flex-col items-start text-left max-w-3xl lg:mx-0 lg:max-w-none lg:w-full">
                    <span className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400">
                        Pesquisa, Oportunidades e Prática
                    </span>
                    <h1 className="text-heading-1 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
                        Iniciação{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-500">
                            científica, tecnológica e de extensão
                        </span>
                    </h1>
                </div>

                <Paragraph className="text-body-custom text-base md:text-lg leading-relaxed -mt-4">
                    Nossos alunos participam ativamente de programas de bolsas que combinam pesquisa de ponta, desenvolvimento de software e impacto direto na sociedade.
                </Paragraph>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {projetosData.map((projeto) => (
                        <div
                            key={projeto.sigla}
                            className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-box-bg border border-box-border/80 shadow-xs transition-all hover:border-primary/40"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-2.5 py-1 text-xs font-extrabold tracking-wider uppercase rounded-md bg-sky-100 dark:bg-sky-950 text-primary dark:text-sky-300">
                                        {projeto.sigla}
                                    </span>
                                    <span className="text-xs font-medium text-muted-foreground">
                                        {projeto.foco}
                                    </span>
                                </div>

                                <h2 className="text-heading-1 text-lg sm:text-xl font-bold mb-2">
                                    {projeto.nome}
                                </h2>

                                <p className="text-body-custom text-xs sm:text-sm leading-relaxed mb-6 opacity-90">
                                    {projeto.descricao}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-box-border/60">
                                <span className="text-xs font-semibold text-heading-1 uppercase tracking-wider block mb-2.5 text-muted-foreground">
                                    Diferenciais do programa:
                                </span>
                                <ul className="flex flex-col gap-2">
                                    {projeto.destaques.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-xs text-body-custom">
                                            <span className="text-primary font-bold">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Projetos;