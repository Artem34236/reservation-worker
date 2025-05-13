import { Link, useNavigate } from "react-router-dom"
import Input from "../../component/Input"
import { ChangeEvent, useEffect, useState } from "react"
import { API } from "../../axios/axios"
import { Category } from "../../types/type"
import Loading from "../../modalWindows/Loading"


type Props = {}

export default function Register_Company({ }: Props) {

    const [panding, setPanding] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [industry, setIndustry] = useState<Category[] | null>(null)
    const [password2, setPassword2] = useState<string>("")

    const navigate = useNavigate()


    useEffect(() => {

        async function getIndustry() {
            setPanding(true)
            await API.get('/industries/')
                .then(res => {
                    setPanding(false)
                    setIndustry(res.data)
                })
                .catch(err => {
                    setPanding(false)
                    console.log(err)
                })
        }
        getIndustry()

    }, [])


    const [aug, setAftorization] = useState({
        username: '',
        name: "",
        phone: "",
        password: "",
        industry: '',
        address: ""
    })

    function onSubmit(event: React.FormEvent) {
        event.preventDefault()

        if (aug.password !== password2) {
            setError(true)
            return
        }

        setPanding(true)
        API.post("company/register/", aug)
            .then(() => {
                setPanding(false)
                navigate('/sign_in')
            })
            .catch(err => {
                setPanding(false)
                console.log(err)
            })

        setAftorization({
            username: '',
            name: "",
            phone: "",
            password: "",
            industry: '',
            address: ""
        })

        setPassword2("")

    }

    function changeEV(ev: ChangeEvent<HTMLInputElement>, key: string) {
        const value = ev.target.value
        setError(false)

        if (key === 'username') {
            const isValid = /^[a-zA-Z0-9_]*$/.test(value)
            if (!isValid) return
        }

        setAftorization(prev => ({ ...prev, [key]: value }))
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
    }


    return (
        <div className="container min-h-fit bg-[#333333] md:h-[calc(100vh-92px)] h-[calc(100vh-70px)] xl:pt-[8vh] md:pt-[2vh] pt-[1vh]">

            <form onSubmit={onSubmit} className="flex flex-col rounded-2xl items-center w-max p-[20px] justify-center gap-[15px] bg-[#1B1429] m-auto">

                <div className="flex flex-col gap-[20px] lg:flex-row max-w-[800px] flex-wrap justify-center">

                    <Input
                        isRequired={true}
                        value={aug.username}
                        onChange={(ev) => changeEV(ev, 'username')}
                        img="/Register/Name.svg"
                        placeholder="Логин (en)"
                        type="text"
                    />

                    <Input
                        isRequired={true}
                        value={aug.name}
                        onChange={(ev) => changeEV(ev, 'name')}
                        img="/Register/Name.svg"
                        placeholder="Название компании"
                        type="text"
                    />

                    <Input
                        isRequired={true}
                        value={aug.phone}
                        onChange={handlePhoneChange}
                        img="/Register/Phone.svg"
                        placeholder="Номер"
                        type="text"
                    />

                    <Input
                        isRequired={true}
                        value={aug.password}
                        onChange={(ev) => changeEV(ev, 'password')}
                        img="/Register/Pass.svg"
                        placeholder="Пароль"
                        type="text"
                    />

                    <Input
                        isRequired={true}
                        value={password2}
                        onChange={(ev) => setPassword2(ev.target.value)}
                        img="/Register/Pass.svg"
                        placeholder="Повторить пароль"
                        type="text"
                    />

                    <select
                        required
                        value={aug.industry.toString()}
                        onChange={(ev: React.ChangeEvent<HTMLSelectElement>) => setAftorization(prev => ({ ...prev, industry: ev.target.value }))}
                        className="bg-[#3A2E4D] text-white outline-0 rounded-3xl px-4 py-3 w-full sm:w-[345px]"
                    >
                        <option value="" disabled hidden>
                            Сфера деятельности
                        </option>
                        {industry?.map((item, index) => (
                            <option key={index} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </select>

                    <Input
                        isRequired={true}
                        value={aug.address}
                        onChange={(ev) => changeEV(ev, 'address')}
                        img="/Register/Location.svg"
                        placeholder="Адрес"
                        type="text"
                    />

                </div>

                {error && <p className="text-red-600 text-[12px]">Пароли должны совпадать</p>}

                <button className="bg-[#E29038] mt-5 cursor-pointer text-white w-full md:py-[10px] py-[10px] md:text-[18px] text-[14px] md:rounded-3xl rounded-[10px]">Зарегистрироваться</button>


                <div className="flex items-center gap-x-1 w-full justify-end">
                    <p className="text-white md:text-[20px] text-[12px] font-[400]">Уже есть аккаунт?</p>
                    <Link to="/sign_in" className="text-[#E29038] md:text-[20px] text-[12px] font-[400]">Войти</Link>
                </div>

                {panding && <Loading />}

            </form>



        </div>
    )
}