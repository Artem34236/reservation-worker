import { Link } from "react-router-dom"
import P_H3_Link from "../../component/P_H3_Link"
import Card, { CardTop } from "../../component/Card"
import { useState } from "react";
import { Orange_Button } from "../../component/Orange_button";

type Props = {}

export default function User_company_page({ }: Props) {

   const [sphere, setSphere] = useState("");
  
      const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
          setSphere(e.target.value);
      };

  return (
    <div className="lg:px-[20px] rounded-[20px]">
      <div className="bg-[#352B48] sg:p-[40px] p-[10px] sm:p-[15px]">

        <div className="flex gap-[40px] lg:items-start items-center justify-between sm:flex-row flex-col">

          <div className="flex flex-col items-center max-w-[216px] gap-8" >

            <img className="xl:min-w-[200px] sm:min-w-[140px] min-w-[120px] w-[120px]" src="/Compani/BaseIcon.svg" alt="" />

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px]">
            <P_H3_Link isEdit={false} p="Имя" h3="Сucumber Cumcumich" link={'/edit'} />
            <P_H3_Link isEdit={false} p="Почта" h3="asdada@gmail.com" link={'/edit'} />
            <P_H3_Link isEdit={false} p="Адрес" h3="Гп Айтиева 72" link={'/edit'} />
            <P_H3_Link isEdit={false} p="Сфера деятельности" h3="Медицина" link={'/edit'} />
          </div>

        </div>
      </div>

      <div className="lg:p-[40px] p-[10px] flex flex-col gap-3">

        <div className="flex justify-between items-center sm:flex-row flex-col border-b-[1px] border-[#E5E5E5] py-[12px]">

          <h2 className="text-[#FFFFFF] lg:text-2xl text-[16px] font-bold">Сотрудники</h2>



          <div className="sm:py-[14px] py-[6px] sm:px-[40px] px-[6px]">
            <form className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

              <label
                className="sm:py-[12px] bg-[#352B48] py-[5px] sm:px-[18px] px-[12px] border-[1px] border-[#E5E5E5] rounded-[8px] flex items-center justify-between flex-1 max-w-full sm:max-w-[296px]"
                htmlFor="asdf"
              >
                <input
                  placeholder="Поиск..."
                  className="text-[#ffffff] outline-0 w-full"
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
                    Профессия
                  </option>
                  <option value="Ортопед">Ортопед</option>
                  <option value="Зубная фея">Зубная фея</option>
                  <option value="Хирург">Хирург</option>
                </select>

                <Orange_Button to="none" text="Сортировка" className="w-full sm:w-auto md:p-4! p-2!" />
              </div>
            </form>
          </div>


        </div>

        <div>
          <CardTop elements={['Имя', 'Номер', 'Должность','Время начала приёма']} />
        </div>

        <div className="flex flex-col gap-[20px] mr-3">
          <Link to="/user/company/12/12" className="w-full">
            <Card elements={['Вичеслав', "+7 555 555 555", "Стоматолог",'08:30']} />
          </Link>
        </div>
      </div>

    </div>
  )
}