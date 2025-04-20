import Card, { CardTop } from "../../component/Card"
import { Orange_Button } from "../../component/Orange_button"

type Props = {}

export default function Company_history_page({ }: Props) {


    return (
        <div>

            <div className="bg-[#352B48] sm:py-[14px] py-[6px] sm:px-[40px] px-[6px]">
                <form className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">

                    <label className="flex items-center gap-2 sm:py-[12px] py-[5px] sm:px-[18px] px-[12px] border border-[#E5E5E5] rounded-[5px]">
                        <input
                            placeholder="Начало (00 : 00)"
                            className="bg-transparent text-white outline-none w-[130px]"
                            type="text"
                        />
                    </label>

                    <label className="flex items-center gap-2 sm:py-[12px] py-[5px] sm:px-[18px] px-[12px] border border-[#E5E5E5] rounded-[5px]">
                        <input
                            placeholder="Конец (00 : 00)"
                            className="bg-transparent text-white outline-none w-[130px]"
                            type="text"
                        />
                    </label>

                    <div className="w-full sm:w-auto">
                        <Orange_Button to="none" text="Сортировка" className="w-full sm:w-auto md:p-4! p-2!" />
                    </div>

                </form>
            </div>


            <div className="lg:p-[40px] p-[10px] flex flex-col gap-3">
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