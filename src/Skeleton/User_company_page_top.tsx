

export function User_company_page_top() {
    return (
      <div className="bg-[#352B48] sg:p-[40px] p-[10px] sm:p-[15px] animate-pulse">
  
        <div className="flex gap-[40px] lg:items-start items-center justify-between sm:flex-row flex-col">
  
          <div className="flex flex-col items-center max-w-[216px] gap-8">
            <div className="bg-[#555] rounded-2xl xl:min-w-[200px] sm:min-w-[140px] min-w-[120px] w-[120px] h-[120px]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px] w-full">
  
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="bg-[#666] h-[12px] w-[80px] rounded-md" />
                <div className="bg-[#555] h-[20px] w-[150px] rounded-md" />
              </div>
            ))}
  
          </div>
  
        </div>
  
      </div>
    );
  }