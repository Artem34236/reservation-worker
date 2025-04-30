import { ChangeEvent, useState } from "react"

import useNoScroll from "../hooks/useNoScroll.ts"
import Input from "../component/Input.tsx"


type Props = {
    closseModal: () => void
}

export default function User_workerModalWindow({ closseModal }: Props) {
    useNoScroll()

    const [aug, setAftorization] = useState({
        name: "",
        phone: "",
        comment: "",
    })

    function onSubmit(event: React.FormEvent) {
        event.preventDefault()
        // api.post("/auth/register", {
        //     data: {
        //         aug
        //     }
        // })
    }

    return (
        <div className="bg-[#33333377] fixed w-full h-full top-0 left-0 z-[100] flex items-center justify-center">

            <form onSubmit={onSubmit} className="flex flex-col rounded-2xl items-center w-max p-[20px] justify-center gap-[15px] bg-[#1B1429] m-auto">

                <div className="flex w-full justify-end">
                    <button className="cursor-pointer" onClick={closseModal}>
                        <img className="w-[32px]" src="/User/Modal/Exit.svg" alt="" />
                    </button>
                </div>

                <div className="flex flex-col gap-[20px] lg:flex-row max-w-[800px] flex-wrap justify-center">

                    <Input value={aug.name} onChange={(ev: ChangeEvent<HTMLInputElement>) => setAftorization(prev => ({ ...prev, name: ev.target.value }))} img="/Register/Name.svg" placeholder="Имя" type="text" />
                    <Input value={aug.phone} onChange={(ev: ChangeEvent<HTMLInputElement>) => setAftorization(prev => ({ ...prev, phone: ev.target.value }))} img="/Register/Phone.svg" placeholder="Номер" type="text" />
                    <Input value={aug.comment} onChange={(ev: ChangeEvent<HTMLInputElement>) => setAftorization(prev => ({ ...prev, comment: ev.target.value }))} img="/Register/Work_type.svg" placeholder="Коментарий" type="text" />

                </div>

                <button className="bg-[#E29038] mt-5 cursor-pointer text-white w-full md:py-[10px] py-[10px] md:text-[18px] text-[14px] md:rounded-3xl rounded-[10px]">Забронировать</button>

            </form>



        </div>
    )
}