import P_H3_Link from "../../component/P_H3_Link"

type Props = {}

export default function Worker_acc({ }: Props) {


    return (
        <div className="lg:p-[20px] rounded-[20px]">
            <div className="bg-[#352B48] sg:p-[40px] p-[10px] sm:p-[15px]">

                <div className="flex gap-[40px] lg:items-start items-center sm:flex-row flex-col">

                    <div className="flex max-w-[216px]" >

                        <img className="xl:min-w-[200px] sm:min-w-[170px] min-w-[120px] w-[120px]" src="/Worker/BaseIcon.svg" alt="" />

                    </div>

                    <P_H3_Link isEdit={false} p="Имя" h3="Сucumber Cumcumich" link={'/edit'} />

                </div>






                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px] mt-[60px]">

                    <P_H3_Link isEdit={false} p="Номер" h3="+7 555 555 555" link={'/edit'} />
                    <P_H3_Link isEdit={false} p="Профессия" h3="Стоматолог" link={'/edit'} />
                    <P_H3_Link isEdit={false} p="Длительность прима" h3="00:20" link={'/edit'} />
                    <P_H3_Link isEdit={false} p="Время работы" h3="С 08:00 До 16:00" link={'/edit'} />

                </div>

            </div>
        </div>
    )
}