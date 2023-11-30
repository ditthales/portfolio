import { useTranslation } from "react-i18next"


const MemojiFeedbacks = () => {

    const { t } = useTranslation()

    return(
        <div className="flex flex-row gap-[10px] justify-end items-start">
            <p className="text-[14px] w-[100px] pt-[16px]">{t('que_pensam')}</p>
            <img src="./memoji_feedbacks.png" className="w-[86px] h-[108]"></img>
        </div>
    )
}

export default MemojiFeedbacks