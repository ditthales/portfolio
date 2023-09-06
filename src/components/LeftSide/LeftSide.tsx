import MacButtonsAndIdiom from "../MacButtonsAndIdiom/MacButtonsAndIdiom";
import MenuButtonList from "../MenuButtonList/MenuButtonList";


const LeftSide = () => {
    return(
        <div className=" flex flex-col gap-[10px] px-[10px] py-[21px] w-[252px] bg-[#E9E4E0]">
            <MacButtonsAndIdiom />
            <img src="./buscar.png" className="max-w-full"></img>
            <img src="./foto e nome.png" className="max-w-full"></img>
            <MenuButtonList />
        </div>
    )
    
}

export default LeftSide;