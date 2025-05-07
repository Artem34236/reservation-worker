import { useEffect, useState } from "react"
import P_H3_Link from "../../component/P_H3_Link"
import User_workerModalWindow from "../../modalWindows/User_workerModalWindow"
import { useParams } from "react-router-dom"
import { API } from "../../axios/axios"
import { Companys, Worker } from "../../types/type"
import User_worker_page_skeleton from "../../Skeleton/User_worker_page_skeleton"

type Props = {}

export default function User_worker_page({ }: Props) {

    const [worker, setWorker] = useState<Worker | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [company, setCompany] = useState<Companys | null>(null)
    const { CompanyId, WorkerId } = useParams<{ CompanyId: string, WorkerId: string }>();
    const [time, setTime] = useState({
        id: 0,
        company_Id: 0,
        time: "",
        isOnclick: false,
    })

    useEffect(() => {

        if (!CompanyId) return

        async function getCompanys() {

            setIsLoading(true)

            await API.get(`/companies/?id=${CompanyId}`)
                .then((data) => {
                    setCompany(data.data)
                })
                .catch((err) => console.log('Ошибка загрузки компании', err))

            await API.get(`/workers/${WorkerId}/`)
                .then((data) => {
                    setWorker(data.data)
                })
                .catch((err) => console.log('Ошибка загрузки Работника', err))
                .finally(() => setIsLoading(false))

        }

        getCompanys()

    }, [CompanyId, WorkerId])



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
                            <P_H3_Link isEdit={false} p="Профессия" h3={worker?.profession || ''} link={'/edit'} />
                            <P_H3_Link isEdit={false} p="Компания" h3={company?.results[0].name || ''} link={'/edit'} />
                        </div>

                    </div>
                </div>

                <div className="mt-[10px] flex flex-col sm:flex-row sm:gap-[28px] gap-[10px] py-[10px] sm:pb-[0] pb-[40px]">

                    <div className="flex flex-col bg-[#352B48] w-full sm:w-max xl:p-[40px] p-[20px] gap-3 mx-auto lg:mx-0">
                        <div className="mx-auto">
                            <p className="text-white xl:text-[24px] text-[18px] font-[700]">Работает с <span className="text-[#F4631A]">{worker?.work_start.slice(0, 5)}</span>, до <span className="text-[#F4631A]">16:00</span></p>

                            <p className="text-white xl:text-[24px] text-[18px] font-[700]">Сеанс длится:  <span className="text-[#F4631A]">{worker?.client_duration_minutes}</span> минут </p>
                        </div>
                    </div>

                    <div className="bg-[#352B48] xl:p-[40px] sm:p-[20px] flex-1 flex flex-col lg:gap-[100px] gap-[50px] p-[10px]">

                        <h2 className="text-white xl:text-[40px] lg:text-[30px] text-[25px] font-[700]">Выберите время:</h2>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-[20px] lg:gap-[38px]">

                            <p className="text-white text-center sm:text-left xl:text-[30px] lg:text-[20px] text-[15px] font-[700]">
                                Начало
                            </p>

                            <div className="flex flex-wrap justify-center sm:justify-start lg:gap-[10px] gap-[6px]">
                                {[...Array(10)].map((_, index) => (
                                    <div
                                        onClick={() => setTime({ id: 0, company_Id: 0, isOnclick: true, time: "12:00 - 22:00" })}
                                        key={index}
                                        className="cursor-pointer lg:w-[80px] w-[60px] rounded-[3px] text-center group transition-all duration-400 hover:bg-[#F4631A] bg-[#D9D9D9] py-2"
                                    >
                                        <p className="group-hover:text-white duration-300 transition-all lg:text-[14px] text-[12px] font-[700] text-[#000]">
                                            12:00
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <p className="text-white text-center sm:text-left xl:text-[30px] lg:text-[20px] text-[15px] font-[700]">
                                Конец
                            </p>

                        </div>

                    </div>

                </div>

                {time.isOnclick && <User_workerModalWindow closseModal={() => setTime((prew) => ({ ...prew, isOnclick: false }))} />}

            </div>
    )

}