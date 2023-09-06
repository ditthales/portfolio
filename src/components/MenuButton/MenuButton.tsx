
const MenuButton = (props:{icon:string, text:string}) => {

    return (
        <div className="flex flex-row items-center justify-start w-[232px] h-[28px] gap-[5px] px-[6px] py-[4px] hover:bg-[#2E64C1] text-[#464444] hover:text-white rounded-[5px] cursor-pointer">
            <div className="flex items-center justify-center rounded-[5px] bg-[#3B82F7] w-[20px] h-[20px]" style={{boxShadow: '0px 1px 2px 0px rgb(0 0 0 / 0.25)'}}>
                <p className="material-symbols-outlined text-white text-[16px]">{props.icon}</p>
            </div>
            <p className="text-[14px]">{props.text}</p>
        </div>
    )
}

export default MenuButton