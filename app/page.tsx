import Image from "next/image";
import { Hero } from "@/components/sections/Hero"
import { Cursos } from "@/components/sections/Cursos"
import { Projetos } from "@/components/sections/Projetos"
import { Eventos } from "@/components/sections/Eventos"
import { VidaAcademica } from "@/components/sections/VidaAcademica"

export default function Home() {
    return (
        <main className="px-6 sm:px-8 md:px-12 w-full overflow-x-hidden">
            <Hero />
            <Cursos />
            <Projetos />
            <Eventos />
            <VidaAcademica />
        </main>
    );
}