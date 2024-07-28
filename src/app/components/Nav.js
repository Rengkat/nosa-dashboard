import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdNotifications } from "react-icons/io";
const Nav = () => {
  return (
    <div className="flex w-full justify-between items-center">
      {/* <GiHamburgerMenu fontSize={40} className=" cursor-pointer text-primary-300 " /> */}
      <div className=" size-12">
        <Image src={"/logo.png"} height={500} width={500} />
      </div>
      <div className="flex items-center gap-10 ">
        <div className="relative">
          <IoMdNotifications fontSize={40} className="text-gray-400 cursor-pointer" />
          <div className="top-1 right-1 bg-gray-200 absolute p-[2px] rounded-full">
            <div className=" size-3 bg-red-600 rounded-full"></div>
          </div>
        </div>
        <div className=" size-14 bg-gray-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default Nav;
