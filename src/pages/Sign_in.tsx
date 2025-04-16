import { Link, useNavigate } from "react-router-dom"
import Input from "../component/Input"
import { useStore } from "../state/global_state"
import React from "react"

type Props = {}

export default function Sign_in({ }: Props) {

    const aftoryzationTipe = useStore((state) => state.aftorization.setIsAftorization)
    const navigate = useNavigate()

    function onSubmit(event: React.FormEvent) {
        event.preventDefault()
        aftoryzationTipe('company')
        navigate('/')
    }

    return (
        <div className="container bg-[#333333] min-h-fit sm:h-[calc(100vh-136px)] md:h-[calc(100vh-184.5px)] h-[calc(100vh-136px)] md:pt-[1vh] pt-[10vh]">

            <form onSubmit={onSubmit} className="flex flex-col rounded-2xl items-center w-max md:p-[36px] p-[20px] justify-center gap-[20px] bg-[#1B1429] m-auto">

                <div className="flex flex-col md:gap-[20px] gap-[14px]">

                    <Input img="/Register/Name.svg" placeholder="Имя" type="text" />
                    <Input img="/Register/Pass.svg" placeholder="Пароль" type="text" />

                </div>

                <label className="inline-flex w-full justify-between items-center cursor-pointer">
                    
                    <input type="checkbox" value="" className="sr-only peer" />
                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Запомнить меня</span>
                    <div className="relative w-11 h-6 peer-focus:outline-none peer-focus:ring-4  dark:peer-focus:ring-[#1B1429] rounded-full peer dark:bg-[#FFFFFF] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-[#352B48] after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#352B48] after:border-[#352B48] after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-[#E29038]"></div>
                
                </label>

                <button className="bg-[#E29038] cursor-pointer mt-5 text-white w-full md:py-[15px] py-[10px] md:text-[22px] text-[14px] md:rounded-3xl rounded-[10px]">Войти</button>


                <div className="flex items-center gap-x-1 w-full justify-end">
                    <p className="text-white md:text-[20px] text-[12px] font-[400]">Нет аккаунта?</p>
                    <Link to="/reg_com" className="text-[#E29038] md:text-[20px] text-[12px] font-[400]">Создать </Link>
                </div>

            </form>

        </div>
    )
}