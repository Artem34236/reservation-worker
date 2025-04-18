import { Link } from "react-router-dom"
import Card, { CardTop } from "../../component/Card"
import { Orange_Button, Orange_Link } from "../../component/Orange_button"

type Props = {}

export default function Company_history_page({ }: Props) {


    return (
        <div>

            <div className="bg-[#352B48] sm:py-[14px] py-[6px] sm:px-[40px] px-[6px] ">

                <form className="flex gap-4 lg:justify-end justify-between">

                    <label className="sm:py-[12px] py-[5px] sm:px-[18px] px-[12px] border-[1px] border-[#E5E5E5] rounded-[5px]" htmlFor="asdf">
                        <input placeholder="Начало" className="text-[#ffffff] outline-0 w-[90px]" id="asdf" type="text" />
                    </label>

                    <label className="sm:py-[12px] py-[5px] sm:px-[18px] px-[12px] border-[1px] border-[#E5E5E5] rounded-[5px]" htmlFor="asdf">
                        <input placeholder="Конец" className="text-[#ffffff] outline-0 w-[90px]" id="asdf" type="text" />
                    </label>

                    <Orange_Button to="none" text="Сортировка" />

                </form>

            </div>

            <div className="lg:p-[40px] p-[10px]">
                <div className="flex justify-between items-center border-b-[1px] border-[#E5E5E5] py-[12px]">
                    <h2 className="text-[#FFFFFF] lg:text-2xl text-[16px] font-bold">История</h2>
                </div>

                <div>
                    <CardTop elements={['Имя', 'Фамилия', 'Должность']} />
                </div>

                <div className="flex flex-col gap-[20px] mr-3">
                    <Card elements={['Вичеслав', "Андреевич", "Стоматолог"]} />
                </div>
            </div>

        </div>

    )
}