
type Props = {}

export default function User_worker_time_sceleton({ }: Props) {
    return (
        <div className="bg-[#352B48] xl:p-[40px] sm:p-[20px] flex-1 flex flex-col lg:gap-[100px] gap-[50px] p-[10px]">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-[20px] lg:gap-[38px]">
                <div className="h-[20px] bg-gray-500/30 w-[70px] rounded" />

                <div className="flex flex-wrap justify-center sm:justify-start lg:gap-[10px] gap-[6px]">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="lg:w-[80px] w-[60px] h-[30px] bg-gray-500/30 rounded" />
                    ))}
                </div>

                <div className="h-[20px] bg-gray-500/30 w-[70px] rounded" />
            </div>
        </div>
    )
}