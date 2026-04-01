import { PROJECTS } from "../../model/projects";
import ProjectCard from "../ProjectCard/ProjectCard";


const ProjectList = () => {
    return (
        <div className="flex flex-wrap gap-[24px] w-full">
            {PROJECTS.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    )
}

export default ProjectList;