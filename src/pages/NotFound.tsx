import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col container items-center justify-center sm:min-h-[calc(100vh-136px)] md:min-h-[calc(100vh-184.5px)] min-h-[calc(100vh-136px)] bg-[#1B1429] text-white text-center px-4 py-12 sm:py-16 md:py-24">
            <h1 className="text-[6rem] sm:text-[8rem] md:text-[10rem] font-extrabold text-[#FEC785] leading-none mb-4">
                404
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#F47B32] mb-8">
                Упс! Страница не найдена.
            </p>
            <Link
                to="/"
                className="bg-[#F4631A] hover:bg-[#F47B32] text-white px-6 py-3 rounded-xl font-semibold text-base sm:text-lg transition duration-300"
            >
                На главную
            </Link>
        </div>
    );
};

export default NotFound;
