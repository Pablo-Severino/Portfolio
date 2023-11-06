import Link from "next/link"

export const IndexContact = () => {
  return (
    <div id="contact" className="absolute w-[100%] h-[532px] left-0 top-[3202px]">
      <div className="absolute w-[371px] h-[285px] left-[60vw] top-[142px] bg-dev" />
      <div className="absolute w-[273px] h-[119px] left-[17vw] top-[281px]">
        <div className="absolute w-[261px] h-[38px] left-0 top-[81px]">
          <Link href="https://github.com/Pablo-Severino" className=" hover:cursor-mickey-hover hover:opacity-70">
            <div className="absolute w-[103px] h-[38px] left-[158px] top-0">
              <div className="absolute w-[103px] h-[38px] left-0 top-0 rounded-[5px] border border-[#11212D] dark:border-[#6B7280]" />
              <div className="absolute w-[55px] h-[15px] left-[38px] top-[13px] text-[#11212D] dark:text-white text-[15px] font-normal">Github</div>
              <div className="absolute w-6 h-6 left-[7px] top-[7px] bg-github-social-white dark:bg-github-social-dark" />
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/pablo-severino-b23883207" className=" hover:cursor-mickey-hover hover:opacity-70">
            <div className="absolute w-[122px] h-[38px] left-0 top-0">
              <div className="absolute w-[122px] h-[38px] left-0 top-0 rounded-[5px] border border-[#11212D] dark:border-[#6B7280] dark:text-white" />
              <div className="absolute w-[72px] h-[15px] left-[43px] top-[13px] text-[#11212D] dark:text-white text-[15px] font-normal">Linkedin</div>
              <div className="absolute w-6 h-6 left-[11px] top-[7px] bg-linkedin-white dark:bg-linkedin-dark" />
            </div>
          </Link>
        </div>
        <div className="absolute w-[270px] h-5 left-[3px] top-0 text-black dark:text-white text-lg font-medium">pabloseverino40@gmail.com</div>
      </div>
      <div className="absolute w-[184px] h-[47px] left-[17vw] top-[212px]">
        <div className="absolute w-[184px] h-[17px] left-0 top-[30px] text-black dark:text-white text-lg font-medium">São Paulo, Brazil</div>
        <div className="absolute w-[63px] h-6 left-0 top-0 text-black dark:text-white text-[21px] font-bold">Aguaí</div>
      </div>
      <div className="absolute w-[324px] h-[51px] left-[17vw] top-[105px]">
        <div className="absolute w-[324px] h-3 left-0 top-[39px] text-black dark:text-white text-[15px] font-bold">I love exchanging ideas about codes!</div>
        <div className="absolute w-72 h-[30px] left-0 top-0 text-black dark:text-white text-3xl font-bold">Give me a touch!</div>
      </div>
    </div>
  );
}
