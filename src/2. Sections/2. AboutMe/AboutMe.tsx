import { useTranslation } from "react-i18next"
import SkillsList from "./components/SkillsList/SkillsList"
import TextAboutMe from "./components/TextAboutMe/TextAboutMe"


const AboutMe = (props:{windowWidth:number}) => {

    const { t } = useTranslation()

    const shouldRender = () => {
        return props.windowWidth > 768
    }

    const containerStyle = {
        gap: `${Math.floor((120 / 1024 * 100))}%`,
    }

    return (
        <div className="flex flex-row" style={containerStyle}>
            <div className="flex flex-col gap-[24px] w-full">
                <div className="flex flex-col gap-0">
                    <h2 className="text-[28px] font-semibold text-[#464444]">{t('about')}</h2>
                    <h2 className="text-[28px] font-semibold text-[#464444]">{t('me')}</h2>
                </div>
                <TextAboutMe />
                <h2 className="text-[20px] font-semibold text-[#464444]">{t('skills')}</h2>
                <SkillsList />
            </div>
            <img src="./memoji_about_me.png" className={`w-[300px] h-[249px] ${shouldRender() ? "" : "hidden"}`}></img>
        </div>
    )
}

export default AboutMe