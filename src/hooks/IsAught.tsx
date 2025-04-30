import { useNavigate } from "react-router-dom"
import { useStore } from "../state/global_state"
import { useEffect } from "react"

type Props = {
    children: React.ReactNode
    type: 'company' | 'worker'
}

export default function IsAught({ children, type }: Props) {

    const aftoryzationTipe = useStore((state) => state.aftorization.type)
    const navigate = useNavigate()

    useEffect(() => {
        if (aftoryzationTipe != type) {
            sessionStorage.clear()
            navigate('/sign_in')
        }
    })
   
    return children

}