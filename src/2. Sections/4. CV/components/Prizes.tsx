import { useTranslation } from "react-i18next"

const Prizes = (props:{small:boolean}) => {

    const {t} = useTranslation()

    if (!props.small){
        return(
            <div className="flex flex-col gap-[10px]">
                <h3 className="font-semibold text-[18px]">{t('premiacoes')}</h3>
                <div className="flex flex-row gap-[10px] w-full items-start justify-start">
                    <img src="./wwdc.png" className="w-[240px] h-[110px]"></img>
                    <div className="flex flex-col justify-center gap-[23px]">
                        <h3 className="text-[16px] text-[#464444] font-semibold">{t('conquista')}</h3>
                        <div className="flex flex-row gap-[10px]">
                            <a target="_blank" href="https://medium.com/appledeveloperacademy-ufpe/how-the-wwdc-swift-student-challenge-helped-me-rethink-my-ideas-and-use-my-weakness-as-the-main-97592aa9a670" className={`text-[12px] bg-transparent hover:bg-[#2E64C1] text-[#2E64C1] hover:text-white py-2 px-4 rounded-lg hover:shadow-lg border border-[#2E64C1]`}>
                                {t('opcao1')}
                            </a>
                            <a target="_blank" href="https://github.com/ditthales/InASheetOfPaper" className={`text-[12px] text-white bg-[#2E64C1] hover:bg-blue-700 font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-xl w-fit`}>
                                {t('opcao3')}
                            </a>
                        </div>
                    </div>
                    <img src="memoji_wwdc.png" className="w-[90px] h-[100px]"/>
                </div>
            </div>
        )
    }else{
        return(
            <div className="flex flex-col gap-[10px] max-w-[382px]">
                <h3 className="font-semibold text-[18px]">{t('premiacoes')}</h3>
                <img src="./wwdc.png" className="w-[240px] h-[110px]"></img>
                <div className="flex flex-col justify-center gap-[10px]">
                    <h3 className="text-[16px] text-[#464444] font-semibold">{t('conquista')}</h3>
                    <div className="flex flex-col gap-[10px] w-fit">
                        <a target="_blank" href="https://medium.com/appledeveloperacademy-ufpe/how-the-wwdc-swift-student-challenge-helped-me-rethink-my-ideas-and-use-my-weakness-as-the-main-97592aa9a670" className={`text-[12px] bg-transparent hover:bg-[#2E64C1] text-[#2E64C1] hover:text-white py-2 px-4 rounded-lg hover:shadow-lg border border-[#2E64C1]`}>
                        {t('opcao1')}
                        </a>
                        <a target="_blank" href="https://github.com/ditthales/InASheetOfPaper" className={`text-[12px] text-white bg-[#2E64C1] hover:bg-blue-700 font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-xl w-fit`}>
                        {t('opcao3')}
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Prizes