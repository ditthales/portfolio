

const FeedbackGui = (props:{name:string, img:string, text:string}) => {
    return(
        <div className="flex flex-row gap-[10px] max-w-[382px] h-fit">
            <div className="w-[10px] bg-black"></div>
            <div className="flex flex-col gap-[10px]">
                <div className="flex flex-row gap-[10px] justify-start items-center">
                    <img src={props.img} className="w-[40px]"></img>
                    <h3 className="text-[16px] font-semibold">{props.name}</h3>
                </div>
                <p className=" text-justify text-[14px]">{props.text}</p>
            </div>
        </div>
    )
}  

export default FeedbackGui;