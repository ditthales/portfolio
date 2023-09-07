import { useTranslation } from "react-i18next"


const TextAboutMe = () => {

    const { t } = useTranslation()

    return(
        <div className="flex flex-row gap-[10px]">
            <div className="w-px bg-black"></div>
            <div className="flex flex-col gap-[10px]">
                <p className="text-[12px]">{t('text_about_me1')}</p>
                <p className="text-[12px]">{t('text_about_me2')}</p>
            </div>
        </div>
    )
}

export default TextAboutMe