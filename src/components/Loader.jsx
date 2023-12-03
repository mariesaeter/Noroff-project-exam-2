export const Loader = () => {
  return (
    <div className="flex  justify-center w-full">
      <div className="flex gap-1 items-center">
        <div className="bg-sky-blue-light w-4 h-4 rounded-full opacity-80 animate-[scale_2s_ease-in-out_infinite]"></div>
        <div className="bg-sky-blue-dark w-4 h-4 rounded-full opacity-80 animate-[scale_2s_ease-in-out_infinite] animate-delay-100"></div>
        <div className="bg-fantasy-blue w-4 h-4 rounded-full opacity-80 animate-[scale_2s_ease-in-out_infinite] animate-delay-200"></div>
        <div className="bg-fantasy-blue-hover w-4 h-4 rounded-full opacity-80 animate-[scale_2s_ease-in-out_infinite] animate-delay-300"></div>
        <div className="bg-fantasy-blue-active w-4 h-4 rounded-full opacity-80 animate-[scale_2s_ease-in-out_infinite] animate-delay-[400ms]"></div>
      </div>
    </div>
  );
};
