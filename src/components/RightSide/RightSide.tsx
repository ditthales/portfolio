import { useTranslation } from "react-i18next";

const RightSide = () => {

    const { t } = useTranslation();

    return(
       <div className={`flex flex-col items-start justify-start gap-[28px] px-[30px] py-[14px] bg-[#F4F1ED] w-full`}>
            <p className=" text-[16px] text-[#464444] font-semibold">Thales Fraga</p>
            <div className=" flex flex-col gap-[11px] items-center justify-start w-full">
                <img src="./eu.png" className="w-[100px]"></img>
                <div className=" flex flex-col gap-[0px] items-center justify-start w-full">
                    <p className="w-full text-center font-semibold text-[16px]">Thales Fraga</p>
                    <a href={`mailto:${t('mail')}`} target="_blank">
                        <p className="w-full text-center text-[12px] text-[#2E64C1] underline">{t('mail')}</p>
                    </a>
                </div>
                <div className=" flex flex-row gap-[38px] items-center justify-center">
                    <a href="https://github.com/ditthales" target="_blank">
                        <img src="./github.png" className="w-[40px]"></img>
                    </a>
                    <a href="https://linkedin.com/in/thalesvgfraga" target="_blank">
                        <img src="./linkedin.png" className="w-[40px]"></img>
                    </a>
                </div>
            </div>
       </div>
    )
}

export default RightSide;