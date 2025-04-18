import { Outlet } from "react-router-dom"
import { Orange_Link } from "../component/Orange_button"

type Props = {}

export default function CampaniLeyout({ }: Props) {
    return (
        <div className="container bg-[#333333] sm:min-h-[calc(100vh-136px)] md:min-h-[calc(100vh-204px)] min-h-[calc(100vh-136px)] lg:flex">

            <div className="lg:w-[220px] w-[0] shrink-0" />

            <div className="bg-[#26222E] py-3 px-5 justify-between items-center flex lg:flex-col gap-2 lg:max-w-[220px] w-full lg:min-h-[calc(100vh-110px)] lg:max-h-[calc(100vh-124px)] lg:fixed">

                <div className="flex lg:flex-col px-5 items-center justify-center gap-3">
                    <img className="lg:w-[150px] w-[50px]" src="/Compani/BaseIcon.svg" alt="" />
                    <h3 className="text-white font-bold text-2xl">Name</h3>
                </div>

                <div className="flex lg:flex-col sm:gap-3 gap-2 items-center sm:w-full w-[236px] justify-center lg:p-4 flex-wrap">
                    <Orange_Link to="/company/worker" text="Работники" image="/Compani/Layout/Worker.svg" className="text-[#FFFFFF] flex sm:gap-2 gap-1.5 items-center sm:py-3 py-2! px-2! w-max! lg:w-[148px]!" />
                    <Orange_Link to="/company/acc" text="Акаунт" image="/Compani/Layout/Accaunt.svg" className="text-[#FFFFFF] flex sm:gap-2 gap-1.5 items-center sm:py-3 py-2! px-2! w-max! lg:w-[148px]!" />
                    <Orange_Link to="/company/history" text="История" image="/Compani/Layout/History.svg" className="text-[#FFFFFF] flex sm:gap-2 gap-1.5 items-center sm:py-3 py-2! px-2! w-max! lg:w-[148px]!" />
                </div>

                <div></div>
                <div></div>

            </div>

            <div className="flex-1">
                {<Outlet />}
            </div>

        </div>

    )
}