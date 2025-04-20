import { Link } from "react-router-dom"

type Props = {
    p: string
    h3: string
    link?: string
    isEdit?: boolean
}

export default function P_H3_Link({ link, p, h3, isEdit = true }: Props) {
    return (
        <div>

            <p className="2xl:text-[20px] xl:text-[16px] text-[12px] font-[500] text-[#F4631AFE]">{p}</p>

            <div className="flex gap-4 items-center">

                <h3 className="2xl:text-[30px] xl:text-[24px] text-[18px] font-[700] text-white">{h3}</h3>

                {
                    isEdit ? <Link to={link || '/'}>
                        <img className="min-w-[20px] w-[20px] xl:min-w-[30px]" src="/Compani/Company_worker_page/Worker_edit.svg" alt="" />
                    </Link> : null
                }

            </div>
        </div>
    )
}