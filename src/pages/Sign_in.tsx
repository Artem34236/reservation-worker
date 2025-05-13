import { Link, useNavigate } from "react-router-dom"
import Input from "../component/Input"
import React, { useState } from "react"
import { API_NOT_INTERSEPTORS } from "../axios/axios"
import Loading from "../modalWindows/Loading"

type Props = {}

export default function Sign_in({ }: Props) {

    const [panding, setPanding] = useState(false)
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const [aug, setAftorization] = useState({
        username: "",
        password: "",
    })
    

    async function onSubmit(event: React.FormEvent) {
        event.preventDefault()

        setPanding(true)
        await API_NOT_INTERSEPTORS.post('/company/login/', aug)
            .then(res => {

                localStorage.setItem('access', res.data.access)
                localStorage.setItem('refresh', res.data.refresh)
                localStorage.setItem('type', (res.data.company_id ? "company" : "worker"))

                setPanding(false)

                navigate('/')
            })
            .catch(() => {
                setPanding(false)
                setAftorization({
                    username: "",
                    password: "",
                })
                setError("Неверный логин или пароль")
            })

    }

    function onChange(event: React.ChangeEvent<HTMLInputElement>, key: string) {

        setError('')
        setAftorization(prev => ({ ...prev, [key]: event.target.value }))

    }


    return (
        <div className="container bg-[#333333] min-h-fit md:h-[calc(100vh-92px)] h-[calc(100vh-70px)] md:pt-[1vh] pt-[10vh]">

            <form onSubmit={onSubmit} className="flex flex-col rounded-2xl items-center w-max md:p-[36px] p-[20px] justify-center gap-[20px] bg-[#1B1429] m-auto">

                <div className="flex flex-col md:gap-[20px] gap-[14px]">

                    <Input
                        isRequired={true}
                        value={aug.username}
                        img="/Register/Name.svg"
                        onChange={(ev) => onChange(ev, 'username')}
                        placeholder="Имя"
                        type="text"
                    />

                    <Input
                        isRequired={true}
                        value={aug.password}
                        img="/Register/Pass.svg"
                        onChange={(ev) => onChange(ev, 'password')}
                        placeholder="Пароль"
                        type="text"
                    />

                </div>

                {error && (
                    <p className="text-red-500 text-sm text-center max-w-md">
                        {error}
                    </p>
                )}

                <button className="bg-[#E29038] cursor-pointer text-white w-full md:py-[15px] py-[10px] md:text-[22px] text-[14px] md:rounded-3xl rounded-[10px]">Войти</button>


                <div className="flex items-center gap-x-1 w-full justify-end">
                    <p className="text-white md:text-[20px] text-[12px] font-[400]">Нет аккаунта?</p>
                    <Link to="/reg_com" className="text-[#E29038] md:text-[20px] text-[12px] font-[400]">Создать </Link>
                </div>

            </form>

            {panding && <Loading />}

        </div>
    )
}