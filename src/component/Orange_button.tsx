import { NavLink } from "react-router-dom"


type Props = {
    text: string
    image?: string
    className?: string
    to: string
    onClick?: () => void
    isNavLink?: boolean
}

export function Orange_Link({ text, image, className, to }: Props) {
    return (
        <NavLink to={to} className={({ isActive }) => isActive ? `bg-[#F4631AFE] text-[#FFFFFF] text-center cursor-pointer rounded-[4px] py-[3px] px-[20px] gap-[15px] justify-center ${className}` : `text-center justify-center cursor-pointer rounded-[4px] hover:bg-[#F4631AFE] transition hover:text-[#FFFFFF] duration-[0.5s] py-[3px] px-[20px] gap-[15px] text-[#E29038] w-[148px] text-[14px] block ${className}`}>
            {image && <img src={image} />}
            {text}
        </NavLink>
    )
}

export function Orange_Button({ text, image, className, onClick }: Props) {
    return (
        <button onClick={onClick} className={`cursor-pointer rounded-[4px] hover:bg-[#F4631AFE] transition hover:text-[#FFFFFF] duration-[0.5s] py-[3px] px-[20px] gap-[15px] text-[#E29038] w-[148px] text-[14px] block ${className}`}>
            {image && <img src={image} />}
            {text}
        </button>
    )
}