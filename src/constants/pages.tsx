import { IPage } from "@/types/IPage";
import Home from "@/pages/home";
import Doctors from "@/pages/doctors";

export const pages: IPage[] = [
  {
    name: "Home",
    path: "/",
    icon: "fa-solid fa-house",
    component: <Home />,
  },
  {
    name: "Services",
    path: "/services",
    icon: "fa-solid fa-notes-medical",
    component: <div />,
  },
  {
    name: "Clinic",
    path: "/clinic",
    icon: "fa-solid fa-house-chimney-medical",
    component: <div />,
  },
  {
    name: "Doctors",
    path: "/doctors",
    icon: "fa-solid fa-user-nurse",
    component: <Doctors />,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: "fa-solid fa-address-book",
    component: <div />,
  },
];
