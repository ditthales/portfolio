const Prizes = (props:{small:boolean}) => {

    if (!props.small){
        return(
            <div className="flex flex-col gap-[10px]">
                <h3 className="font-semibold text-[18px]">Premiações</h3>
                <div className="flex flex-row gap-[10px] w-full items-center justify-start">
                    <img src="./wwdc.png" className="w-[240px] h-[110px]"></img>
                    <div className="flex flex-col justify-center gap-[23px]">
                        <h3 className="text-[16px] text-[#464444] font-semibold">Vencedor do WWDC 2023 Swift Student Challenge com o app playground In a Sheet of Paper</h3>
                        <div className="flex flex-row gap-[10px]">
                            <button className={`bg-transparent hover:bg-[#2E64C1] text-[#2E64C1] hover:text-white py-2 px-4 rounded-lg hover:shadow-lg border border-[#2E64C1]`} onClick={() => {}}>
                                Mais sobre o processo
                            </button>
                            <button onClick={() => {}} className={`text-white bg-[#2E64C1] hover:bg-blue-700 font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-xl w-fit`}>
                                Conheça o app
                            </button>
                        </div>
                    </div>
                    <img src="memoji_wwdc.png" className="w-[151px] h-[166px]"/>
                </div>
            </div>
        )
    }else{
        return(
            <div className="flex flex-col gap-[10px] max-w-[382px]">
                <h3 className="font-semibold text-[18px]">Premiações</h3>
                <img src="./wwdc.png" className="w-[240px] h-[110px]"></img>
                <div className="flex flex-col justify-center gap-[10px]">
                    <h3 className="text-[16px] text-[#464444] font-semibold">Vencedor do WWDC 2023 Swift Student Challenge com o app playground In a Sheet of Paper</h3>
                    <div className="flex flex-row gap-[10px]">
                        <button className={`bg-transparent hover:bg-[#2E64C1] text-[#2E64C1] hover:text-white py-2 px-4 rounded-lg hover:shadow-lg border border-[#2E64C1]`} onClick={() => {}}>
                            Mais sobre o processo
                        </button>
                        <button onClick={() => {}} className={`text-white bg-[#2E64C1] hover:bg-blue-700 font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-xl w-fit`}>
                            Conheça o app
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Prizes