import Graduation from "./Graduation"

const Graduations = () => {
    return(
        <div className="flex flex-col gap-[10px] max-w-[382px]">
            <h2 className="text-[18px] text-[#464444] font-semibold">Educação</h2>
            <Graduation 
                titulo={"Bacharelado em engenharia da computação"}
                school={"Universidade Federal de Pernambuco - UFPE"}
                dates={"out/2023 - previsão: jul/2028"} 
                image={"ufpe.png"} 
                link={"https://www.ufpe.br/engenharia-da-computacao-bacharelado-cin"}/>
            <Graduation 
                titulo={"Bacharelado em ciências da computação"}
                school={"Centro Universitário FAM"}
                dates={"jan/2023 - previsão: dez/2024"} 
                image={"fam.png"} 
                link={"https://www.vemprafam.com.br/cursos/ciencias-da-computacao/"}/>
            <Graduation 
                titulo={"Tecnólogo em análise e desenvolvimento de sistemas"}
                school={"UNINASSAU"}
                dates={"ago/2021 - dez/2022"} 
                image={"nassau.png"} 
                link={"https://graduacao.uninassau.digital/nossos-cursos/superior-de-tecnologia-em-analise-e-desenvolvimento-de-sistemas/85/60/2"}/>
        </div>
    )
}

export default Graduations