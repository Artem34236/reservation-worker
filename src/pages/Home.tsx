import { Orange_Link } from "../component/Orange_button"
import { useStore } from "../state/global_state"


type Props = {}

export default function Home({ }: Props) {

  const aftoryzationTipe = useStore((state) => state.aftorization.type)



  return (
    <div className="container flex sm:flex-row flex-col-reverse">

      <div className="flex min-h-fit sm:min-h-full justify-center items-center sm:w-[50%] bg-[#F4631A] p-[20px] sm:h-[calc(100vh-136px)] md:h-[calc(100vh-184.5px)] h-[calc(50vh-68px)]">
        <div>

          <h1 className="lg:text-[46px] sm:text-[32px] text-[22px] font-[700] text-[#1B1429] sm:mb-[28px] ">О нас:</h1>

          <p className="lg:text-[24px] cursor-default sm:text-[18px] text-[16px] text-[#1B1429] sm:mb-[28px] mb-[36px] max-w-[650px]">
            Мы даем вам возможность избежать стояния в очереди, ругани и малоэффективного использования времени. Мы ценим ваше время и на этой платформе системы онлайн-регистрации, все что нужно, это зайти в ваш аккаунт, выбрать точку интереса, сотрудника и время посещения
          </p>

          <div className="flex group items-center justify-center sm:justify-start sm:gap-[30px] gap-[15px] max-w-full sm:max-w-max">

            <Orange_Link to={`/${aftoryzationTipe}/`} text="Начнём?" className="bg-[#1B1429]! py-[6px]! text-[#FFFFFF]! sm:text-[18px]! text-[16px]! font-[700] rounded-3xl! sm:px-[65px] px-[30px] w-auto!" />
            <img className="group-hover:translate-x-3.5 transition duration-300 lg:w-max sm:w-[30px] w-[20px]" src="/Home/Strelka.svg" alt="" />

          </div>

        </div>
      </div>

      <div className=" flex min-h-fit sm:min-h-full items-center justify-center sm:w-[50%] flex-col bg-[#333333] gap-[10px] sm:h-[calc(100vh-136px)] md:h-[calc(100vh-184.5px)] h-[calc(50vh-68px)] p-[20px]">

        <h1 className="2xl:text-[52px] lg:text-[50px] sm:text-[35px] text-[28px] font-[700] text-[#FFFFFF]">Время - деньги</h1>

        <img className="w-full h-auto max-w-[200px] sm:max-w-[350px] 2xl:max-w-[400px]" src="/Home/Money.svg" alt="" />

      </div>

    </div>)
}