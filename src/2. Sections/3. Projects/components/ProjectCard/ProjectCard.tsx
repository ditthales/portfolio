
import { useTranslation } from "react-i18next";
import ProjectInfo from "../ProjectList/ProjectInfo";
import Tag from "../Tag/Tag";
import TextLink from "../TextLink/TextLink";

const ProjectCard = (props:{project:ProjectInfo}) => {

    const { t } = useTranslation()

    console.log("rendering project card")

    return(
        <div className="p-4 bg-slate-200 rounded-[32px]">
        <div className="flex flex-col gap-[16px] h-full max-w-[340px]">
            <img src={props.project.imageUrl} className=" rounded-[16px]"></img>
            <h3 className=" font-medium text-[20px] text-[#464444] max-w-[240px]">{props.project.name}</h3>
            <div className="h-[50px] flex flex-wrap gap-[4px] overflow-hidden">
                {props.project.tags.map((tag, index) => (
                    <Tag key={index} label={tag} />
                )
                )}
            </div>
            
            <p className="text-[14px] text-[#464444] text-left">{t(props.project.description)}</p>

            {/* <VideoComponent video={props.project.video} thumbnail={props.project.img}/> */}

            <div className="flex flex-grow"></div>

            <div className="h-[75xxpx] flex flex-wrap gap-[4px] overflow-hidden pb-2">
                {props.project.urls && props.project.urls.map((projectUrl, index) => (
                    <TextLink key={index} link={{ name: projectUrl.name, url: projectUrl.url }} />
                ))}
            </div>
        </div>
        </div>
    )
}

export default ProjectCard;