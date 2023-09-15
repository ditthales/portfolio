import { useTranslation } from "react-i18next"

const More = () => {

    const { t } = useTranslation()
    
    return (
        <div className=" flex flex-col gap-[10px]">
            <h3 className="font-semibold text-[18px]">{t('opcao2')}</h3>
            <a target="_blank" href="./cv.pdf" className={`text-white bg-[#2E64C1] hover:bg-blue-700 font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-xl w-fit`}>
            <div className="flex flex-row gap-[8px] items-center justify-start">
                <p className=" text-[14px]">{t('opcao4')}</p>
                <p className="material-symbols-outlined text-[18px]">description</p>
            </div>
            </a>
        </div>
    )
}

export default More