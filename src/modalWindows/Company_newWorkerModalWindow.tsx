import { ChangeEvent, useEffect, useState } from "react"
import Input from "../component/Input.tsx"
import useNoScroll from "../hooks/useNoScroll.ts"
import { API } from "../axios/axios.ts"
import { Proffession } from "../types/type.ts"
import Loading from "./Loading.tsx"


type Props = {
    closseModal: () => void
}

export default function Company_newWorkerModalWindow({ closseModal }: Props) {
    useNoScroll()

    const [Error, setError] = useState<string>(" ")
    // const [proffession, setProffession] = useState<Proffession[]>([])
    const [panding, setPanding] = useState<boolean>(false)

    const [aug, setAftorization] = useState({
        full_name: "",
        phone: "",
        username: "",
        industry: '',
        password: '',
        password2: '',
        client_duration_minutes: ''
    })



    async function onSubmit(event: React.FormEvent) {
        event.preventDefault()

        const phoneDigits = aug.phone.replace(/\D/g, "")
        if (!phoneDigits.startsWith("996") || phoneDigits.length !== 12) {
            setError("Введите корректный номер: +996XXXXXXXXX")
            return
        }

        if (aug.password !== aug.password2) {
            setError("Пароли не совпадают");
            return;
        }


        setPanding(true)
        await API.post("/workers/add/", aug)
            .then(a => console.log(a.data))
            .catch(err => {
                console.log(err)
                setError("Ошибка при регистрации работника")
            })
            .finally(() => {
                setPanding(false)
            })

        setAftorization({
            full_name: "",
            phone: "",
            username: "",
            industry: '',
            password: '',
            password2: '',
            client_duration_minutes: ''
        })

    }


    useEffect(() => {

        async function getIndustry() {
            setPanding(true)
            await API.get("/workers/professions/")
                .then(res => {
                    // setProffession(res.data)
                    console.log(res.data);
                })
                .finally(() => {
                    setPanding(false)
                })
        }
        getIndustry()

    }, [])


    const handlePhoneChange = (ev: ChangeEvent<HTMLInputElement>) => {
        let value = ev.target.value.replace(/\D/g, "")

        if (!value.startsWith("996")) {
            value = "996" + value
        }

        if (value.length > 12) {
            value = value.slice(0, 12)
        }

        const formatted = `+${value}`
        setAftorization((prev) => ({ ...prev, phone: formatted }))

        if (value.length === 12) {
            setError(" ")
        }
    }



    function changeEV(ev: ChangeEvent<HTMLInputElement>, key: string) {
        const value = ev.target.value
        setError(' ')

        if (key === 'username') {
            const isValid = /^[a-zA-Z0-9_]*$/.test(value)
            if (!isValid) return
        }

        setAftorization(prev => ({ ...prev, [key]: value }))
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
                        onChange={(ev) => changeEV(ev, "username")}
                        img="/Register/Work_type.svg"
                        placeholder="Логин (en)"
                        type="text"
                    />

                    <Input
                        value={aug.full_name}
                        onChange={(ev) => changeEV(ev, "full_name")}
                        img="/Register/Name.svg"
                        placeholder="Имя"
                        type="text"
                    />

                    <Input
                        value={aug.phone}
                        onChange={handlePhoneChange}
                        img="/Register/Phone.svg"
                        placeholder="Номер"
                        type="text"
                    />

                    <select
                        required
                        value={aug.industry.toString()}
                        onChange={(ev: React.ChangeEvent<HTMLSelectElement>) => setAftorization(prev => ({ ...prev, industry: ev.target.value }))}
                        className="bg-[#3A2E4D] text-white outline-0 rounded-3xl px-4 py-3 w-full sm:w-[345px]"
                    >
                        <option value="" disabled hidden>
                            Профессия
                        </option>

                        <option value="1">
                            фыв
                        </option>

                    </select>

                    <Input
                        isRequired={true}
                        value={aug.client_duration_minutes}
                        onChange={(ev) => changeEV(ev, "client_duration_minutes")}
                        img="/Compani/Layout/History.svg"
                        placeholder="Длительность сеанса (мин)"
                        type="number"
                    />

                    <Input
                        isRequired={true}
                        value={aug.password}
                        onChange={(ev) => changeEV(ev, "password")}
                        img="/Register/Pass.svg"
                        placeholder="Пароль"
                        type="text"
                    />

                    <Input
                        isRequired={true}
                        value={aug.password2}
                        onChange={(ev) => changeEV(ev, "password2")}
                        img="/Register/Pass.svg"
                        placeholder="Повторить пароль"
                        type="text"
                    />


                </div>

                {Error && (
                    <p className="text-red-500 text-sm text-center mt-3 max-w-md">
                        {Error}
                    </p>
                )}

                <button className="bg-[#E29038] mt-5 cursor-pointer text-white w-full md:py-[10px] py-[10px] md:text-[18px] text-[14px] md:rounded-3xl rounded-[10px]">Забронировать</button>

            </form>

            {panding && <Loading />}

        </div>
    )
}