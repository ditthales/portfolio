import { useTranslation } from "react-i18next";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import { PROJECTS } from "./model/projects";
import ProjectList from "./components/ProjectList/ProjectList";

const Projects = () => {

    const { t } = useTranslation()

    return(
        <div className="flex flex-col gap-[24px] w-full">
            <h2 className="text-[28px] text-[#464444] font-semibold">{t('projetos')}</h2>
            <ProjectList />
        </div>
    )
}

export default Projects;