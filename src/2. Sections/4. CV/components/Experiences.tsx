import { useTranslation } from "react-i18next"
import Experience from "./Experience"

const Experiences = () => {

    const { t } = useTranslation()

    return(
        <div className="flex flex-col gap-[10px] max-w-[382px]">
            <h2 className="text-[18px] text-[#464444] font-semibold">{t('experiencias')}</h2>
            <Experience/>
            <p className="text-[14px]">{t('projetos_relacionados')}:
                <a href="https://apps.apple.com/br/app/witchie/id6454296859" className=" text-[#2E64C1] underline"> witchie</a>,
                <a href="https://github.com/ditthales/InASheetOfPaper" className=" text-[#2E64C1] underline"> In a Sheet of Paper</a>,
                <a href="https://apps.apple.com/br/app/receitinha/id1658205133" className=" text-[#2E64C1] underline"> Receitinha</a>
            </p>
            <p className="text-[14px]">{t('atividades_realizadas')}:</p>
            <ul className="list-disc list-inside text-[14px]">
                <li>{t('lista1')}</li>
                <li>{t('lista2')}</li>
                <li>{t('lista3')}</li>
                <li>{t('lista4')}</li>
                <li>{t('lista5')}</li>
                <li>{t('lista6')}</li>
                <li>{t('lista7')}</li>
                <li>{t('lista8')}</li>
                <li>{t('lista9')}</li>
            </ul>
        </div>
    )
}

export default Experiences