import useNoScroll from "../hooks/useNoScroll.ts"
import { useNavigate } from "react-router-dom"

type Props = {
    closseModal: () => void
    talon: {
        ID: string
        date: string
        time: string
    }
}

export default function User_talonModalWindow({ closseModal, talon }: Props) {
    useNoScroll()

    const navigate = useNavigate()

    function downloadTalonFile(talon: string, date: string, time: string) {
        const content = `Ваш талон: ${talon}\nДата: ${date}\nВремя: ${time}`;
        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });

        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'talon.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    return (
        <div className="bg-[#333333aa] fixed inset-0 z-[100] flex items-center justify-center px-4">
            <div className="bg-[#1B1429] rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-md relative text-white text-center">

                <button
                    className="absolute cursor-pointer top-4 right-4 focus:outline-none"
                    type="button"
                    onClick={closseModal}
                >
                    <img className="w-6 md:w-8" src="/User/Modal/Exit.svg" alt="Закрыть" />
                </button>


                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#F4631A]">
                    Ваш талон успешно создан!
                </h2>


                <div className="bg-[#352B48] rounded-xl p-6 md:p-8">
                    <p className="text-lg md:text-xl font-semibold">Номер вашего талона:</p>
                    <p className="text-3xl md:text-5xl font-bold text-[#E29038] mt-4">{talon.ID}</p>
                </div>

                <button
                    onClick={() => navigate('/')}
                    className="mt-8 bg-[#F4631A] cursor-pointer hover:bg-[#e05a17] transition-all duration-300 text-white font-semibold py-3 px-6 rounded-xl text-sm md:text-base"
                >
                    Вернуться на главную
                </button>

                <div className="flex justify-end mt-4">
                    <button
                        onClick={() => downloadTalonFile(talon.ID, talon.date, talon.time)}
                        className="mt-4 block cursor-pointer text-white font-medium py-2 px-4 rounded-md text-[12px]"
                    >
                        Скачать талон
                    </button>
                </div>
            </div>

        </div>
    )
}