import { Inter } from "next/font/google";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const inter = Inter({ subsets: ['latin'] });

export const IndexProject = () => {
  return (
    <div className="absolute w-[100%] h-[793px] left-0 top-[1694px]">
      <div id="project" className="absolute w-[54px] h-2.5 left-[49.8vw] top-[783px]">
        <div className=" w-2.5 h-2.5 left-[44px] top-0 absolute bg-[#4A5C6A] dark:bg-[#757575] rounded-full" />
        <div className=" w-2.5 h-2.5 left-[23px] top-0 absolute bg-[#4A5C6A] dark:bg-[#757575] rounded-full" />
        <div className=" w-2.5 h-2.5 left-0 top-0 absolute bg-[#11212D] dark:bg-[#D9D9D9] rounded-full" />
      </div>
      <div className="absolute w-[100%] h-[711px] left-0 top-[41px]">
        <div className="absolute w-[651px] h-[89px] left-[27vw] top-[623px] text-center text-[#11212D] dark:text-white text-lg font-medium">
          Spotlife is a music website that uses Spotify API, using React,
          TypeScript, Next.js, Next Auth, Tailwind CSS
        </div>
        <div className="absolute w-[300px] h-11 left-[40.5vw] top-[572px]">
          <div className="absolute w-10 h-10 left-0 top-0 bg-react-pv-white dark:bg-react-pv-dark" />
          <div className="absolute w-10 h-10 left-[65px] top-[2px] bg-typescript-pv" />
          <div className="absolute w-10 h-10 left-[130px] top-[2px] bg-nextjs-pv-white dark:bg-nextjs-pv-dark" />
          <div className="absolute w-10 h-10 left-[195px] top-[4px] bg-tailwindcss-pv" />
          <div className="absolute w-10 h-10 left-[260px] top-[2px] bg-next-auth" />
        </div>
        <div className="absolute w-[111px] h-[26px] left-[47vw] top-[515px] text-pink-600 text-[23px] font-bold">Spotlife</div>
        <div className="absolute w-[619px] h-[294px] left-[27.5vw] top-[215px] bg-spotlife" />
      </div>
      <button className="cursor-mickey-hover hover:opacity-80 transition-all duration-100">
        <FaChevronRight className="absolute w-[50px] h-[50px] left-[90vw] top-[410px] text-[#11212D] dark:text-white" />
      </button>
      <button className="cursor-mickey-hover hover:opacity-80 transition-all duration-100">
        <FaChevronLeft className="absolute w-[50px] h-[50px] left-[83px] top-[410px] text-[#11212D] dark:text-white" />
      </button>
      <h1 className={`absolute w-[425px] h-[66px] left-[34.8vw] top-0 text-center text-black dark:text-white text-[64.30px] font-extrabold ${inter.className}`}>My Projects</h1>
    </div>
  );
}
