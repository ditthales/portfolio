import Experience from "./Experience"

const Experiences = () => {
    return(
        <div className="flex flex-col gap-[10px] max-w-[382px]">
            <h2 className="text-[18px] text-[#464444] font-semibold">Experiências</h2>
            <Experience/>
            <p className="text-[12px]">Projetos relacionados:
                <a href="" className=" text-[#2E64C1] underline"> witchie</a>,
                <a href="" className=" text-[#2E64C1] underline"> In a Sheet of Paper</a>,
                <a href="" className=" text-[#2E64C1] underline"> Naturia</a>
            </p>
            <p className="text-[12px]">Atividades realizadas:</p>
            <ul className="list-disc list-inside">
                <li className="text-[12px]">Desenvolvimento de aplicações iOS usando a linguagem Swift e seus frameworks.</li>
                <li className="text-[12px]">Trabalho com equipes multidisciplinares.</li>
                <li className="text-[12px]">Experiência em design e inovação</li>
                <li className="text-[12px]">Trabalho com metodologias ágeis.</li>
                <li className="text-[12px]">Versionamento e organização (Git e GitHub)</li>
                <li className="text-[12px]">Publicação de aplicativos na App Store</li>
                <li className="text-[12px]">Monetização de aplicações</li>
                <li className="text-[12px]">Internacionalização de aplicações</li>
                <li className="text-[12px]">Marketing de aplicações na App Store</li>
            </ul>
        </div>
    )
}

export default Experiences