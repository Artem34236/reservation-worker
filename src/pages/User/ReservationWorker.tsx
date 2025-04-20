import { useState } from "react";
import Card, { CardTop } from "../../component/Card"
import { Orange_Button } from "../../component/Orange_button"

type Props = {}

export default function ReservationWorker({ }: Props) {

    const [sphere, setSphere] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSphere(e.target.value);
    };

    return (
        <div>

            <div className="bg-[#352B48] sm:py-[14px] py-[6px] sm:px-[40px] px-[6px]">
                <form className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                    <label
                        className="sm:py-[12px] py-[5px] sm:px-[18px] px-[12px] border-[1px] border-[#E5E5E5] rounded-[8px] flex items-center justify-between flex-1 max-w-full sm:max-w-[296px]"
                        htmlFor="asdf"
                    >
                        <input
                            placeholder="Поиск..."
                            className="text-[#ffffff] outline-0 w-full bg-transparent"
                            id="asdf"
                            type="text"
                        />
                        <img src="/Compani/Company_worker_page/Search.svg" alt="" />
                    </label>

                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">

                        <select
                            value={sphere}
                            onChange={handleChange}
                            className="bg-[#3A2E4D] text-white border outline-0 border-[#CFCFCF] rounded-[8px] px-4 py-2 w-full sm:w-[180px]"
                        >
                            <option value="" disabled hidden>
                                Сфера
                            </option>
                            <option value="med">Медицина</option>
                            <option value="edu">Образование</option>
                            <option value="it">IT</option>
                        </select>

                        <Orange_Button to="none" text="Сортировка" className="w-full sm:w-auto md:p-4! p-2!" />
                    </div>
                </form>
            </div>

            <div className="lg:p-[40px] p-[10px] flex flex-col gap-3">
                <div className="flex justify-between items-center border-b-[1px] border-[#E5E5E5] py-[12px]">
                    <h2 className="text-[#FFFFFF] lg:text-2xl text-[16px] font-bold">Компании</h2>
                </div>

                <div>
                    <CardTop elements={['Имя', 'Номер', 'Адрес']} />
                </div>

                <div className="flex flex-col gap-[20px] mr-3">
                    <Card imageCss="w-[58px] h-[58px]" image="/Compani/BaseIcon.svg" elements={['Компания: ooo “ТМЫВДЕНЕГ”', "+7 555 555 555", "Гп Айтиева / 72"]} />
                </div>
            </div>

        </div>

    )
}