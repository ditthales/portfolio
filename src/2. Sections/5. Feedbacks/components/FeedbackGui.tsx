import { TestimonialInfo } from "./TestimonialsInfo";


const FeedbackGui = (props:TestimonialInfo) => {
    return(
        <div className="p-8 bg-slate-200 rounded-[32px] h-full max-w-[720px]">
        <div className="flex flex-row gap-[10px] h-full">
            {/* <div className="w-[10px] bg-black"></div> */}
            <div className="flex flex-col gap-[40px]">
                <div className="flex flex-row gap-[10px] justify-center items-center">
                    <img src={props.imageUrl} className="w-[40px]"></img>
                    <h3 className="text-[18px] font-semibold">{props.name}</h3>
                </div>
                <p className=" text-justify text-[14px]">{props.text}</p>
            </div>
        </div>
        </div>
    )
}  

export default FeedbackGui;