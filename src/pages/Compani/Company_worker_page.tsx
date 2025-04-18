import { Link } from "react-router-dom"
import Card, { CardTop } from "../../component/Card"
import { Orange_Button, Orange_Link } from "../../component/Orange_button"

type Props = {}

export default function Company_worker_page({ }: Props) {


    return (
        <div>

            <div className="bg-[#352B48] sm:py-[14px] py-[6px] sm:px-[40px] px-[6px] ">

                <form className="flex gap-4 lg:justify-end justify-between">
                    <label className="sm:py-[12px] py-[5px] sm:px-[18px] px-[12px] border-[1px] flex-1 border-[#E5E5E5] items-center justify-between rounded-[8px] flex max-w-[296px]" htmlFor="asdf">
                        <input placeholder="Поиск..." className="text-[#ffffff] outline-0 sm:w-auto w-[100px] flex-1" id="asdf" type="text" />
                        <img src="/Compani/Company_worker_page/Search.svg" alt="" />
                    </label>

                    <Orange_Button to="none" text="Сортировка" />

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