
import { useEffect, useState } from "react";
import MacMenu from "../MacMenu/MacMenu";


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
            <MacMenu windowWidth={windowWidth}/>
        </div>
    )
}

export default Content;