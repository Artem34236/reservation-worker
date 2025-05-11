
type Props = {}

export default function Company_acc_sceleton({}: Props) {
  return (
    <div className="lg:p-[20px] rounded-[20px]">
    <div className="bg-[#352B48] sg:p-[40px] p-[10px] sm:p-[15px] animate-pulse">

        <div className="flex gap-[40px] lg:items-start items-center sm:flex-row flex-col">

            <div className="flex flex-col items-center max-w-[216px] gap-8">

                <div className="bg-gray-500/30 rounded-full xl:min-w-[200px] sm:min-w-[170px] min-w-[120px] w-[120px] h-[120px]" />

                <div className="flex flex-row items-center sm:gap-[40px] gap-[20px]">
                    <div className="bg-gray-500/30 rounded-full min-w-[20px] w-[20px] xl:min-w-[30px] h-[30px]" />
                    <div className="bg-gray-500/30 rounded-full min-w-[20px] w-[20px] xl:min-w-[30px] h-[30px]" />
                </div>

            </div>

            <div className="flex flex-col gap-2">
                <div className="bg-gray-500/30 h-4 w-[60px] rounded" />
                <div className="bg-gray-500/30 h-6 w-[200px] rounded" />
            </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px] mt-[60px]">

            {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex flex-col gap-2">
                    <div className="bg-gray-500/30 h-4 w-[80px] rounded" />
                    <div className="bg-gray-500/30 h-6 w-[180px] rounded" />
                </div>
            ))}

        </div>

    </div>
</div>
  )
}