import { Outlet } from "react-router-dom"
import { Orange_Link } from "../component/Orange_button"

type Props = {}

export default function WorkerLeyout({ }: Props) {
    return (
           <div className="container bg-[#333333] sm:min-h-[calc(100vh-136px)] md:min-h-[calc(100vh-204px)] min-h-[calc(100vh-136px)] flex">
   
               <div className="bg-[#26222E] p-3 justify-between items-center flex flex-col gap-2 max-w-[220px] w-full min-h-[calc(100vh-240px)] max-h-[calc(100vh-129px)] sticky top-[126px]">
   
                   <div className="flex flex-col items-center justify-center gap-3">
                       <img className="w-[150px]" src="/Compani/BaseIcon.svg" alt="" />
                       <h3 className="text-white font-bold text-2xl">Name</h3>
                   </div>
   
                   <div className="flex flex-col gap-2 items-center justify-center w-full p-4">
                       <Orange_Link to="/company/reservation" text="Выбрать" image="/Compani/Layout/SmallCompaniIcon.svg" className="text-[#FFFFFF] flex gap-2 items-center py-3!" />
                   </div>
   
                   <div></div>
                   <div></div>
   
               </div>
   
               <div className="flex-1">
                   {<Outlet />}
               </div>
   
           </div>
   
       )
}