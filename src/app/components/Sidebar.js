"use client";
import { Fragment } from "react";
import { links } from "../_utils/page";
import Link from "next/link";
import { ActiveLink } from "../_utils/ActiveLink";
import { useDispatch } from "react-redux";
import { logoutAdmin } from "../../../Redux/services/AppSlice";
import { useLogOutMutation } from "../../../Redux/services/AuthSlice";
import { IoLogOut } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const [logout] = useLogOutMutation();
  const dispatch = useDispatch();
  const handleClick = async () => {
    await logout().unwrap();
    dispatch(logoutAdmin());
    router.replace("/login");
  };
  return (
    <div className="flex flex-col">
      {links.map((link) => {
        return (
          <Fragment key={link.name}>
            <ActiveLink href={link.link} name={link.name} icon={link.icon} />
          </Fragment>
        );
      })}
      <button
        onClick={handleClick}
        className="text-gray-600 flex items-center gap-5 text-[1.2rem] capitalize font-bold mx-[1rem] pl-[2rem] py-3 border-[1px] shadow rounded-md my-1">
        <span>
          <IoLogOut />
        </span>
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
