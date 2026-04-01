
import { Project } from "../../model/projects";
import Tag from "../Tag/Tag";
import TextLink from "../TextLink/TextLink";

const ProjectCard = (props:{project:Project}) => {

    console.log("rendering project card")

    return(
        <div className="p-4 bg-slate-200 rounded-[32px]">
        <div className="flex flex-col gap-[16px] h-full max-w-[340px]">
            <img src={props.project.img} className=" rounded-[16px]"></img>
            <h3 className=" font-medium text-[20px] text-[#464444] max-w-[240px]">{props.project.name}</h3>
            <div className="h-[50px] flex flex-wrap gap-[4px] overflow-hidden">
                {props.project.tags.map((tag, index) => (
                    <Tag key={index} label={tag} />
                )
                )}
            </div>
            
            {/* <VideoComponent video={props.project.video} thumbnail={props.project.img}/> */}

            <div className="flex flex-grow"></div>

            <div className="h-[75xxpx] flex flex-wrap gap-[4px] overflow-hidden pb-2">
                {props.project.links && props.project.links.map((projectUrl, index) => (
                    <TextLink key={index} link={{ name: projectUrl.name, url: projectUrl.url }} />
                ))}
            </div>
        </div>
        </div>
    )
}

export default ProjectCard;