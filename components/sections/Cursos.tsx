import React from 'react';
import { Container } from '@/components/shared/Container';
import { Paragraph } from "@/components/shared/Paragraph";

interface TopicItem {
    category: string;
    description: string;
}

const TopicList = ({ topics }: { topics: TopicItem[] }) => (
    <ul className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-6">
        {topics.map((topic, index) => (
            <li
                key={index}
                className="flex flex-col gap-1 p-1 sm:p-2"
            >
                <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-heading-1 shrink-0" />
                    <strong className="text-heading-1 text-sm sm:text-base font-semibold">
                        {topic.category}
                    </strong>
                </div>
                <p className="text-body-custom text-xs sm:text-sm pl-3.5 leading-relaxed opacity-90">
                    {topic.description}
                </p>
            </li>
        ))}
    </ul>
);

const cursosData = [
    {
        id: "bcc",
        title: "Bacharelado em Ciência da Computação",
        description: "Alinhado às diretrizes da SBC e do MEC, combina fundamentação científica e prática intensiva para formar profissionais capazes de criar softwares complexos e soluções de alto impacto.",
        topics: [
            { category: "Desenvolvimento & Software", description: "Arquitetura de sistemas, engenharia de software, aplicações web, mobile e nuvem." },
            { category: "Inteligência Artificial & Dados", description: "Modelos de Machine Learning, ciência de dados e automação inteligente." },
            { category: "Pesquisa & Inovação", description: "Acesso à pós-graduação (Mestrado/Doutorado) e criação de startups de tecnologia." },
        ],
    },
    {
        id: "licenciatura",
        title: "Licenciatura em Computação",
        description: "Une ciência da computação e práticas pedagógicas modernas para formar educadores capazes de integrar tecnologia, robótica e pensamento computacional nas salas de aula.",
        topics: [
            { category: "Docência em Tecnologia", description: "Atuação no Ensino Fundamental, Médio, Técnico e Tecnológico." },
            { category: "Robótica & Programação", description: "Desenvolvimento de projetos educacionais de lógica e robótica." },
            { category: "EdTechs & Gestão", description: "Projetos de inovação pedagógica e consultoria em tecnologia educacional." },
        ],
    },
    {
        id: "ia",
        title: "Bacharelado em Inteligência Artificial",
        badge: "(Em breve)",
        description: "Pioneiro na Região Amazônica (FAETI/UNIR), une ciência de dados e visão ética para desenvolver sistemas inteligentes voltados a desafios locais e globais.",
        topics: [
            { category: "Sistemas Inteligentes & ML", description: "Algoritmos avançados de aprendizado de máquina e IA generativa." },
            { category: "Aplicações Regionais & Bioeconomia", description: "Visão computacional aplicada ao meio ambiente e agricultura de precisão." },
            { category: "Cidades Inteligentes & Saúde", description: "Telemedicina, diagnóstico assistido por IA e gestão urbana." },
        ],
    },
];

export const Cursos = () => {
    return (
        <section id="cursos" className="relative pt-16 lg:pt-24 pb-12">
            <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 pointer-events-none">
                <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-gradient-to-r from-blue-600/80 via-sky-500/50 blur-xl opacity-60 lg:opacity-80 lg:block hidden" />
            </div>

            <Container className="relative z-10 flex flex-col gap-10 lg:gap-12">
                <div className="relative flex flex-col items-start text-left max-w-3xl lg:mx-0 lg:max-w-none lg:w-full">
                    <span className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400">
                        Cursos Ofertados
                    </span>
                    <h1 className="text-heading-1 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
                        Graduações em Computação e{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-500">
                            novidades
                        </span>
                    </h1>
                </div>

                <Paragraph className="text-body-custom text-base md:text-lg leading-relaxed -mt-4">
                    Formações sólidas para quem deseja transformar ideias em inovação real — seja criando softwares do zero, capacitando as próximas gerações ou liderando a revolução em Inteligência Artificial.
                </Paragraph>

                <div className="flex flex-col gap-12 lg:gap-16 w-full mt-2">
                    {cursosData.map((curso) => (
                        <div key={curso.id} className="w-full flex flex-col items-start">
                            <h2 className="text-heading-1 text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                                {curso.title} {" "}
                                {curso.badge && (
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-500 mr-2">
                                        {curso.badge}
                                    </span>
                                )}

                            </h2>

                            <Paragraph className="text-body-custom text-base mt-2 md:text-lg leading-relaxed max-w-4xl">
                                {curso.description}
                            </Paragraph>

                            <div className="w-full mt-2 pt-4 border-t border-box-border/60">
                                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                    Principais Áreas de Atuação:
                                </span>
                                <TopicList topics={curso.topics} />
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Cursos;