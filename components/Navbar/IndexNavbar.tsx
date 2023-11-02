import { useEffect, useState } from "react";
import SmoothScrollLink from "../SmoothScrollLink";

export default function IndexNavbar() {
  const [ theme, setTheme ] = useState(false);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <nav className="w-[100%] h-2 py-8 flex items-center bg-transparent">
      <div className="w-3 h-3">
        <div className="bg-white border-spacing-1"></div>
        <div className="bg-white border-spacing-1"></div>
        <div className="bg-white border-spacing-1"></div>
      </div>
      <h1 className="px-8">Pablo._</h1>
      <ul className="w-18 px-80 gap-5 font-medium text-sm flex">
        <SmoothScrollLink href="#home">
          <li>// home</li>
        </SmoothScrollLink>
        <SmoothScrollLink href="#projects">
          <li>// expertise</li>
        </SmoothScrollLink>
        <SmoothScrollLink href="#project">
          <li>// project</li>
        </SmoothScrollLink>
        <SmoothScrollLink href="#skill">
          <li>// skill</li>
        </SmoothScrollLink>
        <SmoothScrollLink href="#contact">
          <li>// contact</li>
        </SmoothScrollLink>
      </ul>
      <label htmlFor="check" className="bg-gray-200 cursor-pointer relative w-12 h-6 rounded-full">
        <input type="checkbox" id="check" className="sr-only peer" onClick={() => setTheme(!theme)}/>
        <span className="w-2/5 h-4/5 bg-slate-700 absolute rounded-full left-1 top-0.5 peer-checked:bg-yellow-400 peer-checked:left-6 transition-all duration-500"></span>
      </label>
    </nav>
  );
}
