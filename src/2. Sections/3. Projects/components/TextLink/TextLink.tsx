
const TextLink = (props:{link:{name:string, url:string}}) => {
    return (
        <a href={props.link.url} target="_blank" className="text-[14px] text-[#2E64C1] h-fit w-fit">
                        <div className="flex flex-row gap-[2px] h-[12px] items-center justify-start">
                            <p className="underline">{props.link.name}</p>
                            <p className="material-symbols-outlined text-[12px]">north_east</p>
                        </div>
                    </a>
    )
}

export default TextLink