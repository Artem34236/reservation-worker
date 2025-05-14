
type Props = {}

export default function Worker_acc_sceleton({ }: Props) {
    return (
        <div className="lg:p-[20px] rounded-[20px]">
            <div className="bg-[#352B48] sg:p-[40px] p-[10px] sm:p-[15px]">

                <div className="flex gap-[40px] lg:items-start items-center sm:flex-row flex-col">

                    <div className="flex max-w-[216px]">
                        <div className="bg-gray-700 rounded-full xl:min-w-[200px] sm:min-w-[170px] min-w-[120px] w-[120px] h-[120px] animate-pulse" />
                    </div>

                    <div>
                        <div className="h-[20px] bg-gray-700 rounded w-[120px] mb-2 animate-pulse" />
                        <div className="flex gap-4 items-center">
                            <div className="h-[30px] bg-gray-600 rounded w-[200px] animate-pulse" />
                            <div className="h-[20px] bg-gray-600 rounded w-[20px] xl:w-[30px] animate-pulse" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px] mt-[60px]">
                    {[...Array(4)].map((_, index) => (
                        <div key={index}>
                            <div className="h-[20px] bg-gray-700 rounded w-[120px] mb-2 animate-pulse" />
                            <div className="flex gap-4 items-center">
                                <div className="h-[30px] bg-gray-600 rounded w-[200px] animate-pulse" />
                                <div className="h-[20px] bg-gray-600 rounded w-[20px] xl:w-[30px] animate-pulse" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}