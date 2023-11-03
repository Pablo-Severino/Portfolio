import Link from "next/link";
import { useEffect, useState } from "react";
import SmoothScrollLink from "../SmoothScrollLink";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function IndexNavbar() {
  const [theme, setTheme] = useState(false);
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");

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
    <nav style={{backgroundColor: `${color}`}} className="fixed w-[100%] h-2 py-8 flex items-center bg-transparent">
      <Link href="/">
        <h1 className="px-14 text-[#06141B] dark:text-white text-2xl font-medium">Pablo._</h1>
      </Link>
      <ul className="w-[100%] hidden lg:flex gap-5 font-medium text-base flex justify-center">
        <SmoothScrollLink href="#home">
          <li className="text-[#06141B] dark:text-white">&#x0002F;&#x0002F; home</li>
        </SmoothScrollLink>
        <SmoothScrollLink href="#projects">
          <li className="text-[#06141B] dark:text-white">&#x0002F;&#x0002F; expertise</li>
        </SmoothScrollLink>
        <SmoothScrollLink href="#project">
          <li className="text-[#06141B] dark:text-white">&#x0002F;&#x0002F; project</li>
        </SmoothScrollLink>
        <SmoothScrollLink href="#skill">
          <li className="text-[#06141B] dark:text-white">&#x0002F;&#x0002F; skill</li>
        </SmoothScrollLink>
        <SmoothScrollLink href="#contact">
          <li className="text-[#06141B] dark:text-white">&#x0002F;&#x0002F; contact</li>
        </SmoothScrollLink>
      </ul>
      <label htmlFor="check" className="hidden lg:flex absolute min-w-[46px] h-6 bg-gray-200 cursor-pointer rounded-full right-5">
        <input type="checkbox" id="check" className="sr-only peer" onClick={() => setTheme(!theme)}/>
        <span className="w-2/5 h-4/5 bg-slate-700 absolute rounded-full left-1 top-0.5 peer-checked:bg-yellow-400 peer-checked:left-6 transition-all duration-500"></span>
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
