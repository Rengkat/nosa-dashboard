import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdNotifications } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
const Nav = () => {
  return (
    <div className="flex w-full justify-between items-center pt-3 lg:pt-0">
      {/* <GiHamburgerMenu fontSize={40} className=" cursor-pointer text-primary-300 " /> */}
      <div className="flex items-center gap-3">
        <div className="block lg:hidden border-2 border-gray-300 text-primary-500">
          <IoMenu fontSize={40} />
        </div>
        <div className="size-10 lg:size-10">
          <Image src={"/logo.png"} height={500} width={500} />
        </div>
      </div>
      <div className="flex items-center gap-5 lg:gap-10 ">
        <div className="relative">
          <IoMdNotifications fontSize={40} className="text-gray-400 cursor-pointer" />
          <div className="top-1 right-1 bg-gray-200 absolute p-[2px] rounded-full">
            <div className=" size-3 bg-red-600 rounded-full"></div>
          </div>
        </div>
        <div className=" size-10 lg:size-14 bg-gray-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default Nav;
