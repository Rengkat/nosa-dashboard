import { MdDashboardCustomize, MdGroups } from "react-icons/md";
import { RiAdminFill, RiSlideshow4Fill } from "react-icons/ri";
import { LuGalleryHorizontalEnd } from "react-icons/lu";
import { GiAchievement } from "react-icons/gi";
import { FaSuitcase, FaBlogger, FaNewspaper, FaLayerGroup } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { MdEmojiEvents } from "react-icons/md";
export const links = [
  {
    name: "dashboard",
    link: "/",
    icon: <MdDashboardCustomize />,
  },
  {
    name: "set Admins",
    link: "/set-admins",
    icon: <RiAdminFill />,
  },
  // {
  //   name: "national excos",
  //   link: "/excos",
  //   icon: <FaSuitcase />,
  // },
  {
    name: "Manage Sets",
    link: "/nosa-sets",
    icon: <FaPeopleGroup />,
  },

  {
    name: "Blogs/ News",
    link: "/blogs-news-events",
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
export const OfficialTableHeading = ["s/No", "name", "post", "phone", "set", ""];
export const setAdminTableHeading = ["s/No", "name", "email", "phone", "set", ""];
export const SetTableHeading = ["s/No", "name", "email", "phone", "address", "status"];
export const newsHeadings = ["s/No", "image", "title", "date", ""];
export const galleryHeadings = ["s/No", "image", "title", "category", "date", ""];
export const mockData = [
  {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+2347012345678",
    nosaSet: 2018,
    address: "12 Elm Street, Lagos, Nigeria",
    status: "active",
  },
  {
    name: "Jane Smith",
    email: "janesmith@example.com",
    phone: "+2348098765432",
    nosaSet: 2019,
    status: "active",
    address: "45 Oak Avenue, Abuja, Nigeria",
  },
  {
    name: "Michael Johnson",
    email: "michaeljohnson@example.com",
    phone: "+2348034567890",
    nosaSet: 2017,
    address: "78 Pine Road, Port Harcourt, Nigeria",
    status: "blocked",
  },
  {
    name: "Emily Brown",
    email: "emilybrown@example.com",
    phone: "+2348023456789",
    nosaSet: 2020,
    address: "23 Maple Lane, Kano, Nigeria",
    status: "active",
  },
  {
    name: "David Williams",
    email: "davidwilliams@example.com",
    phone: "+2348067890123",
    nosaSet: 2021,
    address: "56 Birch Boulevard, Kaduna, Nigeria",
    status: "blocked",
  },
  {
    name: "Sarah Wilson",
    email: "sarahwilson@example.com",
    phone: "+2348076543210",
    nosaSet: 2016,
    address: "34 Cedar Drive, Ibadan, Nigeria",
    status: "active",
  },
  {
    name: "James Taylor",
    email: "jamestaylor@example.com",
    phone: "+2348054321098",
    nosaSet: 2015,
    address: "67 Willow Street, Enugu, Nigeria",
    status: "active",
  },
  {
    name: "Linda Martinez",
    email: "lindamartinez@example.com",
    phone: "+2347043210987",
    nosaSet: 2014,
    address: "89 Spruce Way, Jos, Nigeria",
    status: "active",
  },
  {
    name: "Robert Anderson",
    email: "robertanderson@example.com",
    phone: "+2347010987654",
    nosaSet: 2013,
    address: "12 Fir Lane, Benin City, Nigeria",
    status: "blocked",
  },
  {
    name: "Patricia Thomas",
    email: "patriciathomas@example.com",
    phone: "+2348098765432",
    nosaSet: 2022,
    address: "34 Ash Street, Maiduguri, Nigeria",
    status: "active",
  },
];
export const dates = [];
const date = new Date();
const month = date.getMonth();
const currentYear = date.getFullYear();
if (month + 1 > 8) {
  for (let i = 1978; i <= currentYear; i++) {
    dates.push({
      year: `${i}`,
      value: `${i}`,
    });
  }
} else {
  for (let i = 1978; i < currentYear; i++) {
    dates.push({
      year: `${i}`,
      value: `${i}`,
    });
  }
}
export const employmentStatus = [
  {
    status: "Unemployed",
    value: "unemployed",
  },
  {
    status: "Employed",
    value: "employed",
  },
  {
    status: "Self Employed",
    value: "selfEmployed",
  },
];
export const dashboardStats = [
  {
    name: "NOSA Members",
    number: 484,
    icon: <IoIosPeople />,
  },
  {
    name: "NOSA sets",
    number: 45,
    icon: <FaLayerGroup />,
  },
  {
    name: "Blog Posts/ News",
    number: 2,
    icon: <FaBlogger />,
  },

  {
    name: "Events",
    number: 8,
    icon: <MdEmojiEvents />,
  },
];
