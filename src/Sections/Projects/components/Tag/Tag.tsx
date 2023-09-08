import { useTranslation } from "react-i18next";

const Tag = (props:{label:string}) => {

    const { t } = useTranslation()

    return(
        <div className="w-fit h-fit px-[6px] py-[2px] bg-[#2E64C1] rounded-[12px]">
            <p className="text-white text-[12px]">{t(props.label)}</p>
        </div>
    )
}

export default Tag;