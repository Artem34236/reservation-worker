import { Link, useNavigate } from "react-router-dom"
import Orange_button from "./Orange_button"
import { useStore } from "../state/global_state"

type Props = {}

export default function Header({ }: Props) {

    const navigate = useNavigate()
    const aftoryzationTipe = useStore((state) => state.aftorization.type)

    return (
        <div className="container z-10 bg-[#333333] md:px-[50px] px-[20px] flex justify-between items-center md:py-[30px] py-[20px] sticky top-[1px]">
            <Link to="/">
                <img className="md:w-[150px] w-[80px]" src="/Logo.png" alt="" />
            </Link>
            {aftoryzationTipe != 'user' ?
                <Link to={`/${aftoryzationTipe}/account`}>
                    <img className="w-7 md:w-12" src="/Header/User_logo.svg" alt="" />
                </Link>
                : <Orange_button Click={() => navigate('/sign_in')} text="Вход" className="md:text-[22px]" />}
        </div>
    )
}