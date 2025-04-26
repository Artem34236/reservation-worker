import { useState } from "react"
import P_H3_Link from "../../component/P_H3_Link"
import User_workerModalWindow from "../../component/User_workerModalWindow"

type Props = {}

export default function User_worker_page({ }: Props) {

    const [worker, setWorker] = useState({
        id: 0,
        company_Id: 0,
        time: "",
        isOnclick: false,
    })

    return (
        <div className="lg:px-[20px] rounded-[20px]">
            <div className="bg-[#352B48] sg:p-[40px] p-[10px] sm:p-[15px]">

                <div className="flex gap-[40px] lg:items-start items-center justify-between sm:flex-row flex-col">

                    <div className="flex flex-col items-center max-w-[216px] gap-8" >

                        <img className="xl:min-w-[200px] sm:min-w-[140px] min-w-[120px] w-[120px]" src="/Compani/BaseIcon.svg" alt="" />

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px]">
                        <P_H3_Link isEdit={false} p="Имя" h3="Сucumber Cumcumich" link={'/edit'} />
                        <P_H3_Link isEdit={false} p="Номер" h3="+ 7 555 555 555" link={'/edit'} />
                        <P_H3_Link isEdit={false} p="Профессия" h3="Стоматолог" link={'/edit'} />
                        <P_H3_Link isEdit={false} p="Компания" h3="ooo “ТМЫВДЕНЕГ”" link={'/edit'} />
                    </div>

                </div>
            </div>

            <div className="xl:mt-[40px] sm:mt-[20px] xl:h-[calc(100vh-370px)] lg:h-[calc(100vh-296px)] flex flex-col sm:flex-row sm:gap-[28px] gap-[10px] p-[10px] sm:pb-[0] pb-[40px]">

                <div className="flex flex-col bg-[#352B48] w-full sm:w-max xl:p-[40px] p-[20px] h-full gap-3 mx-auto lg:mx-0">
                    <div className="mx-auto">
                        <p className="text-white xl:text-[24px] text-[18px] font-[700]">Работает с <span className="text-[#F4631A]">8:00</span>, до <span className="text-[#F4631A]">12:20</span></p>

                        <p className="text-white xl:text-[24px] text-[18px] font-[700]">Свободных мест:  <span className="text-[#F4631A]">8</span></p>

                        <p className="text-white xl:text-[24px] text-[18px] font-[700]">Сеанс длится:  <span className="text-[#F4631A]">20 мин</span></p>
                    </div>
                </div>

                <div className="bg-[#352B48] xl:p-[40px] sm:p-[20px] flex-1 flex flex-col lg:gap-[200px] gap-[50px] p-[10px]">

                    <h2 className="text-white xl:text-[40px] lg:text-[30px] text-[25px] font-[700]">Выберите время:</h2>

                    <div className="flex items-center justify-center sm:gap-[38px] gap-[15px]">

                        <p className="text-white xl:text-[30px] lg:text-[20px] text-[15px] font-[700]">Начало</p>

                        <div className="flex sm:gap-[15px] gap-[10px] flex-wrap">

                            {[...Array(10)].map((_, index) => (

                                <div
                                    onClick={() => setWorker({
                                        id: 0,
                                        company_Id: 0,
                                        isOnclick: true,
                                        time: "12:00 - 22:00"
                                    })}
                                    key={index}
                                    className="cursor-pointer lg:w-[50px] w-[40px] rounded-[3px] text-center group transition-all duration-400 hover:bg-[#F4631A] bg-[#D9D9D9]">
                                    <p className="group-hover:text-white duration-300 transition-all lg:text-[16px] text-[14px] font-[700] text-[#000]">
                                        12:00 - 22:00
                                    </p>
                                </div>

                            ))}

                        </div>

                        <p className="text-white xl:text-[30px] lg:text-[20px] text-[15px] font-[700]">Конец</p>

                    </div>

                </div>

            </div>

            {worker.isOnclick && <User_workerModalWindow closseModal={() => setWorker((prew) => ({ ...prew, isOnclick: false }))} />}

        </div>
    )

}