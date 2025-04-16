import { useNavigate } from "react-router-dom"
import { useStore } from "../global_state"
import { useEffect } from "react"

type Props = {}

export default function Company_page({ }: Props) {

    const navigate = useNavigate()

    const aftoryzationTipe = useStore((state) => state.aftorization.type)

    useEffect(() => {
        aftoryzationTipe == 'company' ? null : navigate('/')
    })


    return (
        <div className="container bg-[#333333] min-h-fit sm:h-[calc(100vh-146px)] md:h-[calc(100vh-184.5px)] h-[calc(100vh-145px)] md:pt-[1vh] pt-[10vh]">

        </div>
    )
}