import { Outlet } from "react-router-dom"
import { Orange_Link } from "../component/Orange_button"
import { useStore } from "../state/globalState"
import { useEffect, useState } from "react"
import Company_layout_sceleton from "../Skeleton/Company_layout_sceleton"


type Props = {}

export default function WorkerLeyout({ }: Props) {

    const [loading, setLoading] = useState(false)
    const { worker } = useStore()

    useEffect(() => {

        async function getCompany() {
            setLoading(true)
            try {
                await worker.loadWorker()
            } catch (err) {
                console.error("Ошибка при загрузке данных:", err)
            } finally {
                setLoading(false)
            }
        }
        getCompany()

    }, [])

    function logOut() {

        localStorage.clear()
        window.location.href = "/"

    }

    return (
        !loading ?
            <div className="container bg-[#333333] sm:min-h-[calc(100vh-68px)] md:min-h-[calc(100vh-92px)] min-h-[calc(100vh-68px)] lg:flex">

                <div className="lg:w-[220px] w-[0] shrink-0" />

                <div className="bg-[#26222E] py-3 px-5 justify-between items-center flex lg:flex-col gap-2 lg:max-w-[220px] w-full sm:min-h-[calc(100vh-68px)] md:min-h-[calc(100vh-92px)] min-h-[calc(100vh-68px)] lg:fixed">

                    <div className="flex lg:flex-col px-5 items-center justify-center gap-3">
                        <img className="lg:w-[150px] w-[50px]" src="/Worker/BaseIcon.svg" alt="" />
                        <h3 className="text-white font-bold text-2xl">{worker.data.worker?.full_name}</h3>
                    </div>

                    <div className="flex lg:flex-col sm:gap-3 gap-2 items-center sm:w-full w-[236px] justify-center lg:p-4 flex-wrap">
                        <Orange_Link to="reservation" text="В очереди" image="/Compani/Layout/SmallCompaniIcon.svg" className="text-[#FFFFFF] flex gap-2 items-center py-3!" />
                        <Orange_Link to="acc" text="Аккаунт" image="/Compani/Layout/Accaunt.svg" className="text-[#FFFFFF] flex gap-2 items-center py-3!" />
                    </div>

                    <div></div>
                    
                    <button onClick={() => logOut()} className="cursor-pointer">
                        <img width={22} src="/logout.svg" alt="" />
                    </button>

                </div>

                <div className="flex-1">
                    {<Outlet />}
                </div>

            </div>
            :
            <Company_layout_sceleton />

    )

}