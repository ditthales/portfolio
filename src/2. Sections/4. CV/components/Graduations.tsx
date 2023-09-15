import { useTranslation } from "react-i18next"
import Graduation from "./Graduation"

const Graduations = () => {

    const { t } = useTranslation()

    return(
        <div className="flex flex-col gap-[10px] max-w-[382px]">
            <h2 className="text-[18px] text-[#464444] font-semibold">{t('educacao')}</h2>
            <Graduation 
                titulo={t('curso1')}
                school={"Universidade Federal de Pernambuco - UFPE"}
                dates={t('data1')} 
                image={"ufpe.png"} 
                link={"https://www.ufpe.br/engenharia-da-computacao-bacharelado-cin"}/>
            <Graduation 
                titulo={t('curso2')}
                school={"Centro Universitário FAM"}
                dates={t('data2')} 
                image={"fam.png"} 
                link={"https://www.vemprafam.com.br/cursos/ciencias-da-computacao/"}/>
            <Graduation 
                titulo={t('curso3')}
                school={"UNINASSAU"}
                dates={t('data3')} 
                image={"nassau.png"} 
                link={"https://graduacao.uninassau.digital/nossos-cursos/superior-de-tecnologia-em-analise-e-desenvolvimento-de-sistemas/85/60/2"}/>
        </div>
    )
}

export default Graduations