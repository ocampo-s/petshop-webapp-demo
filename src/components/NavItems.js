import * as Icons from "react-icons/fa"

export const navItems = [
  {
    id: 1,
    title: "Home",
    path: "./",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaCat />,
  },
  {
    id: 2,
    title: "Products",
    path: "./products",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaBoxes />,
  },
  {
     id: 3,
     title: "About Us",
     path: "./contactus",
     nName: "nav-item",
     sName: "sidebar-item",
     icon: <Icons.FaInfoCircle />,
  },
  // {
  //   id: 4,
  //   title: "Account",
  //   path: "./account",
  //   nName: "nav-item",
  //   sName: "sidebar-item",
  //   icon: <Icons.FaUser />,
  // },
];