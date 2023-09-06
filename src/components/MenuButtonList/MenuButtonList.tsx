import { useTranslation } from "react-i18next";
import MenuButton from "../MenuButton/MenuButton";


const MenuButtonList = () => {

    const { t } = useTranslation();

    return (
        <div className="flex flex-col">
            <MenuButton icon={'person'} text={t('sobre')} />
            <MenuButton icon={'folder'} text={t('projetos')} />
            <MenuButton icon={'description'} text={t('cv')} />
            <MenuButton icon={'format_quote'} text={t('feedbacks')} />
            <MenuButton icon={'mail'} text={t('fale')} />
        </div>
    );
}

export default MenuButtonList;