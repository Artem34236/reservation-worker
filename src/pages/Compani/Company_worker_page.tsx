import { useSearchParams } from "react-router-dom"
import Card, { CardTop } from "../../component/Card"
import { Orange_Button } from "../../component/Orange_button"
import { useEffect, useState } from "react"
import Company_newWorkerModalWindow from "../../modalWindows/Company_newWorkerModalWindow"
import { Category, Workers } from "../../types/type"
import { API } from "../../axios/axios"
import Company_worker_skeleton from "../../Skeleton/Company_worker_skeleton"
import { useStore } from "../../state/globalState"
import { useGet1Name } from "../../hooks/useGetIndustryName"
import { useDebounce } from "../../hooks/useDebounce"

type Props = {}

export default function Company_worker_page({ }: Props) {

    const [newWorker, setNewWorker] = useState<boolean>(false)
    const [searchInput, setSearchInput] = useState<string>("")
    const [reload, setReload] = useState<boolean>(false)

    const { company } = useStore((state) => state);
    const [search, setSearch] = useSearchParams()
    const debounche = useDebounce(searchInput, 500)


    const [workers, setWorkers] = useState<Workers | null>(null)
    const [proffession, setProffession] = useState<Category[] | null>(null)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const companyId = company.data.company?.id;

        if (!companyId) return;

        const getWorkers = async () => {
            setLoading(true);
            try {
                const [workerRes, proffessionRes] = await Promise.all([
                    API.get(`/companies/${company.data.company?.id}/workers/?page=${search.get('page') || 1}&search=${search.get('search') || ''}`),
                    API.get(`/workers/professions/`)
                ])
                setWorkers(workerRes.data);
                setProffession(proffessionRes.data);
            } catch (err) {
                console.error("Ошибка при загрузке работников:", err);
            } finally {
                setLoading(false);
            }
        };

        getWorkers();
    }, [company.data.company?.id, search.get("page"), debounche, reload]);



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
    };

    async function onClickDelete(id: number) {

        setLoading(true);
        await API.delete(`/workers/${id}/update-delete/`)
            .then(() => {
                setReload(!reload)
            })
            .catch(err => {
                console.log(err)
            })
        setLoading(false);

    }


    return (
        <div>

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


            {!loading ? <>
                <div className="lg:p-[40px] p-[10px]">
                    <div className="flex justify-between items-center border-b-[1px] border-[#E5E5E5] py-[12px]">
                        <h2 className="text-[#FFFFFF] lg:text-2xl text-[16px] font-bold">Список работников</h2>
                        <Orange_Button onClick={() => setNewWorker(true)} className="w-[180px]! py-[10px]" text="Добавить работника" to="none" />
                    </div>

                    <div>
                        <CardTop elements={['Имя', 'Телефон', 'Должность', 'Длительность сеанса', "Начало работы", "Конец работы"]} >
                            <div className="lg:w-[40px] w-[25px]"></div>
                        </CardTop>
                    </div>

                    <div className="flex flex-col gap-[20px] mr-3">

                        {workers?.results.map((item, index) =>
                            <Card key={index} elements={[item.full_name, item.phone, (useGet1Name(item.profession, proffession) || 'adsf'), (item.client_duration_minutes.toString() + ' мин'), item.work_start.slice(0, 5), item.work_end.slice(0, 5)]} >
                                <div className="flex flex-col lg:flex-row items-center sm:gap-[40px] gap-[10px]">
                                    {/* <Link to={'compani/worker/23/edit'}>
                                    <img className="w-[20px] sm:min-w-[25px]" src="/Compani/Company_worker_page/Worker_edit.svg" alt="" />
                                </Link> */}

                                    <button onClick={() => onClickDelete(item.id)} className="cursor-pointer">
                                        <img className="min-w-[20px] w-[20px] sm:min-w-[25px]" src="/Compani/Company_worker_page/Worker_deleate.svg" alt="" />
                                    </button>
                                </div>

                            </Card>
                        )}

                    </div>
                </div>

                {newWorker && <Company_newWorkerModalWindow setReload={setReload} closseModal={() => setNewWorker(false)} />}

                {!loading && <div className="flex items-center mt-[20px] justify-center gap-[20px]">
                    {workers?.previous ? <img width={32} onClick={() => handlePage(workers?.previous || "")} className="cursor-pointer" src="/Pagination/left.svg" alt="" /> : <img width={32} src="/Pagination/noLeft.svg" alt="" />}
                    {workers?.next ? <img width={32} onClick={() => handlePage(workers?.next || "")} className="cursor-pointer" src="/Pagination/right.svg" alt="" /> : <img width={32} src="/Pagination/noRight.svg" alt="" />}
                </div>}
            </>
                :
                <Company_worker_skeleton />}
        </div>

    )
}