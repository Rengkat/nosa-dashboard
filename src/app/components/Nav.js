import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
const Nav = () => {
  return (
    <div className="flex w-full justify-between items-center">
      {/* <GiHamburgerMenu fontSize={40} className=" cursor-pointer text-primary-300 " /> */}
      <div className=" size-12">
        <Image src={"/logo.png"} height={500} width={500} />
      </div>
      <div className=" size-14 bg-gray-400 rounded-full"></div>
    </div>
  );
};

export default Nav;
