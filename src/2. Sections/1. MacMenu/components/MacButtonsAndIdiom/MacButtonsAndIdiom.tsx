import IdiomSelector from "../IdiomSelector/IdiomSelector"


const MacButtonsAndIdiom = () => {
    return(
        <div className="flex flex-row justify-between items-start px-[11px]">
            <img src="./mac-buttons.png" className="w-[52px]"></img>
            <IdiomSelector />
        </div>
    )
}

export default MacButtonsAndIdiom