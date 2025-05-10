import { Link } from "react-router-dom"
import { Orange_Link } from "./Orange_button"

type Props = {}

export default function Header({ }: Props) {

    const type = localStorage.getItem('type') || 'user'

    return (
        <div className="container z-10 bg-[#333333] md:px-[50px] px-[20px] flex justify-between items-center py-[20px] sticky top-[0]">
            <Link to="/">
                <img className="md:w-[150px] w-[80px]" src="/Logo.png" alt="" />
            </Link>
            {type != 'user' ?
                <Link to={`/${type}/acc`}>
                    <img className="w-7 md:w-12" src="/Header/User_logo.svg" alt="" />
                </Link>
                : <Orange_Link to="/sign_in" text="Вход" className="md:text-[22px]" />}
        </div>
    )
}