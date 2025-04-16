import { Outlet } from "react-router-dom"
import Orange_button from "../component/Orange_button"

type Props = {}

export default function CampaniLeyout({ }: Props) {
    return (
        <div className="container bg-[#333333] sm:min-h-[calc(100vh-136px)] md:min-h-[calc(100vh-204px)] min-h-[calc(100vh-136px)] flex">

            <div className=" bg-[#26222E] justify-center items-center flex flex-col gap-2 max-w-[220px] w-full min-h-[calc(100vh-240px)] max-h-[calc(100vh-129px)] sticky top-[126px]">

                <div className="flex flex-col gap-2 items-center justify-center w-full p-4">
                    <Orange_button to="/company/reservation" text="Выбрать" image="/Compani/Layout/SmallCompaniIcon.svg" className="text-[#FFFFFF] flex gap-2 items-center py-3!" />
                </div>

            </div>

            <div className="flex-1">
                {<Outlet />}
            </div>

        </div>

    )
}