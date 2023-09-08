
import { useEffect, useState } from "react";
import MacMenu from "../Sections/MacMenu/MacMenu";
import AboutMe from "../Sections/AboutMe/AboutMe";
import Projects from "../Sections/Projects/Projects";
import ContactMe from "../Sections/ContactMe/ContactMe";


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

    return(
        <div className=" flex flex-col gap-[80px] w-full items-start" style={containerStyle}>
            <div className="w-full" id="menu"><MacMenu windowWidth={windowWidth}/></div>
            <div id="about"><AboutMe windowWidth={windowWidth} /></div>
            <div id="portfolio" className="w-full"><Projects /></div>
            <div id="fale" className="w-full"><ContactMe /></div>
        </div>
    )
}

export default Content;