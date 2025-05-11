import { Link, useSearchParams } from "react-router-dom"
import Card, { CardTop } from "../../component/Card"
import { Orange_Button } from "../../component/Orange_button"
import { useEffect, useState } from "react"
import Company_newWorkerModalWindow from "../../modalWindows/Company_newWorkerModalWindow"
import { Proffession, Workers } from "../../types/type"
import { API } from "../../axios/axios"
import Company_worker_skeleton from "../../Skeleton/Company_worker_skeleton"
import { useStore } from "../../state/globalState"
import { useGet1Name } from "../../hooks/useGetIndustryName"

type Props = {}

export default function Company_worker_page({ }: Props) {

    const [newWorker, setNewWorker] = useState<boolean>(false)
    const [searchInput, setSearchInput] = useState<string>("")

    const { company } = useStore((state) => state);
    const [search, setSearch] = useSearchParams()


    const [workers, setWorkers] = useState<Workers | null>(null)
    const [proffession, setProffession] = useState<Proffession[] | null>(null)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const companyId = company.data.company?.id;

        if (!companyId) return;

        const getWorkers = async () => {
            
            try {
                const [workerRes] = await Promise.all([
                    API.get(`/companies/${company.data.company?.id}/workers/?page=${search.get('page') || 1}`),
                    // API.get(`/workers/professions/`)
                ])
                setWorkers(workerRes.data);
                // setProffession(proffessionRes.data);
            } catch (err) {
                console.error("Ошибка при загрузке работников:", err);
            } finally {
                setLoading(false);
            }
        };

        getWorkers();
    }, [company.data.company?.id]);



    function handlePage(apiUrl: string) {

        const url = new URL(apiUrl)
        const page = url.searchParams.get('page') || '1'

        setSearch({
            ...Object.fromEntries(search.entries()),
            page: page,
        })
    }

    const handleChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
        setSearch({
            ...Object.fromEntries(search.entries()),
            search: e.target.value,
        })
    };


    return (
        (!loading) ? <div>

            <div className="bg-[#352B48] sm:py-[14px] py-[6px] sm:px-[40px] px-[6px]">
                <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-between">

                    <label
                        htmlFor="asdf"
                        className="py-[5px] px-[12px] sm:py-[12px] sm:px-[18px] border border-[#E5E5E5] rounded-[8px] flex items-center justify-between flex-1 w-full sm:max-w-[296px]"
                    >
                        <input
                            onChange={handleChangeSearchInput}
                            value={searchInput}
                            id="asdf"
                            type="text"
                            placeholder="Поиск..."
                            className="text-white outline-none bg-transparent flex-1 w-full"
                        />
                        <img src="/Compani/Company_worker_page/Search.svg" alt="поиск" className="ml-2 min-w-[20px]" />
                    </label>

                </form>
            </div>

            <div className="lg:p-[40px] p-[10px]">
                <div className="flex justify-between items-center border-b-[1px] border-[#E5E5E5] py-[12px]">
                    <h2 className="text-[#FFFFFF] lg:text-2xl text-[16px] font-bold">Список работников</h2>
                    <Orange_Button onClick={() => setNewWorker(true)} className="w-[180px]! py-[10px]" text="Добавить работника" to="none" />
                </div>

                <div>
                    <CardTop elements={['Имя', 'Телефон', 'Должность', 'Длительность сеанса', "Начало работы"]} >
                        <div className="lg:w-[100px] w-[25px]"></div>
                    </CardTop>
                </div>

                <div className="flex flex-col gap-[20px] mr-3">

                    {workers?.results.map((item) =>
                        <Card elements={[item.full_name, item.phone, useGet1Name(item.profession, proffession), item.client_duration_minutes.toString(), item.work_start.slice(0, 5)]} >
                            <div className="flex flex-col lg:flex-row items-center sm:gap-[40px] gap-[10px]">
                                <Link to={'compani/worker/23/edit'}>
                                    <img className="w-[20px] sm:min-w-[25px]" src="/Compani/Company_worker_page/Worker_edit.svg" alt="" />
                                </Link>
                                <Link to={'compani/worker/23/edit'}>
                                    <img className="w-[20px] sm:min-w-[25px]" src="/Compani/Company_worker_page/Worker_deleate.svg" alt="" />
                                </Link>
                            </div>

                        </Card>
                    )}

                </div>
            </div>

            {newWorker && <Company_newWorkerModalWindow closseModal={() => setNewWorker(false)} />}

            {!loading && <div className="flex items-center mt-[20px] justify-center gap-[20px]">
                {workers?.previous ? <img width={32} onClick={() => handlePage(workers?.previous || "")} className="cursor-pointer" src="/Pagination/left.svg" alt="" /> : <img width={32} src="/Pagination/noLeft.svg" alt="" />}
                {workers?.next ? <img width={32} onClick={() => handlePage(workers?.next || "")} className="cursor-pointer" src="/Pagination/right.svg" alt="" /> : <img width={32} src="/Pagination/noRight.svg" alt="" />}
            </div>}

        </div>
            :
            <Company_worker_skeleton />

    )
}