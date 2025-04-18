import { Link } from "react-router-dom"


type Props = {
    text: string
    image?: string
    className?: string
    to: string
    onClick?: () => void
}

export function Orange_Link({ text, image, className, to }: Props) {
    return (
        <Link to={to} className={`text-center cursor-pointer rounded-[4px] hover:bg-[#F4631AFE] transition hover:text-[#FFFFFF] duration-[0.5s] py-[3px] px-[20px] gap-[15px] text-[#E29038] w-[148px] text-[14px] block ${className}`}>
            {image && <img src={image} />}
            {text}
        </Link>
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