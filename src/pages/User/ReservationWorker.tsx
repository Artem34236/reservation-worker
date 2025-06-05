import { useEffect, useState } from "react";
import Card, { CardTop } from "../../component/Card"
import { Link, useSearchParams } from "react-router-dom";
import { API } from "../../axios/axios";
import { Companys, Category } from "../../types/type";
import { CardSkeleton } from "../../Skeleton/CardSkeleton";
import { useGet1Name } from "../../hooks/useGetIndustryName";
import { useDebounce } from "../../hooks/useDebounce";

export default function ReservationWorker() {
    const [sphere, setSphere] = useState("");


    const [companys, setCompanys] = useState<Companys | null>(null);
    const [industry, setIndustry] = useState<Category[] | null>(null);

    const [search, setSearch] = useSearchParams();
    const [searchInput, setSearchInput] = useState<string>(search.get('search') || '');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const debounche = useDebounce(searchInput, 500)


    useEffect(() => {
        const currentSearch = search.get("search") || "";
        if (debounche !== currentSearch) {
            setSearch((prev) => ({
                ...Object.fromEntries(prev.entries()),
                search: debounche,
                page: "1",
            }));
        }
    }, [debounche]);

    useEffect(() => {
        async function getCompanys() {
            setIsLoading(true);

            try {
                const [companyRes, industryRes] = await Promise.all([
                    API.get(`/companies/?page=${search.get('page') || 1}&industry=${search.get('industry') || ''}&search=${debounche}`),
                    API.get(`/industries/`)
                ]);

                setCompanys(companyRes.data);
                setIndustry(industryRes.data);

            } catch (err) {
                console.error("Ошибка при загрузке данных:", err);
            } finally {
                setIsLoading(false);
            }
        }
        getCompanys();
    }, [search.get('industry'), search.get("page"), debounche]);

    const handleChangeSphere = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSphere(value);
        setSearch(params => {
            const newParams = new URLSearchParams(params);
            newParams.set("industry", value);
            newParams.set("page", "1");
            return newParams;
        });
    };

    const handleChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    function handlePage(apiUrl: string) {
        const url = new URL(apiUrl);
        const page = url.searchParams.get('page') || '1';

        setSearch(params => {
            const newParams = new URLSearchParams(params);
            newParams.set("page", page);
            return newParams;
        });
    }

    return (
        <div>
            <div className="bg-[#352B48] sm:py-[14px] py-[6px] sm:px-[40px] px-[6px]">
                <form className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <label
                        className="sm:py-[12px] py-[5px] sm:px-[18px] px-[12px] border-[1px] border-[#E5E5E5] rounded-[8px] flex items-center justify-between flex-1 max-w-full sm:max-w-[296px]"
                        htmlFor="search-input"
                    >
                        <input
                            id="search-input"
                            value={searchInput}
                            onChange={handleChangeSearchInput}
                            placeholder="Поиск..."
                            className="text-[#ffffff] outline-0 w-full bg-transparent"
                            type="text"
                        />
                        <img src="/Compani/Company_worker_page/Search.svg" alt="" />
                    </label>

                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                        <select
                            value={sphere}
                            onChange={handleChangeSphere}
                            className="bg-[#3A2E4D] text-white border outline-0 border-[#CFCFCF] rounded-[8px] px-4 py-2 w-full sm:w-[180px]"
                        >
                            <option value="" disabled hidden>Сфера</option>
                            {industry?.map((item) => (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            ))}
                            <option value="">Все</option>
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

                {!isLoading
                    ? companys?.results.map((item) => (
                        <Link key={item.id} to={`${item.id}`}>
                            <div className="flex flex-col gap-[20px] mr-3">
                                <Card
                                    imageCss="w-[58px] h-[58px]"
                                    image="/Compani/BaseIcon.svg"
                                    elements={[
                                        item.name,
                                        item.phone,
                                        item.address,
                                        useGet1Name(item.industry, industry),
                                    ]}
                                />
                            </div>
                        </Link>
                    ))
                    : [...Array(4)].map((_, index) => (
                        <div key={index} className="flex flex-col gap-[20px] mr-3">
                            <CardSkeleton />
                        </div>
                    ))
                }
            </div>

            {!isLoading && (
                <div className="flex items-center justify-center gap-[20px]">
                    {companys?.previous ? (
                        <img
                            width={32}
                            onClick={() => handlePage(companys.previous!)}
                            className="cursor-pointer"
                            src="/Pagination/left.svg"
                            alt=""
                        />
                    ) : (
                        <img width={32} src="/Pagination/noLeft.svg" alt="" />
                    )}
                    {companys?.next ? (
                        <img
                            width={32}
                            onClick={() => handlePage(companys.next!)}
                            className="cursor-pointer"
                            src="/Pagination/right.svg"
                            alt=""
                        />
                    ) : (
                        <img width={32} src="/Pagination/noRight.svg" alt="" />
                    )}
                </div>
            )}
        </div>
    );
}
