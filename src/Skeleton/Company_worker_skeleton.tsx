
type Props = {}

export default function Company_worker_skeleton({ }: Props) {
    return (
        <div className="animate-pulse">


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