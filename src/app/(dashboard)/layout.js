import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="w-full h-screen bg-white">
      <nav className="h-[6rem] bg-gray-200 fixed top-0 left-0 right-0 z-20 shadow pl-[3rem] pr-[5rem] py-[1rem] ">
        <Nav />
      </nav>
      <div className="mt-[6rem] flex">
        <div className="w-[20rem] bg-gray-200 fixed left-0 bottom-0 top-[6rem] z-20">
          <Sidebar />
        </div>
        <div className="ml-[20rem] w-full p-5">{children}</div>
      </div>
    </div>
  );
}
