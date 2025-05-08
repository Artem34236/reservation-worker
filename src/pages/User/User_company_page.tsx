import { Link, useParams, useSearchParams } from "react-router-dom"
import P_H3_Link from "../../component/P_H3_Link"
import Card, { CardTop } from "../../component/Card"
import { useEffect, useState } from "react";
import { Orange_Button } from "../../component/Orange_button";
import { API } from "../../axios/axios";
import { Companys, Workers } from "../../types/type";
import { User_company_page_top } from "../../Skeleton/User_company_page_top";
import { CardSkeleton } from "../../Skeleton/CardSkeleton";

type Props = {}

export default function User_company_page({ }: Props) {

  const [sphere, setSphere] = useState("");
  const [company, setCompany] = useState<Companys | null>(null)
  const [workers, setWorkers] = useState<Workers | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const { CompanyId } = useParams<{ CompanyId: string }>();
  const [search, setSearch] = useSearchParams()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSphere(e.target.value);
  };

  const handleChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };


  useEffect(() => {

    if (!CompanyId) return

    async function getCompanys() {
      setIsLoading(true)

      try {
        const [companyRes, workerRes] = await Promise.all([
          API.get(`/companies/?id=${CompanyId}`),
          API.get(`/companies/${CompanyId}/workers/?page=${search.get('page') || 1}`)
        ])

        setCompany(companyRes.data)
        setWorkers(workerRes.data)

      } catch (err) {
        console.error("Ошибка при загрузке данных:", err)
      } finally {
        setIsLoading(false)
      }
    }
    getCompanys()

  }, [CompanyId])


  function handlePage(apiUrl: string) {

    const url = new URL(apiUrl)
    const page = url.searchParams.get('page') || '1'

    setSearch(prev => (
      { ...prev, page: page }
    ))
  }


  return (
    <div className="lg:px-[20px] rounded-[20px]">
      <div className="bg-[#352B48] sg:p-[40px] p-[10px] sm:p-[15px]">

        {!isLoading ?
          <div className="flex gap-[40px] lg:items-start items-center justify-between sm:flex-row flex-col">

            <div className="flex flex-col items-center max-w-[216px] gap-8" >

              <img className="xl:min-w-[200px] sm:min-w-[140px] min-w-[120px] w-[120px]" src="/Compani/BaseIcon.svg" alt="" />

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px]">
              <P_H3_Link isEdit={false} p="Имя" h3={company?.results[0].name || ''} link={'none'} />
              <P_H3_Link isEdit={false} p="Номер" h3={company?.results[0].phone || ''} link={'none'} />
              <P_H3_Link isEdit={false} p="Адрес" h3={company?.results[0].address || ''} link={'none'} />
              <P_H3_Link isEdit={false} p="Сфера деятельности" h3={"Пока не работает"} link={'none'} />
            </div>

          </div>
          :
          <User_company_page_top />}

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
                  value={searchInput}
                  onChange={handleChangeSearchInput}
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
          <CardTop elements={['Имя', 'Номер', 'Должность', 'Время начала приёма']} />
        </div>

        {!isLoading ?
          workers?.results.filter((item) => item.full_name.toLowerCase().includes(searchInput)).map((item, index) => (
            <Link key={index} to={`${item.id}/`}>
              <div className="flex flex-col gap-[20px] mr-3">
                <Card imageCss="w-[58px] h-[58px]" image="/Compani/BaseIcon.svg" elements={[item.full_name, item.phone, item.profession, item.work_start.slice(0, 5)]} />
              </div>
            </Link>
          ))
          :
          [...Array(4)].map((_, index) => (
            <div key={index} className="flex flex-col gap-[20px] mr-3">
              <CardSkeleton />
            </div>
          ))
        }

      </div>

      {!isLoading && <div className="flex items-center mt-[20px] justify-center gap-[20px]">
        {workers?.previous ? <img width={32} onClick={() => handlePage(workers?.previous || "")} className="cursor-pointer" src="/Pagination/left.svg" alt="" /> : <img width={32} src="/Pagination/noLeft.svg" alt="" />}
        {workers?.next ? <img width={32} onClick={() => handlePage(workers?.next || "")} className="cursor-pointer" src="/Pagination/right.svg" alt="" /> : <img width={32} src="/Pagination/noRight.svg" alt="" />}
      </div>}

    </div>
  )
}