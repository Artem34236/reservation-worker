import { Link } from "react-router-dom"
import Input from "../component/Input"

type Props = {}

export default function Register_Company({ }: Props) {
    return (
        <div className="container min-h-fit bg-[#333333] sm:h-[calc(100vh-136px)] md:h-[calc(100vh-184.5px)] h-[calc(100vh-136px)] md:pt-[8vh] pt-[1vh]">

            <form className="flex flex-col rounded-2xl items-center w-max p-[20px] justify-center gap-[15px] bg-[#1B1429] m-auto">

                <div className="flex flex-col gap-[20px] lg:flex-row max-w-[800px] flex-wrap justify-center">

                    <Input img="/Register/Name.svg" placeholder="Название компании" type="text" />
                    <Input img="/Register/Phone.svg" placeholder="Номер" type="text" />
                    <Input img="/Register/Pass.svg" placeholder="Пароль" type="text" />
                    <Input img="/Register/Pass.svg" placeholder="Повторить пароль" type="text" />
                    <Input img="/Register/Work_type.svg" placeholder="Сфера деятельности" type="text" />
                    <Input img="/Register/Location.svg" placeholder="Адрес" type="text" />

                </div>

                <label className="inline-flex w-full justify-between items-center cursor-pointer">
                    
                    <input type="checkbox" value="" className="sr-only peer" />
                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Запомнить меня</span>
                    <div className="relative w-11 h-6 peer-focus:outline-none peer-focus:ring-4  dark:peer-focus:ring-[#1B1429] rounded-full peer dark:bg-[#FFFFFF] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-[#352B48] after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#352B48] after:border-[#352B48] after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-[#E29038]"></div>
                
                </label>

                <button className="bg-[#E29038] mt-5 cursor-pointer text-white w-full md:py-[10px] py-[10px] md:text-[18px] text-[14px] md:rounded-3xl rounded-[10px]">Зарегистрироваться</button>

                <div className="flex items-center gap-x-1 w-full justify-end">
                    <p className="text-white md:text-[20px] text-[12px] font-[400]">Уже есть аккаунт?</p>
                    <Link to="/sign_in" className="text-[#E29038] md:text-[20px] text-[12px] font-[400]">Войти</Link>
                </div>

            </form>



        </div>
    )
}