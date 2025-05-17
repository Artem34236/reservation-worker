import { ChangeEvent, useEffect, useState } from "react"
import useNoScroll from "../hooks/useNoScroll.ts"
import Input from "../component/Input.tsx"
import { useParams, useSearchParams } from "react-router-dom"
import { API } from "../axios/axios.ts"
import Loading from "./Loading.tsx"

type Props = {
    closseModal: () => void
    openModal: (t: boolean) => void
    selectedTime: string | null
    setTalon: (talon: { ID: string, date: string, time: string }) => void
}

export default function User_workerModalWindow({ closseModal, selectedTime, openModal, setTalon }: Props) {
    useNoScroll()

    const [search, _] = useSearchParams()
    const { WorkerId } = useParams<{ WorkerId: string }>()
    const [error, setError] = useState<boolean>(false)
    const [errorText, setErrorText] = useState<string>('')
    const [panding, setPending] = useState<boolean>(false)


    const [aug, setAftorization] = useState({
        worker: WorkerId,
        full_name: "",
        phone: "+996",
        comment: "",
        date: `${search.get('year')}-${search.get('month')}-${search.get('date')}`,
        time: selectedTime,
    })




    const [phoneError, setPhoneError] = useState<string>("")

    function onSubmit(event: React.FormEvent) {
        event.preventDefault()

        const phoneDigits = aug.phone.replace(/\D/g, "")
        if (!phoneDigits.startsWith("996") || phoneDigits.length !== 12) {
            setPhoneError("Введите корректный номер: +996XXXXXXXXX")
            return
        }


        async function reservation() {
            setPending(true)
            await API.post("reservations/create/", aug)
                .then((res) => {
                    closseModal()
                    setPending(false)
                    setTalon({
                        ID: res.data.ticket_number,
                        date: `${search.get('year')}-${search.get('month')}-${search.get('date')}`,
                        time: selectedTime || "",
                    })
                    openModal(true)
                })
                .catch((err) => {
                    setPending(false)
                    setErrorText(err.response.data.detail || err.response.data.non_field_errors || "Ошибка")
                    setError(true)
                })
        }

        reservation()

        setAftorization({
            worker: WorkerId,
            full_name: "",
            phone: "+996",
            comment: "",
            date: `${search.get('year')}-${search.get('month')}-${search.get('date')}`,
            time: selectedTime,
        })

        setPhoneError("")
    }

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
            setPhoneError("")
        }
    }

    useEffect(() => {
        if (error) {
            setError(false)
            setErrorText('')
        }
    }, [aug.full_name, aug.phone, aug.comment])

    return (
        <div className="bg-[#33333377] fixed w-full h-full top-0 left-0 z-[100] flex items-center justify-center">
            <form onSubmit={onSubmit} className="flex flex-col rounded-2xl items-center w-max p-[20px] justify-center gap-[15px] bg-[#1B1429] m-auto">
                <div className="flex w-full justify-end">
                    <button className="cursor-pointer" type="button" onClick={closseModal}>
                        <img className="w-[32px]" src="/User/Modal/Exit.svg" alt="Закрыть" />
                    </button>
                </div>

                <div className="flex flex-col gap-[20px] lg:flex-row max-w-[800px] flex-wrap justify-center">
                    <Input
                        isRequired={true}
                        value={aug.full_name}
                        onChange={(ev: ChangeEvent<HTMLInputElement>) =>
                            setAftorization(prev => ({ ...prev, full_name: ev.target.value }))
                        }
                        img="/Register/Name.svg"
                        placeholder="Имя"
                        type="text"
                    />

                    <div className="w-full lg:w-auto">
                        <Input
                            isRequired={true}
                            value={aug.phone}
                            onChange={handlePhoneChange}
                            img="/Register/Phone.svg"
                            placeholder="Номер (+996XXXXXXXXX)"
                            type="text"
                        />
                        {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
                    </div>

                    <Input
                        value={aug.comment}
                        onChange={(ev: ChangeEvent<HTMLInputElement>) =>
                            setAftorization(prev => ({ ...prev, comment: ev.target.value }))
                        }
                        img="/Register/Work_type.svg"
                        placeholder="Комментарий"
                        type="text"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-[#E29038] mt-5 cursor-pointer text-white w-full md:py-[10px] py-[10px] md:text-[18px] text-[14px] md:rounded-3xl rounded-[10px]"
                >
                    Забронировать
                </button>

                {error && (
                    <p className="text-red-500 text-sm text-center mt-3 max-w-md">
                        {errorText}
                    </p>
                )}
            </form>

            {panding && <Loading />}
        </div>
    )
}