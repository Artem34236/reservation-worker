
type Props = {
    children?: React.ReactNode
    elements: string[]
}


export default function Card({ children, elements }: Props) {
    return (
        <div className="p-[15px] bg-[#352B48] rounded-2xl flex justify-between items-center gap-[30px]">

            <div className="flex items-center lg:gap-[43px] gap-[10px] flex-1">

                <div className="overflow-hidden xl:w-[110px] w-[90px] h-[60px] xl:h-[70px] rounded-[10px] xl:rounded-2xl">
                    <img className="object-center object-cover xl:w-[200px] w-[90px] h-[100px] xl:h-[120px]" src="/Compani/WorkerBaseIcon.png" alt="" />
                </div>

                <div className="max-w-[900px] flex-1 flex justify-between flex-wrap">
                    {
                        elements.map((i, index) => {
                            return (
                                <div key={index} className="sm:p-[10px] p-[5px]">
                                    <p className="text-white sm:text-[14px] text-[10px] sm:min-w-[60px] min-w-[40px] 2xl:min-w-[100px]">{i}</p>
                                </div>
                            )
                        })
                    }
                </div>

            </div>


            {children}


        </div>
    )
}

export function CardTop({ children, elements }: Props) {
    return (
        <div className="p-[15px] flex justify-between items-center gap-[30px]">

            <div className="flex flex-1 items-center lg:gap-[43px] gap-[10px]">

                <div className="w-[110px] h-[80px]"></div>

                <div className="max-w-[900px] flex-1 flex justify-between flex-wrap">
                    {
                        elements.map((i, index) => {
                            return (
                                <div key={index} className="sm:p-[10px] p-[5px]">
                                    <p className="text-[#E5E5E5] sm:text-[14px] text-[10px] sm:min-w-[60px] min-w-[40px] 2xl:min-w-[100px]">{i}</p>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

            {children}

        </div>
    )
}