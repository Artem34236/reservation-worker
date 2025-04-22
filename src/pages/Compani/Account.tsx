import { Link } from "react-router-dom"
import P_H3_Link from "../../component/P_H3_Link"

type Props = {}

export default function Compani_acc({ }: Props) {
    return (
        <div className="lg:p-[20px] rounded-[20px]">
            <div className="bg-[#352B48] sg:p-[40px] p-[10px] sm:p-[15px]">

                <div className="flex gap-[40px] lg:items-start items-center sm:flex-row flex-col">

                    <div className="flex flex-col items-center max-w-[216px] gap-8" >

                        <img className="xl:min-w-[200px] sm:min-w-[170px] min-w-[120px] w-[120px]" src="/Compani/BaseIcon.svg" alt="" />

                        <div className="flex flex-row items-center sm:gap-[40px] gap-[20px]">
                            <Link to={'edit'}>
                                <img className="min-w-[20px] w-[20px] xl:min-w-[30px]" src="/Compani/Company_worker_page/Worker_edit.svg" alt="" />
                            </Link>
                            <Link to={'edit'}>
                                <img className="min-w-[20px] w-[20px] xl:min-w-[30px]" src="/Compani/Company_worker_page/Worker_deleate.svg" alt="" />
                            </Link>
                        </div>

                    </div>

                    <P_H3_Link p="Имя" h3="Сucumber Cumcumich" link={'edit'} />

                </div>






                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px] mt-[60px]">

                    <P_H3_Link p="Почта" h3="asdada@gmail.com" link={'edit'} />
                    <P_H3_Link p="Адрес" h3="Гп Айтиева 72" link={'edit'} />
                    <P_H3_Link p="Сфера деятельности" h3="Медицина" link={'edit'} />

                </div>

            </div>
        </div>
    )
}