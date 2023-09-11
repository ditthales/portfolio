

const FeedbackGui = (props:{text:string}) => {
    return(
        <div className="flex flex-row gap-[10px] max-w-[382px] h-fit">
            <div className="w-[10px] bg-black"></div>
            <div className="flex flex-col gap-[10px]">
                <div className="flex flex-row gap-[10px] justify-start items-center">
                    <img src="./foto_gui.png" className="w-[40px]"></img>
                    <h3 className="text-[16px] font-semibold">Guilherme Souza</h3>
                </div>
                <p className="text-[14px]">{props.text}</p>
            </div>
        </div>
    )
}  

export default FeedbackGui;