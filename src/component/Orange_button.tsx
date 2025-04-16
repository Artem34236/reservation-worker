

type Props = {
    text: string
    image?: string
    className?: string
    Click?: (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default function Orange_button({ text, image, className, Click }: Props) {
    return (
        <button onClick={Click ? ev => Click(ev) : undefined} className={`cursor-pointer rounded-[4px] hover:bg-[#F4631AFE] transition hover:text-[#FFFFFF] duration-[0.5s] py-[3px] px-[20px] gap-[15px] text-[#E29038] text-[14px] block ${className}`}>
            {image && <img src={image} />}
            {text}
        </button>
    )
}