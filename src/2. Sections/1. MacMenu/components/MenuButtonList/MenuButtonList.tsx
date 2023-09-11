import { useTranslation } from "react-i18next";
import MenuButton from "../MenuButton/MenuButton";
import { Link } from 'react-scroll';



const MenuButtonList = () => {

    const { t } = useTranslation();

    return (
        <div className="flex flex-col">
            <Link to="about" smooth={true} duration={500}><MenuButton icon={'person'} text={t('sobre')} /></Link>
            <Link to="portfolio" smooth={true} duration={500}><MenuButton icon={'folder'} text={t('projetos')} /></Link>
            <Link to="cv" smooth={true} duration={500}><MenuButton icon={'description'} text={t('cv')} /></Link>
            <Link to="feedbacks" smooth={true} duration={500}><MenuButton icon={'format_quote'} text={t('feedbacks')} /></Link>
            <Link to="fale" smooth={true} duration={500}><MenuButton icon={'mail'} text={t('fale')} /></Link>
        </div>
    );
}

export default MenuButtonList;