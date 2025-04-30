
type Props = {
    isChildren?: boolean
    isImage?: boolean
}

export function CardSkeleton({ isChildren, isImage = true }: Props) {
    return (
        <div className="p-[15px] bg-[#352B48] rounded-2xl flex justify-between items-center gap-[30px] text-center animate-pulse">

            <div className="flex flex-1 items-center lg:gap-[43px] gap-[10px]">

                {isImage ? <div className="overflow-hidden xl:w-[110px] w-[90px] h-[60px] xl:h-[70px] rounded-[10px] xl:rounded-2xl bg-[#555]" /> : <div className="overflow-hidden xl:w-[110px] w-[90px] h-[60px] xl:h-[70px] r" />}

                <div className="max-w-[900px] flex-1 flex justify-between flex-wrap">
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className="sm:p-[10px] p-[5px]">
                            <div className="bg-[#555] rounded-md w-[130px] h-[20px]" />
                        </div>
                    ))}
                </div>

            </div>

            {isChildren  ? <div className="w-[50px] h-[30px] bg-[#555] rounded-md" /> : null}

        </div>
    );
}