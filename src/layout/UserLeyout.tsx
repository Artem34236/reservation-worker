import { Outlet } from "react-router-dom"
import { Orange_Link } from "../component/Orange_button"

type Props = {}

export default function UserLeyout({ }: Props) {
    return (
        <div className="container bg-[#333333] sm:min-h-[calc(100vh-68px)] md:min-h-[calc(100vh-92px)] min-h-[calc(100vh-68px)] lg:flex">

            <div className="lg:w-[220px] w-[0] shrink-0" />

            <div className="bg-[#26222E] py-3 px-5 justify-center items-center flex lg:flex-col gap-2 lg:max-w-[220px] w-full lg:min-h-[calc(100vh-93px)] lg:max-h-[calc(100vh-124px)] lg:fixed">

                <div className="flex lg:flex-col sm:gap-3 gap-2 items-center sm:w-full w-[236px] justify-center lg:p-4 flex-wrap">
                    <Orange_Link to="company/?page=1" text="Компании" image="/User/Layout/CompanyIcon.svg" className="text-[#FFFFFF] flex sm:gap-2 gap-1.5 items-center sm:py-3 py-2! px-2! w-max! lg:w-[148px]!" />
                </div>

            </div>

            <div className="flex-1">
                {<Outlet />}
            </div>

        </div>

    )
}