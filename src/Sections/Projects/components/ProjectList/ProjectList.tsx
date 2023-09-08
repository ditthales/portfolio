import { PROJECTS } from "../../model/projects";
import ProjectCard from "../ProjectCard/ProjectCard";


const ProjectList = () => {

    const newArray = PROJECTS.slice(1)

    return(
        <div className="flex flex-row gap-[24px] w-full overflow-x-scroll">
            {newArray.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    )
}

export default ProjectList;