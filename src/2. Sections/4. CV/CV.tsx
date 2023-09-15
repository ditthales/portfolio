import { useTranslation } from "react-i18next";
import Graduations from "./components/Graduations";
import Experiences from "./components/Experiences";
import Prizes from "./components/Prizes";
import More from "./components/More";

const CV = (props:{windowWidth:number}) => {

    const { t } = useTranslation();

    if (props.windowWidth > 1024) {
        return(
            <div className="flex flex-col gap-[24px] w-full">
                <h2 className="text-[28px] text-[#464444] font-semibold">{t('cv')}</h2>
                <div className="flex flex-row justify-between w-full">
                    <Experiences/>
                    <Graduations/>  
                </div>
                <Prizes small={false}/>
                <More/>
            </div>
        )
    }else{
        return(
            <div className="flex flex-col gap-[24px] w-full">
                <h2 className="text-[28px] text-[#464444] font-semibold">{t('cv')}</h2>
                <div className="flex flex-col justify-start items-start w-full gap-[24px]">
                    <Experiences/>
                    <Graduations/>
                    <Prizes small={true}/> 
                    <More/> 
                </div>
            </div>
        )
    }
}

export default CV;