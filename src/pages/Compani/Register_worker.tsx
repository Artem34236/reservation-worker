import Input from "../../component/Input"


type Props = {}

export default function Register_worker({ }: Props) {
    return (
        <div className="min-h-fit bg-[#333333] pt-[20px]">

            <form className="flex flex-col rounded-2xl items-center w-max p-[20px] justify-center gap-[15px] bg-[#1B1429] m-auto">

                <div className="flex flex-col gap-[20px] xl:flex-row max-w-[800px] flex-wrap justify-center">

                    <Input img="/Register/Name.svg" placeholder="Имя" type="text" />
                    <Input img="/Register/Phone.svg" placeholder="Номер" type="text" />
                    <Input img="/Register/Pass.svg" placeholder="Пароль" type="text" />
                    <Input img="/Register/Time.svg" placeholder="Время приёма" type="time" />
                    <Input img="/Register/Work_type.svg" placeholder="Профессия" type="text" />
                    <Input img="/Register/Start_time.svg" placeholder="Начало" type="time" />
                    <Input img="/Register/End_time.svg" placeholder="Конец" type="time" />

                </div>

                <button className="bg-[#E29038] mt-5 cursor-pointer text-white w-full md:py-[10px] py-[10px] md:text-[18px] text-[14px] md:rounded-3xl rounded-[10px]">Зарегистрировать</button>

            </form>



        </div>
    )
}