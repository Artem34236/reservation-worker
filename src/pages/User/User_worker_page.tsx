import { useEffect, useState } from "react"
import P_H3_Link from "../../component/P_H3_Link"
import User_workerModalWindow from "../../modalWindows/User_workerModalWindow"
import { useParams, useSearchParams } from "react-router-dom"
import { API } from "../../axios/axios"
import { Companys, Dates, Free_slots, Worker } from "../../types/type"
import User_worker_page_skeleton from "../../Skeleton/User_worker_page_skeleton"
import { useDate } from "../../hooks/useDate"
import User_worker_time_sceleton from "../../Skeleton/User_worker_time_sceleton"
import User_talonModalWindow from "../../modalWindows/User_talonModalWindow"

type Props = {}

export default function User_worker_page({ }: Props) {

    const [dates, _] = useState<Dates[]>(useDate(6));

    const [worker, setWorker] = useState<Worker | null>(null);
    const [workerSlots, setWorkerSlots] = useState<Free_slots | null>(null);
    const [company, setCompany] = useState<Companys | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null)

    const { CompanyId, WorkerId } = useParams<{ CompanyId: string, WorkerId: string }>();
    const [search, setSearch] = useSearchParams();

    const [isOnclick, setIsOnclick] = useState<boolean>(false);
    const [talonModal, setTalonModal] = useState<boolean>(false);
    const [isLoadingFree_slots, setIsLoadingFree_slots] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [talon, setTalon] = useState({
        ID: "0",
        date: "",
        time: "",
    })

    useEffect(() => {

        if (!CompanyId && WorkerId) return

        async function getCompanys() {
            setIsLoading(true)

            try {
                const [companyRes, workerRes] = await Promise.all([
                    API.get(`/companies/?id=${CompanyId}`),
                    API.get(`/workers/${WorkerId}/`)
                ])

                setCompany(companyRes.data)
                setWorker(workerRes.data)

            } catch (err) {
                console.error("Ошибка при загрузке данных:", err)
            } finally {
                setIsLoading(false)
            }
        }
        getCompanys()

    }, [CompanyId, WorkerId])


    useEffect(() => {

        if (!WorkerId || !search.get('date') || !search.get('month') || !search.get('year')) return

        async function getWorkerSlots() {

            setIsLoadingFree_slots(true)

            await API.get(`workers/${WorkerId}/free-slots/?date=${search.get('year')}-${search.get('month')}-${search.get('date')}`)
                .then((data) => {
                    setWorkerSlots(data.data)
                })
                .catch((err) => console.log('Ошибка загрузки свободго времени', err))
                .finally(() => setIsLoadingFree_slots(false))

        }

        getWorkerSlots()

    }, [search.get('date'), search.get('month'), search.get('year'), isOnclick])



    const onClick = (item: string) => {
        setSearch({ date: search.get('date') || '', month: search.get('month') || '', year: search.get('year') || '', time: item })
        setSelectedTime(item)
        setIsOnclick(true)
    }


    return (
        isLoading ? <User_worker_page_skeleton />
            :
            <div className="lg:px-[20px] rounded-[20px]">
                <div className="bg-[#352B48] sg:p-[40px] p-[10px] sm:p-[15px]">

                    <div className="flex gap-[40px] lg:items-start items-center justify-between sm:flex-row flex-col">

                        <div className="flex flex-col items-center max-w-[216px] gap-8" >

                            <img className="xl:min-w-[200px] sm:min-w-[140px] min-w-[120px] w-[120px]" src="/Compani/BaseIcon.svg" alt="" />

                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px]">
                            <P_H3_Link isEdit={false} p="Имя" h3={worker?.full_name || ''} link={'/edit'} />
                            <P_H3_Link isEdit={false} p="Номер" h3={worker?.phone || ''} link={'/edit'} />
                            <P_H3_Link isEdit={false} p="Профессия" h3={worker?.profession.toString() || ''} link={'/edit'} />
                            <P_H3_Link isEdit={false} p="Компания" h3={company?.results[0].name || ''} link={'/edit'} />
                        </div>

                    </div>
                </div>

                <div className="mt-[10px] flex flex-col sm:flex-row sm:gap-[28px] gap-[10px] py-[10px] sm:pb-[0] pb-[40px]">

                    <div className="flex flex-col bg-[#352B48] w-full sm:w-max xl:p-[40px] p-[20px] gap-3 mx-auto lg:mx-0">
                        <div className="mx-auto">
                            <p className="text-white xl:text-[24px] text-[18px] font-[700]">Работает с <span className="text-[#F4631A]">{worker?.work_start.slice(0, 5)}</span>, до <span className="text-[#F4631A]">{worker?.work_end.slice(0, 5)}</span></p>

                            <p className="text-white xl:text-[24px] text-[18px] font-[700]">Сеанс длится:  <span className="text-[#F4631A]">{worker?.client_duration_minutes}</span> минут </p>
                        </div>
                    </div>

                    <div className="bg-[#352B48] xl:p-[40px] sm:p-[20px] flex-1 flex flex-col lg:gap-[100px] gap-[50px] p-[10px]">

                        <h2 className="text-white xl:text-[40px] lg:text-[30px] text-[25px] font-[700]">Выберите время:</h2>

                        <div className="flex flex-col items-center sm:justify-center gap-[20px] lg:gap-[38px]">

                            <p className="text-white text-center sm:text-left xl:text-[30px] lg:text-[20px] text-[15px] font-[700]">
                                День
                            </p>

                            <div className="flex flex-wrap justify-center sm:justify-start lg:gap-[10px] gap-[6px]">
                                {dates.map((item, index) => (
                                    <div
                                        onClick={() => setSearch({ date: item.date.toString(), month: (+item.month + 1).toString(), year: item.year.toString() })}
                                        key={index}
                                        className="cursor-pointer lg:w-[80px] w-[60px] rounded-[3px] text-center group transition-all duration-400 hover:bg-[#F4631A] bg-[#D9D9D9] py-2"
                                    >
                                        <p className="group-hover:text-white duration-300 transition-all lg:text-[14px] text-[12px] font-[700] text-[#000]">
                                            {item.html}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <p className="text-white text-center sm:text-left xl:text-[30px] lg:text-[20px] text-[15px] font-[700]">
                                Время
                            </p>

                            {
                                !isLoadingFree_slots ?
                                    (search.get('date') && search.get('month') && search.get('year')) && <div className="flex flex-wrap justify-center sm:justify-start max-w-[390px] lg:max-w-[530px] lg:gap-[10px] gap-[6px]">
                                        {workerSlots?.free_slots.map((item, index) => (
                                            <div
                                                onClick={() => onClick(item)}
                                                key={index}
                                                className="cursor-pointer lg:w-[80px] w-[60px] rounded-[3px] text-center group transition-all duration-400 hover:bg-[#F4631A] bg-[#D9D9D9] py-2"
                                            >
                                                <p className="group-hover:text-white duration-300 transition-all lg:text-[14px] text-[12px] font-[700] text-[#000]">
                                                    {item.slice(0, 5)}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    :
                                    <User_worker_time_sceleton />
                            }

                        </div>

                    </div>

                </div>

                {isOnclick && <User_workerModalWindow setTalon={setTalon} openModal={setTalonModal} selectedTime={selectedTime} closseModal={() => setIsOnclick(false)} />}
                {talonModal && <User_talonModalWindow worker={worker} company={company} talon={talon} closseModal={() => setTalonModal(false)} />}

            </div >
    )

}