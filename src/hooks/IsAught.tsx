import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

type Props = {
    children: React.ReactNode
    type: 'company' | 'worker'
}

export default function IsAught({ children, type }: Props) {

    const aftoryzationTipe = localStorage.getItem('type') || 'user'
    const navigate = useNavigate()

    useEffect(() => {
        if (aftoryzationTipe != type) {
            sessionStorage.clear()
            navigate('/sign_in')
        }
    })

    return children

}