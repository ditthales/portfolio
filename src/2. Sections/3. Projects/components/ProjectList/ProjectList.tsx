import { useEffect, useState } from "react";
import { PROJECTS } from "../../model/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectInfo from "./ProjectInfo";


const ProjectList = () => {

    const [infoLoaded, setInfoLoaded] = useState(false);
    const [projects, setProjects] = useState<ProjectInfo[]>([]);

    const fetchProjects = async (): Promise<ProjectInfo[]> => {
        try {
            const response = await fetch(`https://portfolio-back-74d75b4d278b.herokuapp.com/getProjects`);
            const data: ProjectInfo[] = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error('Error fetching projects:', error);
            return [];
        }
    }

    useEffect(() => {
        fetchProjects().then((projects) => {
            setProjects(projects);
            setInfoLoaded(true);
        })
    }, [])

    return infoLoaded ? (
        <div className="flex flex-wrap gap-[24px] w-full">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    ) : (
        <p>Carregando...</p>
    )
}

export default ProjectList;