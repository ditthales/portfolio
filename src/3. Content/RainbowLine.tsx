
const RainbowLine = (props:{orientation:string}) => {

    if (props.orientation === 'top'){
        return (
            <div className="flex justify-between w-full" style={{boxShadow: '-4px 4px 4px 0px rgb(0 0 0 / 0.25)'}}>
                <div className="flex-grow h-[10px] bg-[#61BB46]"></div>
                <div className="flex-grow h-[10px] bg-[#FDB827]"></div>
                <div className="flex-grow h-[10px] bg-[#F5821F]"></div>
                <div className="flex-grow h-[10px] bg-[#E03A3E]"></div>
                <div className="flex-grow h-[10px] bg-[#963D97]"></div>
                <div className="flex-grow h-[10px] bg-[#009DDC]"></div>
                <div className="flex-grow h-[10px] bg-[#ffffff]"></div>
            </div>
        )
    }else if (props.orientation === 'bottom'){
        return (
            <div className="flex justify-between w-full" style={{boxShadow: '-4px -4px 4px 0px rgb(0 0 0 / 0.25)'}}>
                <div className="flex-grow h-[10px] bg-[#61BB46]"></div>
                <div className="flex-grow h-[10px] bg-[#FDB827]"></div>
                <div className="flex-grow h-[10px] bg-[#F5821F]"></div>
                <div className="flex-grow h-[10px] bg-[#E03A3E]"></div>
                <div className="flex-grow h-[10px] bg-[#963D97]"></div>
                <div className="flex-grow h-[10px] bg-[#009DDC]"></div>
                <div className="flex-grow h-[10px] bg-[#ffffff]"></div>
            </div>
        )
    }
    
}

export default RainbowLine