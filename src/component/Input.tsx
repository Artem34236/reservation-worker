import { InputHTMLAttributes } from "react";

type Props = {
    img?: string
    placeholder: string
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'search' | 'url' | 'date' | 'time'
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    value?: string | number
    isRequired?: boolean
}  & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ img, placeholder, type, onChange, value, isRequired = false, ...array }: Props) {
    return (
        <label className="bg-[#352B48] flex items-center md:gap-x-3 gap-x-2 p-3 rounded-3xl">
            {img && <img className="md:w-6 w-5 md:h-6 h-5" src={img} alt="" />}
            <input {...array} required={isRequired} value={value} onChange={onChange} className="md:text-[12px] border-0 outline-0 text-white md:w-2xs w-46" type={type || "text"} placeholder={placeholder} />
        </label>
    )
}