import { Outlet } from "react-router-dom"

type Props = {}

export default function Company_layout_sceleton({ }: Props) {
    return (
        <div className="container bg-[#333333]  sm:min-h-[calc(100vh-68px)] md:min-h-[calc(100vh-92px)] min-h-[calc(100vh-68px)] lg:flex">

            <div className="lg:w-[220px] w-[0] shrink-0" />

            <div className="bg-[#26222E] py-3 px-5 justify-between items-center flex lg:flex-col gap-2 lg:max-w-[220px] w-full lg:min-h-[calc(100vh-93px)] lg:max-h-[calc(100vh-124px)] lg:fixed">

                <div className="flex lg:flex-col px-5 items-center justify-center gap-3">
                    <div className="bg-gray-500/30 rounded-full lg:w-[150px] w-[50px] h-[50px] lg:h-[150px]" />
                    <div className="bg-gray-500/30 h-6 w-24 rounded" />
                </div>

                <div className="flex lg:flex-col sm:gap-3 gap-2 items-center sm:w-full w-[236px] justify-center lg:p-4 flex-wrap">
                    {[1, 2, 3].map((_, i) => (
                        <div
                            key={i}
                            className="bg-gray-500/30 h-10 w-[148px] rounded flex items-center gap-2 px-3"
                        >
                            <div className="bg-gray-400/30 w-6 h-6 rounded" />
                            <div className="bg-gray-400/30 h-4 w-20 rounded" />
                        </div>
                    ))}
                </div>

                <div></div>
                <div></div>
            </div>

            <div className="flex-1 bg-[#2E2E2E]" >
                <Outlet />
            </div>
        </div>
    )
}