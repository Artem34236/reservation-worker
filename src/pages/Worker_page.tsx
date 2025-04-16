import { useNavigate } from "react-router-dom"
import { useStore } from "../global_state"
import { useEffect } from "react"

type Props = {}

export default function Worker_page({ }: Props) {

    const navigate = useNavigate()
    const aftoryzationTipe = useStore((state) => state.aftorization.type)

    useEffect(() => {
        aftoryzationTipe == 'worker' ? null : navigate('/')
    })


    return (
        <div className="container bg-[#333333] sm:min-h-[calc(100vh-146px)] md:min-h-[calc(100vh-184.5px)] min-h-[calc(100vh-145px)] md:pt-[1vh] pt-[10vh]">

            <div>

            </div>

            <div className="h-full ">

            </div>

        </div>
    )

}