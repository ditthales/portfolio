
import { useEffect, useState } from "react";
import MacMenu from "../2. Sections/1. MacMenu/MacMenu";
import AboutMe from "../2. Sections/2. AboutMe/AboutMe";
import Projects from "../2. Sections/3. Projects/Projects";
import CV from "../2. Sections/4. CV/CV";
import ContactMe from "../2. Sections/6. ContactMe/ContactMe";
import Feedbacks from "../2. Sections/5. Feedbacks/Feedbacks";



const Content = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
    // Função para atualizar a largura da tela quando a janela for redimensionada
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Adicione um ouvinte de evento de redimensionamento quando o componente for montado
    window.addEventListener("resize", handleResize);

    // Remova o ouvinte de evento quando o componente for desmontado para evitar vazamentos de memória
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    }, []);

    const containerStyle = {
        paddingLeft: `${Math.floor((90 / 1024 * 100))}%`,
        paddingRight: `${Math.floor((90 / 1024 * 100))}%`, // Use a porcentagem de padding
    };

    const fixedStyle = {
      maxWidth: "1280px", // Defina a largura máxima desejada
      margin: "0 auto", // Centralize o conteúdo
    };

    return(
        <div className=" flex flex-col gap-[80px] w-full items-start" style={windowWidth > 1440 ? fixedStyle : containerStyle}>
            <div className="w-full" id="menu"><MacMenu windowWidth={windowWidth}/></div>
            <div id="about"><AboutMe windowWidth={windowWidth} /></div>
            <div id="portfolio" className="w-full"><Projects /></div>
            <div id="cv" className="w-full"><CV windowWidth={windowWidth} /></div>
            <div id="feedbacks" className="w-full"><Feedbacks windowWidth={windowWidth} /></div>
            <div id="fale" className="w-full"><ContactMe /></div>
        </div>
    )
}

export default Content;