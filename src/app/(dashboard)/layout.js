import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Toggle from "./Toogle";

export default function DashboardLayout({ children }) {
  return (
    <div className="w-full h-screen bg-white">
      <nav className=" h-[6rem] bg-gray-200 fixed top-0 left-0 right-0 z-20 shadow pl-[3rem] pr-[3rem] md:pr-[5rem] py-[1rem] ">
        <Nav />
      </nav>
      <div className="mt-[6rem] flex">
        <Toggle />
        {/* lg:ml-[20rem] */}
        <div className="ml-0 w-full p-5">{children}</div>
      </div>
    </div>
  );
}
