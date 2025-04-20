import Card, { CardTop } from "../../component/Card"

type Props = {}

export default function Reservation({}: Props) {
     return (
          <div>
  
              <div className="bg-[#352B48] sm:py-[14px] py-[6px] sm:px-[40px] px-[6px] lg:h-[75px] h-[40px]"></div>
  
              <div className="lg:p-[40px] p-[10px] flex flex-col gap-3">
                  <div className="flex justify-between items-center border-b-[1px] border-[#E5E5E5] py-[12px]">
                      <h2 className="text-[#FFFFFF] lg:text-2xl text-[16px] font-bold">Очередь</h2>
                  </div>
  
                  <div>
                      <CardTop elements={['Имя', 'Номер', 'Талон', 'Время прихода']} />
                  </div>
  
                  <div className="flex flex-col gap-[20px] mr-3">
                      <Card elements={['Вичеслав', "+7 555 555 555", "49",'14:20']} />
                  </div>

                  
                  <div className="flex flex-col gap-[20px] mr-3">
                      <Card elements={['Вичеслав', "+7 555 555 555", "49",'14:20']} />
                  </div>

                  
                  <div className="flex flex-col gap-[20px] mr-3">
                      <Card elements={['Вичеслав', "+7 555 555 555", "49",'14:20']} />
                  </div>

                  
                  <div className="flex flex-col gap-[20px] mr-3">
                      <Card elements={['Вичеслав', "+7 555 555 555", "49",'14:20']} />
                  </div>
              </div>
  
          </div>
  
      )
}