import { TestimonialInfo } from "./TestimonialsInfo";


const FeedbackGui = (props:TestimonialInfo) => {
    return(
        <div className="flex flex-row gap-[10px] h-fit p-[100px]">
            <div className="w-[10px] bg-black"></div>
            <div className="flex flex-col gap-[10px]">
                <div className="flex flex-row gap-[10px] justify-start items-center">
                    <img src={props.imageUrl} className="w-[40px]"></img>
                    <h3 className="text-[16px] font-semibold">{props.name}</h3>
                </div>
                <p className=" text-justify text-[14px]">{props.text}</p>
            </div>
        </div>
    )
}  

export default FeedbackGui;