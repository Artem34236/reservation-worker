
type Props = {}

export default function Company_worker_skeleton({ }: Props) {
    return (
        <div className="animate-pulse">

            <div className="bg-[#352B48] sm:py-[14px] py-[6px] sm:px-[40px] px-[6px]">
                <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-between">
                    <label className="py-[5px] px-[12px] sm:py-[12px] sm:px-[18px] border border-[#E5E5E5] rounded-[8px] flex items-center justify-between flex-1 w-full sm:max-w-[296px]">
                        <div className="bg-gray-500/30 h-[20px] w-full rounded" />
                        <div className="bg-gray-500/30 w-[20px] h-[20px] rounded ml-2" />
                    </label>
                </form>
            </div>


            <div className="lg:p-[40px] p-[10px]">
                <div className="flex justify-between items-center border-b-[1px] border-[#E5E5E5] py-[12px]">
                    <div className="bg-gray-500/30 h-6 w-40 rounded" />
                    <div className="bg-gray-500/30 h-10 w-[180px] rounded" />
                </div>


                <div className="mt-4 mb-2">
                    <div className="flex text-white justify-between px-4 py-2">
                        <div className="bg-gray-500/30 h-4 w-20 rounded" />
                        <div className="bg-gray-500/30 h-4 w-20 rounded" />
                        <div className="bg-gray-500/30 h-4 w-24 rounded" />
                        <div className="lg:w-[100px] w-[25px] bg-gray-500/30 h-4 rounded" />
                    </div>
                </div>


                <div className="flex flex-col gap-[20px] mr-3">
                    <div className="flex justify-between items-center bg-[#3E3553] rounded-[10px] px-4 py-3">
                        <div className="flex gap-4 w-full justify-between items-center text-white">
                            <div className="bg-gray-500/30 h-4 w-20 rounded" />
                            <div className="bg-gray-500/30 h-4 w-24 rounded" />
                            <div className="bg-gray-500/30 h-4 w-28 rounded" />
                            <div className="flex gap-3 items-center">
                                <div className="bg-gray-500/30 h-[25px] w-[25px] rounded" />
                                <div className="bg-gray-500/30 h-[25px] w-[25px] rounded" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}