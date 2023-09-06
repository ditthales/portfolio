import MenuButton from "../MenuButton/MenuButton";


const MenuButtonList = () => {
    return (
        <div className="flex flex-col">
            <MenuButton icon={'person'} text={'Sobre mim'} />
            <MenuButton icon={'folder'} text={'Projetos'} />
            <MenuButton icon={'description'} text={'Currículo'} />
            <MenuButton icon={'format_quote'} text={'Feedbacks'} />
            <MenuButton icon={'mail'} text={'Fale comigo'} />
        </div>
    );
}

export default MenuButtonList;