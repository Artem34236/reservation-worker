import { useEffect, useState } from "react"
import Card, { CardTop } from "../../component/Card"
import { useStore } from "../../state/globalState"
import { API } from "../../axios/axios"
import { ReservationData } from "../../types/type"

type Props = {}

export default function Reservation({ }: Props) {

    const { worker } = useStore()
    const [reservation, setReservations] = useState<ReservationData[]>([])
    const data = new Date()
    const formattedDate = data.toISOString().split("T")[0];

    useEffect(() => {

        const worekerId = worker.data.worker?.id;

        if (!worekerId) return;

        console.log(formattedDate);

        async function getReservation() {
            try {
                const res = await API.get(`/workers/${worker.data.worker?.id}/reservations/`)
                setReservations(res.data)
            } catch {
                console.error("Ошибка при загрузке броней:");
            }
        }
        getReservation()

    }, [worker.data.worker?.id])


    return (
        <div>

            <div className="bg-[#352B48] sm:py-[14px] py-[6px] sm:px-[40px] px-[6px] lg:h-[75px] h-[40px]"></div>

            <div className="lg:p-[40px] p-[10px] flex flex-col gap-3">
                <div className="flex justify-between items-center border-b-[1px] border-[#E5E5E5] py-[12px]">
                    <h2 className="text-[#FFFFFF] lg:text-2xl text-[16px] font-bold">Очередь</h2>
                </div>

                <div>
                    <CardTop elements={['Имя', 'Номер', 'Талон', 'Время прихода', 'Комментарий', 'Дата']} />
                </div>

                {reservation.map((item, index) => (
                    <div key={index} className="flex flex-col gap-[20px] mr-3">
                        <Card elements={[item.full_name, item.phone, item.ticket_number, item.time.slice(0, 5), item.comment || "Комментария нет", item.date]} />
                    </div>
                ))}

            </div>

        </div>

    )
}