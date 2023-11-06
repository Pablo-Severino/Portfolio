import React, { Component } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] });

class IndexExpertise extends React.Component {
  render() {
    return (
      <div className="relative w-[100%] h-[471.20px]">
        <h1 id="expertise" className={`absolute w-[35vw] h-20 left-[35vw] top-[50vh] text-black dark:text-white text-[64.30px] font-extrabold ${inter.className}`}>My Expertise</h1>
        <div className="absolute left-[10vw] top-[65vh]">
          <div className="absolute w-[366.30px] h-[333.20px] left-0 top-[138px] border-2 border-slate-900 dark:border-white">
            <p className="absolute w-56 h-[72px] left-[67px] top-[174px] text-slate-900 dark:text-white text-base font-medium">Experienced in both functional: Python, JavaScript, TypeScript.</p>
            <div className="absolute w-[120px] h-2 left-[95px] top-[87px] bg-pink-600"></div>
            <h2 className={`absolute w-[177px] h-[55px] left-[98px] top-[64.5px] text-slate-900 dark:text-white text-[25px] font-extrabold ${inter.className}`}>Software Development</h2>
            <div className="absolute w-11 h-[131px] left-[26px] top-[146px] bg-code-white dark:bg-code-dark"></div>
            <div className="absolute w-[42px] h-[42px] left-[34px] top-[70px] bg-software-white dark:bg-software-dark bg-no-repeat"></div>
          </div>
          <div className="absolute w-[366.30px] h-[333.20px] left-[366px] top-[138px] border-2 border-slate-900 dark:border-white">
            <p className="absolute w-[273px] h-[97px] left-[67px] top-[164px] text-slate-900 dark:text-white text-base font-medium">Passionate about UI/UX. Over 3 years of development experience in HTML, CSS, JS, React and NextJS frameworks.</p>
            <div className="absolute w-[177px] h-2 left-[92px] top-[91px] bg-blue-700"></div>
            <h2 className={`absolute w-[177px] h-[55px] left-[98px] top-[67px] text-slate-900 dark:text-white text-[25px] font-extrabold ${inter.className}`}>Frontend Dev React, NextJS</h2>
            <div className="absolute w-11 h-[131px] left-[26px] top-[146px] bg-code-white dark:bg-code-dark"></div>
            <div className="absolute w-[51px] h-12 left-[36px] top-[68px] bg-web-white dark:bg-web-dark bg-no-repeat"></div>
          </div>
          <div className="absolute w-[366.30px] h-[333.20px] left-[732px] top-[138px] border-2 border-slate-900 dark:border-white">
            <p className="absolute w-[275px] h-[100px] left-[67px] top-[163px] text-slate-900 dark:text-white text-base font-medium">Skilled in developing hybrid mobile apps and cross-platform solutions using the React Native framework.</p>
            <div className="absolute w-[227px] h-2 left-[100px] top-[92px] bg-orange-500"></div>
            <h2 className={`absolute w-[220px] left-[104px] top-[70px] text-slate-900 dark:text-white text-[26px] font-extrabold ${inter.className}`}>React Native Dev Android, iOS</h2>
            <div className="absolute w-11 h-[131px] left-[26px] top-[146px] bg-code-white dark:bg-code-dark"></div>
            <div className="absolute w-10 h-[43px] left-[47px] top-[70px] bg-mobile-white dark:bg-mobile-dark bg-no-repeat"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default IndexExpertise