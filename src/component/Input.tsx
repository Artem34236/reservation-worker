
type Props = {
    img?: string
    placeholder: string
    type?: 'text' | 'email' | 'password'
}

export default function Input({ img, placeholder, type }: Props) {
    return (
        <label className="bg-[#352B48] flex items-center md:gap-x-3 gap-x-2 p-3 rounded-3xl">
            { img && <img className="md:w-6 w-5 md:h-6 h-5" src={img} alt="" />}
            <input className="md:text-[12px] border-0 outline-0 text-white md:w-2xs w-46" type={type || "text"} placeholder={placeholder} />
        </label>
    )
}