import { MdDashboardCustomize, MdGroups } from "react-icons/md";
import { RiAdminFill, RiSlideshow4Fill } from "react-icons/ri";
import { LuGalleryHorizontalEnd } from "react-icons/lu";
import { GiAchievement } from "react-icons/gi";
import { FaSuitcase, FaBlogger, FaNewspaper } from "react-icons/fa";

export const links = [
  {
    name: "dashboard",
    link: "/",
    icon: <MdDashboardCustomize />,
  },
  {
    name: "set Admins",
    link: "/setAdmins",
    icon: <RiAdminFill />,
  },
  {
    name: "national excos",
    link: "/excos",
    icon: <FaSuitcase />,
  },
  {
    name: "blogs",
    link: "/blogs",
    icon: <FaBlogger />,
  },
  {
    name: "news",
    link: "/news",
    icon: <FaNewspaper />,
  },
  {
    name: "gallery",
    link: "/gallery",
    icon: <LuGalleryHorizontalEnd />,
  },
  {
    name: "showcase",
    link: "/showcase",
    icon: <RiSlideshow4Fill />,
  },
  {
    name: "achievements",
    link: "/achievements",
    icon: <GiAchievement />,
  },
];
export const TableHeading = ["s/No", "name", "email", "phone", "nosa set", "address"];
