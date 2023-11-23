import { useTranslation } from "react-i18next";
import FeedbackGui from "./components/FeedbackGui";
import FeedbackMigge from "./components/FeedbackMigge";
import MemojiFeedbacks from "./components/MemojiFeedbacks";


const Feedbacks = (props: {windowWidth:number}) => {

    const { t } = useTranslation()

    if (props.windowWidth > 1024) {
        return(
            <div className="flex flex-col gap-[24px]">
                <div className="flex flex-row justify-between">
                    <h3 className=" font-semibold text-[28px]">{t('feedbacks')}</h3>
                    <MemojiFeedbacks />
                </div>
                <div className="flex flex-row justify-between">
                    <FeedbackGui text={t('feedback_gui')} name={"Guilherme Souza"} img={"./foto_gui.png"}/>
                    <div className="flex flex-col gap-[10px]">
                        <FeedbackGui text={t('feedback_migge')} name={"Lucas Migge"} img={"./foto_migge.png"}/>
                    </div>
                </div>
            </div>  
        )
    }else{
        return(
            <div className="flex flex-col gap-[24px]">
            <h3 className=" font-semibold text-[28px]">{t('feedbacks')}</h3>
            <div className="flex flex-col gap-[10px]">
                <div className="flex flex-row-reverse w-full">
                    <div className="flex-grow"></div>
                    <FeedbackGui text={t('feedback_gui')} name={"Guilherme Souza"} img={"./foto_gui.png"}/>
                </div>
                <div className="flex flex-row w-full">
                    <div className="flex-grow"></div>
                    <FeedbackGui text={t('feedback_migge')} name={"Lucas Migge"} img={"./foto_migge.png"}/>
                </div>
            </div>
            </div>
        )
    }
}

export default Feedbacks;