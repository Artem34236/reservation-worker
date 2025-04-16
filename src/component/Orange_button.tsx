import { Link } from "react-router-dom"


type Props = {
    text: string
    image?: string
    className?: string
    to: string
}

export default function Orange_button({ text, image, className, to }: Props) {
    return (
        <Link to={to} className={`cursor-pointer rounded-[4px] hover:bg-[#F4631AFE] transition hover:text-[#FFFFFF] duration-[0.5s] py-[3px] px-[20px] gap-[15px] text-[#E29038] text-[14px] block ${className}`}>
            {image && <img src={image} />}
            {text}
        </Link>
    )
}