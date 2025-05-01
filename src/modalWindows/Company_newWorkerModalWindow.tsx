import { ChangeEvent, useState } from "react"
import Input from "../component/Input.tsx"
import useNoScroll from "../hooks/useNoScroll.ts"
import { API } from "../axios/axios.ts"


type Props = {
    closseModal: () => void
}

export default function Company_newWorkerModalWindow({ closseModal }: Props) {
    useNoScroll()

    const [aug, setAftorization] = useState({
        name: "",
        phone: "",
        username: "",
        industry: '',
        password: '',
        password2: '',
        client_duration_minutes: ''
    })

    function onSubmit(event: React.FormEvent) {
        event.preventDefault()

        API.post("/register/company/", aug)
            .then(a => console.log(a.data))
            
        setAftorization({
            name: "",
            phone: "",
            username: "",
            industry: '',
            password: '',
            password2: '',
            client_duration_minutes: ''
        })

    }

    return (
        <div className="bg-[#33333377] fixed w-full h-full top-0 left-0 z-[100] flex items-center justify-center">

            <form onSubmit={onSubmit} className="flex flex-col rounded-2xl items-center w-max p-[20px] justify-center gap-[15px] bg-[#1B1429] m-auto">

                <div className="flex w-full justify-end">
                    <button className="cursor-pointer" type="button" onClick={closseModal}>
                        <img className="w-[32px]" src="/User/Modal/Exit.svg" alt="" />
                    </button>
                </div>

                <div className="flex flex-col gap-[20px] lg:flex-row max-w-[800px] flex-wrap justify-center">

                    <Input
                        value={aug.username}
                        onChange={(ev: ChangeEvent<HTMLInputElement>) => setAftorization(prev => ({ ...prev, username: ev.target.value }))}
                        img="/Register/Work_type.svg" placeholder="Логин (en)" type="text" />

                    <Input
                        value={aug.name}
                        onChange={(ev: ChangeEvent<HTMLInputElement>) => setAftorization(prev => ({ ...prev, name: ev.target.value }))}
                        img="/Register/Name.svg" placeholder="Имя" type="text" />

                    <Input
                        value={aug.phone}
                        onChange={(ev: ChangeEvent<HTMLInputElement>) => setAftorization(prev => ({ ...prev, phone: ev.target.value }))}
                        img="/Register/Phone.svg" placeholder="Номер" type="text" />

                    <select
                        required
                        value={aug.industry.toString()}
                        onChange={(ev: React.ChangeEvent<HTMLSelectElement>) => setAftorization(prev => ({ ...prev, industry: ev.target.value }))}
                        className="bg-[#3A2E4D] text-white outline-0 rounded-3xl px-4 py-3 w-full sm:w-[345px]"
                    >
                        <option value="" disabled hidden>
                            Сфера деятельности
                        </option>
                        <option value="1">Медицина</option>
                        <option value="2">IT</option>
                        <option value="3">фываыфва</option>
                    </select>

                    <Input
                        isRequired={true}
                        value={aug.client_duration_minutes}
                        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setAftorization(prev => ({ ...prev, client_duration_minutes: ev.target.value }))}
                        img="/Register/Phone.svg"
                        placeholder="длительность сеанса (мин)"
                        type="number"
                    />

                    <Input
                        isRequired={true}
                        value={aug.password}
                        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setAftorization(prev => ({ ...prev, password: ev.target.value }))}
                        img="/Register/Pass.svg"
                        placeholder="Пароль"
                        type="text"
                    />

                    <Input
                        isRequired={true}
                        value={aug.password2}
                        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setAftorization(prev => ({ ...prev, password2: ev.target.value }))}
                        img="/Register/Pass.svg"
                        placeholder="Повторить пароль"
                        type="text"
                    />


                </div>

                <button className="bg-[#E29038] mt-5 cursor-pointer text-white w-full md:py-[10px] py-[10px] md:text-[18px] text-[14px] md:rounded-3xl rounded-[10px]">Забронировать</button>

            </form>



        </div>
    )
}