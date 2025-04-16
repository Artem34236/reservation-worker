import { Link } from "react-router-dom"

type Props = {}

export default function Footer({ }: Props) {
    return (
        <div className="container bg-[#333333] md:px-[50px] px-[20px] flex justify-between items-center nd:py-[30px] py-[20px]">
            <Link to="/">
                <img className="md:w-[150px] w-[80px]" src="/Logo.png" alt="" />
            </Link>
            <h1 className="md:text-[24px] text-[14px] font-[700] text-[#FFFFFF]">Компания: ooo “ТМЫВДЕНЕГ”</h1>
        </div>
    )
}