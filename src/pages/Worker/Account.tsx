import P_H3_Link from "../../component/P_H3_Link"
import { useGet1Name } from "../../hooks/useGetIndustryName"
import Worker_acc_sceleton from "../../Skeleton/Worker_acc_sceleton"
import { useStore } from "../../state/globalState"

type Props = {}

export default function Worker_acc({ }: Props) {

    const { worker, isLoading } = useStore()


    return (
        !isLoading ?
            <div className="lg:px-[20px] rounded-[20px]">
                <div className="bg-[#352B48] sg:p-[40px] p-[10px] sm:p-[15px]">

                    <div className="flex gap-[40px] lg:items-start items-center sm:flex-row flex-col">

                        <div className="flex max-w-[216px]" >

                            <img className="xl:min-w-[200px] sm:min-w-[170px] min-w-[120px] w-[120px]" src="/Worker/BaseIcon.svg" alt="" />

                        </div>

                        <P_H3_Link isEdit={false} p="Имя" h3={worker.data.worker?.full_name || ''} link={'/edit'} />

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px] mt-[60px]">

                        <P_H3_Link isEdit={false} p="Номер" h3={worker.data.worker?.phone || ''} link={'/edit'} />
                        <P_H3_Link isEdit={false} p="Профессия" h3={useGet1Name((worker.data.worker?.profession || 1), worker.data.proffession)} link={'/edit'} />
                        <P_H3_Link isEdit={false} p="Длительность прима" h3={worker.data.worker?.client_duration_minutes.toString().slice(0, 5) || ''} link={'/edit'} />
                        <P_H3_Link isEdit={false} p="Время работы" h3={`С ${worker.data.worker?.work_start.toString().slice(0, 5) || ''} До ${worker.data.worker?.work_end.toString().slice(0, 5) || ''}`} link={'/edit'} />

                    </div>

                </div>
            </div>
            :
            <Worker_acc_sceleton />
    )
}