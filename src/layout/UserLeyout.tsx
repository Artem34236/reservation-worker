import { Outlet } from "react-router-dom"

type Props = {}

export default function UserLeyout({ }: Props) {
    return (
        <div className="container bg-[#333333] sm:min-h-[calc(100vh-68px)] md:min-h-[calc(100vh-92px)] min-h-[calc(100vh-68px)] lg:flex">

            <div className="flex-1">
                {<Outlet />}
            </div>

        </div>

    )
}