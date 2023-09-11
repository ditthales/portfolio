

const FeedbackMigge = (props:{text:string}) => {
    return(
        <div className="flex flex-row-reverse gap-[10px] max-w-[382px] h-fit">
            <div className="w-[10px] bg-black"></div>
            <div className="flex flex-col gap-[10px]">
                <div className="flex flex-row-reverse gap-[10px] justify-start items-center">
                    <img src="./foto_migge.png" className="w-[40px]"></img>
                    <h3 className="text-[16px] font-semibold">Lucas Migge</h3>
                </div>
                <p className="text-[14px] text-end">{props.text}</p>
            </div>
        </div>
    )
}  

export default FeedbackMigge;