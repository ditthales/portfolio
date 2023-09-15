import { useTranslation } from "react-i18next"
import Tag from "../../3. Projects/components/Tag/Tag"
import TextLink from "../../3. Projects/components/TextLink/TextLink"

const Experience = () => {

    const { t } = useTranslation()

    return(
        <div className="flex flex-row gap-[10px] max-w-[382px]">
            <img src="academy.png" className="w-[100px] h-[100px]"></img>
            <div className="flex flex-col justify-between">
                <h3 className="text-[16px] text-[#464444] font-semibold">{t('exp1')}</h3>
                <div className="text-[14px]"><TextLink link={{
                    name:"Apple Developer Academy | UFPE",
                    url:"https://www.developeracademy.cin.ufpe.br/"
                }} /></div>
                <div className="flex flex-wrap gap-[2px] items-center justify-start">
                <Tag label={"Swift"} />
                <Tag label={"SwiftUI"} />
                <Tag label={"UIKit"} />
                <Tag label={"Git"} />
                </div>
            </div>
        </div>
    )
}

export default Experience