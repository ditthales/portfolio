import { useTranslation } from "react-i18next";
import MacButtonsAndIdiom from "../MacButtonsAndIdiom/MacButtonsAndIdiom";
import MenuButtonList from "../MenuButtonList/MenuButtonList";


const LeftSide = () => {

    const { t } = useTranslation();

    return(
        <div className=" flex flex-col gap-[10px] px-[10px] py-[21px] w-[252px] bg-[#E9E4E0]">
            <MacButtonsAndIdiom />
            <img src={t('buscar')} className="max-w-full"></img>
            <img src={t('dev')} className="max-w-full"></img>
            <MenuButtonList />
        </div>
    )
    
}

export default LeftSide;