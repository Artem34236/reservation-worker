import { Link } from "react-router-dom"
import Card, { CardTop } from "../../component/Card"
import { Orange_Button, Orange_Link } from "../../component/Orange_button"

type Props = {}

export default function Company_worker_page({ }: Props) {


    return (
        <div>

            <div className="bg-[#352B48] sm:py-[14px] py-[6px] sm:px-[40px] px-[6px]">
                <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-between">

                    <label
                        htmlFor="asdf"
                        className="py-[5px] px-[12px] sm:py-[12px] sm:px-[18px] border border-[#E5E5E5] rounded-[8px] flex items-center justify-between flex-1 w-full sm:max-w-[296px]"
                    >
                        <input
                            id="asdf"
                            type="text"
                            placeholder="Поиск..."
                            className="text-white outline-none bg-transparent flex-1 w-full"
                        />
                        <img src="/Compani/Company_worker_page/Search.svg" alt="поиск" className="ml-2 min-w-[20px]" />
                    </label>

                    <div className="w-full sm:w-auto">
                        <Orange_Button to="none" text="Сортировка" className="w-full sm:w-auto md:p-4! p-2!" />
                    </div>

                </form>
            </div>

            <div className="lg:p-[40px] p-[10px]">
                <div className="flex justify-between items-center border-b-[1px] border-[#E5E5E5] py-[12px]">
                    <h2 className="text-[#FFFFFF] lg:text-2xl text-[16px] font-bold">Список работников</h2>
                    <Orange_Link className="w-[180px]! py-[10px]" text="Добавить работника" to="/company/worker/create" />
                </div>

                <div>
                    <CardTop elements={['Имя', 'Фамилия', 'Должность']} >
                        <div className="lg:w-[100px] w-[25px]"></div>
                    </CardTop>
                </div>

                <div className="flex flex-col gap-[20px] mr-3">

                    <Card elements={['Вичеслав', "Андреевич", "Стоматолог"]} >
                        <div className="flex flex-col lg:flex-row items-center sm:gap-[40px] gap-[10px]">
                            <Link to={'compani/worker/23/edit'}>
                                <img className="w-[20px] sm:min-w-[25px]" src="/Compani/Company_worker_page/Worker_edit.svg" alt="" />
                            </Link>
                            <Link to={'compani/worker/23/edit'}>
                                <img className="w-[20px] sm:min-w-[25px]" src="/Compani/Company_worker_page/Worker_deleate.svg" alt="" />
                            </Link>
                        </div>

                    </Card>

                </div>
            </div>

        </div>

    )
}