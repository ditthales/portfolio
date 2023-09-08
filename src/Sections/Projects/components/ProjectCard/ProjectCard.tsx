import { useTranslation } from "react-i18next";
import { Project } from "../../model/projects";
import Tag from "../Tag/Tag";
import TextLink from "../TextLink/TextLink";

const ProjectCard = (props:{project:Project}) => {

    const { t } = useTranslation()

    return(
        <div className="flex flex-col gap-[16px] w-full">
            <h3 className=" font-medium text-[18px] text-[#464444] w-[240px]">{props.project.name}</h3>
            <div className="h-[50px] flex flex-wrap gap-[4px] overflow-hidden">
                {props.project.tags.map((tag, index) => (
                    <Tag key={index} label={tag} />
                )
                )}
            </div>
            <img src={`./${t('language')}_${props.project.img}`}></img>
            <div className="h-[50px] flex flex-wrap gap-[4px] overflow-hidden">
                {props.project.links.map((link, index) => (
                    <TextLink key={index} link={link} />
                ))}
            </div>
        </div>
    )
}

export default ProjectCard;