import { useEffect, useState } from "react";
import Card, { CardTop } from "../../component/Card"
import { Link, useSearchParams } from "react-router-dom";
import { API } from "../../axios/axios";
import { Companys, Category } from "../../types/type";
import { CardSkeleton } from "../../Skeleton/CardSkeleton";
import { useGet1Name } from "../../hooks/useGetIndustryName";

type Props = {}

export default function ReservationWorker({ }: Props) {


    const [sphere, setSphere] = useState("");
    const [searchInput, setSearchInput] = useState<string>("");

    const [companys, setCompanys] = useState<Companys | null>(null)
    const [industry, setIndustry] = useState<Category[] | null>(null)

    const [search, setSearch] = useSearchParams()
    const [isLoading, setIsLoading] = useState<boolean>(false);


    
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSphere(e.target.value);
        setSearch({
            ...Object.fromEntries(search.entries()),
            industry: e.target.value,
        })
    };

    const handleChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
        setSearch({
            ...Object.fromEntries(search.entries()),
            search: e.target.value,
        })
    };


    useEffect(() => {

        async function getCompanys() {
            setIsLoading(true)

            try {
                const [companyRes, industryRes] = await Promise.all([
                    API.get(`/companies/?page=${search.get('page') || 1}&industry=${search.get('industry') || ''}&search=${searchInput}`),
                    API.get(`/industries/`)
                ])

                setCompanys(companyRes.data)
                setIndustry(industryRes.data)

            } catch (err) {
                console.error("Ошибка при загрузке данных:", err)
            } finally {
                setIsLoading(false)
            }
        }
        getCompanys()

    }, [search])

    function handlePage(apiUrl: string) {

        const url = new URL(apiUrl)
        const page = url.searchParams.get('page') || '1'

        setSearch(prev => (
            { ...prev, page: page }
        ))
    }


    return (
        <div>

            <div className="bg-[#352B48] sm:py-[14px] py-[6px] sm:px-[40px] px-[6px]">
                <form className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                    <label
                        className="sm:py-[12px] py-[5px] sm:px-[18px] px-[12px] border-[1px] border-[#E5E5E5] rounded-[8px] flex items-center justify-between flex-1 max-w-full sm:max-w-[296px]"
                        htmlFor="asdf"
                    >
                        <input
                            value={searchInput}
                            onChange={handleChangeSearchInput}
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
                            {industry?.map((item, index) => (
                                <option key={index} value={item.id}>{item.name}</option>
                            ))}
                        </select>

                    </div>
                </form>
            </div>

            <div className="lg:p-[40px] p-[10px] flex flex-col gap-3 min-h-[calc(100vh-100px)]">
                <div className="flex justify-between items-center border-b-[1px] border-[#E5E5E5] py-[12px]">
                    <h2 className="text-[#FFFFFF] lg:text-2xl text-[16px] font-bold">Компании</h2>
                </div>

                <div>
                    <CardTop elements={['Имя', 'Номер', 'Адрес', 'Сфера']} />
                </div>

                {!isLoading ?
                    companys?.results.filter((item) => item.name.toLowerCase().includes(searchInput)).map((item, index) => (
                        <Link key={index} to={`${item.id}`}>
                            <div className="flex flex-col gap-[20px] mr-3">
                                <Card imageCss="w-[58px] h-[58px]" image="/Compani/BaseIcon.svg" elements={[item.name, item.phone, item.address, useGet1Name(item.industry, industry)]} />
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

            {!isLoading && <div className="flex items-center justify-center gap-[20px]">
                {companys?.previous ? <img width={32} onClick={() => handlePage(companys?.previous || "")} className="cursor-pointer" src="/Pagination/left.svg" alt="" /> : <img width={32} src="/Pagination/noLeft.svg" alt="" />}
                {companys?.next ? <img width={32} onClick={() => handlePage(companys?.next || "")} className="cursor-pointer" src="/Pagination/right.svg" alt="" /> : <img width={32} src="/Pagination/noRight.svg" alt="" />}
            </div>}

        </div >

    )
}