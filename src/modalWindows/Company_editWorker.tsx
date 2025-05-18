import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react"
import Input from "../component/Input.tsx"
import useNoScroll from "../hooks/useNoScroll.ts"
import { API } from "../axios/axios.ts"
import { Category } from "../types/type.ts"
import Loading from "./Loading.tsx"


type Props = {
    closseModal: () => void
    setReload: Dispatch<SetStateAction<boolean>>
    id: number
}

export default function Company_editWorker({ closseModal, setReload, id }: Props) {



    useNoScroll()

    const [Error, setError] = useState<string>("")
    const [proffession, setProffession] = useState<Category[]>([])
    const [panding, setPanding] = useState<boolean>(false)

    const [aug, setAftorization] = useState({
        full_name: "",
        phone: "",
        profession: '',
        client_duration_minutes: '',
        work_start: '',
        work_end: ''
    })



    async function onSubmit(event: React.FormEvent) {
        event.preventDefault()

        const phoneDigits = aug.phone.replace(/\D/g, "")
        if (!phoneDigits.startsWith("996") || phoneDigits.length !== 12) {
            setError("Введите корректный номер: +996XXXXXXXXX")
            return
        }

        
        const [startHour, startMin] = aug.work_start.split(':').map(Number)
        const [endHour, endMin] = aug.work_end.split(':').map(Number)

        const start = startHour * 60 + startMin
        const end = endHour * 60 + endMin

        if (start >= end) {
            setError("Время начала работы не может быть позже или равно времени окончания.")
            return
        }

        setPanding(true)
        await API.patch(`/workers/${id}/update-delete/`, aug)
            .then(() => {
                closseModal()
                setReload(prev => !prev)
            })
            .catch(() => {
                setError('')
            })
            .finally(() => {
                setPanding(false)
            })

        setAftorization({
            full_name: "",
            phone: "",
            profession: '',
            client_duration_minutes: '',
            work_start: '',
            work_end: ''
        })
    }


    useEffect(() => {

        async function getProffession() {
            setPanding(true)
            const [workerRes, professionRes] = await Promise.all([
                API.get(`/workers/${id}/`),
                API.get(`/workers/professions/`)
            ])
            setProffession(professionRes.data)
            setAftorization(workerRes.data)

            setPanding(false)

        }
        getProffession()

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
            setError("")
        }
    }



    function changeEV(ev: ChangeEvent<HTMLInputElement>, key: string) {
        let value = ev.target.value
        setError('')

        if (key === 'username') {
            const isValid = /^[a-zA-Z0-9_]*$/.test(value)
            if (!isValid) return
        }

        if (key === 'work_start' || key === 'work_end') {
            value = value + ":00"
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

                    <Input
                        value={aug.work_start.slice(0, 5)}
                        onChange={(ev) => changeEV(ev, "work_start")}
                        img="/Compani/Company_modal_window/Start_time.svg"
                        placeholder="Начало работы"
                        type="time"
                    />

                    <Input
                        value={aug.work_end.slice(0, 5)}
                        onChange={(ev) => changeEV(ev, "work_end")}
                        img="/Compani/Company_modal_window/End_time.svg"
                        placeholder="Конец работы"
                        type="time"
                    />

                    <select
                        required
                        value={aug.profession.toString()}
                        onChange={(ev: React.ChangeEvent<HTMLSelectElement>) => setAftorization(prev => ({ ...prev, profession: ev.target.value }))}
                        className="bg-[#3A2E4D] text-white outline-0 rounded-3xl px-4 py-3 w-full sm:w-[345px]"
                    >
                        <option value="" disabled hidden>
                            Профессии
                        </option>

                        {proffession.map((item, index) => (
                            <option key={index} value={item.id}>
                                {item.name}
                            </option>
                        ))}

                    </select>

                    <Input
                        isRequired={true}
                        value={aug.client_duration_minutes}
                        onChange={(ev) => changeEV(ev, "client_duration_minutes")}
                        img="/Compani/Layout/History.svg"
                        placeholder="Длительность сеанса (мин)"
                        type="number"
                        min={1}
                        max={120}
                    />

                </div>

                {Error && (
                    <p className="text-red-500 text-sm text-center mt-3 max-w-md">
                        {Error}
                    </p>
                )}

                <button className="bg-[#E29038] mt-5 cursor-pointer text-white w-full md:py-[10px] py-[10px] md:text-[18px] text-[14px] md:rounded-3xl rounded-[10px]">Создать</button>

            </form>

            {panding && <Loading />}

        </div>
    )
}