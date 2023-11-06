import Link from "next/link";
import { useEffect, useState } from "react";
import SmoothScrollLink from "../SmoothScrollLink";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const IndexNavbar = () => {
  const [theme, setTheme] = useState(false);
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <nav className="fixed w-[100%] h-[11vh] z-50 flex items-center bg-[#bababa] bg-opacity-20 dark:bg-[#121212] dark:bg-opacity-20 bg-clip-padding blur-backdrop-filter">
      <Link href="/" className="hover:text-[#434b50] dark:hover:text-gray-400 dark:text-white transition-all duration-200 cursor-mickey-hover">
        <h1 className="absolute left-[60px] top-[16px] text-2xl font-medium">Pablo._</h1>
      </Link>
      <ul className="w-[100%] hidden lg:flex flex">
        <SmoothScrollLink href="#home">
          <div className="hover:text-[#5c676d] dark:hover:text-gray-400 dark:text-white transition-all duration-200 cursor-mickey-hover">
            <li className="absolute w-[15px] h-[9px] left-[33vw] top-[10px] text-opacity-80 text-[10.60px] font-medium">01</li>
            <li className="absolute w-[68px] h-3.5 left-[29vw] top-[3.8vh] text-base font-medium">&#x0002F;&#x0002F; home</li>
          </div>
        </SmoothScrollLink>
        <SmoothScrollLink href="#expertise">
          <div className="hover:text-[#5c676d] dark:hover:text-gray-400 dark:text-white transition-all duration-200 cursor-mickey-hover">
            <li className="absolute w-[13px] h-2 left-[43.5vw] top-[10px] text-opacity-80 text-[10.60px] font-medium">02</li>
            <li className="absolute w-[117px] h-3.5 left-[36vw] top-[3.8vh] text-base font-medium">&#x0002F;&#x0002F; expertise</li>
          </div>
        </SmoothScrollLink>
        <SmoothScrollLink href="#project">
          <div className="hover:text-[#5c676d] dark:hover:text-gray-400 dark:text-white transition-all duration-200 cursor-mickey-hover">
            <li className="absolute w-[13px] h-2 left-[52.1vw] top-[10px] text-opacity-80 text-[10.60px] font-medium">03</li>
            <li className="absolute w-[97px] h-3.5 left-[46vw] top-[3.8vh] text-base font-medium">&#x0002F;&#x0002F; project</li>
          </div>
        </SmoothScrollLink>
        <SmoothScrollLink href="#skill">
          <div className="hover:text-[#5c676d] dark:hover:text-gray-400 dark:text-white transition-all duration-200 cursor-mickey-hover">
            <li className="absolute w-[13px] h-2 left-[59.3vw] top-[10px] text-opacity-80 text-[10.60px] font-medium">04</li>
            <li className="absolute w-[79px] h-3.5 left-[54.5vw] top-[3.8vh] text-base font-medium">&#x0002F;&#x0002F; skill</li>
          </div>
        </SmoothScrollLink>
        <SmoothScrollLink href="#contact">
          <div className="hover:text-[#5c676d] dark:hover:text-gray-400 dark:text-white transition-all duration-200 cursor-mickey-hover">
            <li className="absolute w-[13px] h-2 left-[68.1vw] top-[10px] text-opacity-80 text-[10.60px] font-medium">05</li>
            <li className="absolute w-[96px] h-3.5 left-[62vw] top-[3.8vh] text-base font-medium">&#x0002F;&#x0002F; contact</li>
          </div>
        </SmoothScrollLink>
      </ul>
      <label htmlFor="check" className="hidden lg:flex absolute min-w-[46px] h-6 top-[3.8vh] bg-gray-200 cursor-mickey-hover rounded-full right-5">
        <input type="checkbox" id="check" className="sr-only peer" onClick={() => setTheme(!theme)}/>
        <span className="absolute w-2/5 h-4/5 bg-slate-700 rounded-full left-1 top-0.5 peer-checked:bg-yellow-400 peer-checked:left-6 transition-all duration-500"></span>
      </label>

      {/* Mobile Button */}
      <div onClick={handleNav} className="block lg:hidden z-10 absolute top-3 right-3 bottom-0 text-[#06141B] dark:text-white cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "block lg:hidden absolute top-0 right-0 bottom-0 w-[276px] h-[395px] bg-[#dcdcdc] text-[#06141B] dark:bg-black dark:text-white text-center ease-in duration-500"
            : "block lg:hidden absolute top-0 right-[-100%] bottom-0 w-[276px] h-[395px] bg-[#dcdcdc] text-[#06141B] dark:bg-black dark:text-white text-center ease-in duration-500"
      }>
        <ul className="pt-[65px]">
          <SmoothScrollLink href="#home">
            <li className="pt-[15px] px-[197px] hover:text-[#5c676d] dark:hover:text-gray-400">home</li>
          </SmoothScrollLink>
          <SmoothScrollLink href="#projects">
            <li className="pt-[15px] px-[150px] hover:text-[#5c676d] dark:hover:text-gray-400">expertise</li>
          </SmoothScrollLink>
          <SmoothScrollLink href="#project">
            <li className="pt-[15px] px-[170px] hover:text-[#5c676d] dark:hover:text-gray-400">project</li>
          </SmoothScrollLink>
          <SmoothScrollLink href="#skill">
            <li className="pt-[15px] px-[190px] hover:text-[#5c676d] dark:hover:text-gray-400">skill</li>
          </SmoothScrollLink>
          <SmoothScrollLink href="#contact">
            <li className="pt-[15px] px-[171px] hover:text-[#5c676d] dark:hover:text-gray-400">contact</li>
          </SmoothScrollLink>
        </ul>
        <label htmlFor="toggle" className="block lg:flex absolute min-w-[46px] h-6 bg-gray-200 cursor-pointer rounded-full right-5">
          <input type="checkbox" id="toggle" className="sr-only peer" onClick={() => setTheme(!theme)}/>
          <span className="w-2/5 h-4/5 bg-slate-700 absolute rounded-full left-1 top-0.5 peer-checked:bg-yellow-400 peer-checked:left-6 transition-all duration-500"></span>
        </label>
      </div>
    </nav>
  );
}