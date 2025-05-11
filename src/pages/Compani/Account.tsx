import P_H3_Link from "../../component/P_H3_Link"
import Company_acc_sceleton from "../../Skeleton/Company_acc_sceleton"
import { useGetIndustryName } from "../../hooks/useGetIndustryName"
import { useStore } from "../../state/globalState"

type Props = {}

export default function Compani_acc({ }: Props) {

    const { company, isLoading } = useStore((state) => state);


    return (
        !isLoading ? <div className="lg:px-[20px] rounded-[20px]">
            <div className="bg-[#352B48] sg:p-[40px] p-[10px] sm:p-[15px]">

                <div className="flex gap-[40px] lg:items-start items-center sm:flex-row flex-col">

                    <div className="flex flex-col items-center max-w-[216px] gap-8" >

                        <img className="xl:min-w-[200px] sm:min-w-[170px] min-w-[120px] w-[120px]" src="/Compani/BaseIcon.svg" alt="" />

                        <div className="flex flex-row items-center sm:gap-[40px] gap-[20px]">
                            {/* <Link to={'none'}>
                                <img className="min-w-[20px] w-[20px] xl:min-w-[30px]"
                                    src="/Compani/Company_worker_page/Worker_edit.svg"
                                    alt=""
                                />
                            </Link>
                            <Link to={'none'}>
                                <img className="min-w-[20px] w-[20px] xl:min-w-[30px]"
                                    src="/Compani/Company_worker_page/Worker_deleate.svg"
                                    alt=""
                                />
                            </Link> */}
                        </div>

                    </div>

                    <P_H3_Link
                        isEdit={false}
                        p="Имя"
                        h3={company.data.company?.name || ''}
                        link={'none'}
                    />

                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px] mt-[60px]">

                    <P_H3_Link
                        isEdit={false}
                        p="Номер"
                        h3={company.data.company?.phone || ""}
                        link={'none'}
                    />
                    <P_H3_Link
                        isEdit={false}
                        p="Адрес"
                        h3={company.data.company?.address || ""}
                        link={'none'}
                    />
                    <P_H3_Link
                        isEdit={false}
                        p="Сфера деятельности"
                        h3={useGetIndustryName((company.data.company?.industry || 1), company.data.industrys)} link={'none'}
                    />

                </div>

            </div>
        </div>
            :
            <Company_acc_sceleton />

    )
}