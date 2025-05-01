
export default function User_worker_page_skeleton() {
  return (
    <div className="lg:px-[20px] rounded-[20px] animate-pulse">
      <div className="bg-[#352B48] sg:p-[40px] p-[10px] sm:p-[15px]">
        <div className="flex gap-[40px] lg:items-start items-center justify-between sm:flex-row flex-col">

          <div className="flex flex-col items-center max-w-[216px] gap-8">
            <div className="xl:min-w-[200px] sm:min-w-[140px] min-w-[120px] w-[120px] h-[120px] bg-gray-500/30 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px] w-full">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-[14px] bg-gray-500/30 w-[60%] rounded" />
                <div className="h-[24px] bg-gray-500/30 w-[80%] rounded" />
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="mt-[10px] flex flex-col sm:flex-row sm:gap-[28px] gap-[10px] p-[10px] sm:pb-[0] pb-[40px]">

        <div className="flex flex-col bg-[#352B48] w-full sm:w-max xl:p-[40px] p-[20px] gap-3 mx-auto lg:mx-0">
          <div className="space-y-3 mx-auto">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-[20px] bg-gray-500/30 w-[200px] rounded" />
            ))}
          </div>
        </div>

        <div className="bg-[#352B48] xl:p-[40px] sm:p-[20px] flex-1 flex flex-col lg:gap-[100px] gap-[50px] p-[10px]">
          <div className="h-[30px] bg-gray-500/30 w-[200px] rounded" />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-[20px] lg:gap-[38px]">
            <div className="h-[20px] bg-gray-500/30 w-[70px] rounded" />

            <div className="flex flex-wrap justify-center sm:justify-start lg:gap-[10px] gap-[6px]">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="lg:w-[80px] w-[60px] h-[30px] bg-gray-500/30 rounded" />
              ))}
            </div>

            <div className="h-[20px] bg-gray-500/30 w-[70px] rounded" />
          </div>
        </div>

      </div>
    </div>
  );
}