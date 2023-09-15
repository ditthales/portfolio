import TextLink from "../../3. Projects/components/TextLink/TextLink"

const Graduation = (props:{titulo:string, school:string, dates:string, image:string, link:string}) => {
    return(
        <div className="flex flex-row gap-[10px] max-w-[382px] h-full">
            <img src={props.image} className="w-[100px] h-[100px]"></img>
            <div className="flex flex-col justify-between">
                <h3 className="text-[16px] text-[#464444] font-semibold">{props.titulo}</h3>
                <div className="text-[12px]"><TextLink link={{
                    name:props.school,
                    url:props.link
                }} /></div>
                <p className="text-[12px]">{props.dates}</p>
            </div>
        </div>
    )
}

export default Graduation