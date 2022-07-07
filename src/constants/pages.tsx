import { lazy } from "react";
import { IPage } from "@/types/IPage";

const HomePage = lazy(() => import("@/pages/home"));
const DoctorsPage = lazy(() => import("@/pages/doctors"));

export const pages: IPage[] = [
  {
    name: "Home",
    path: "/",
    icon: "fa-solid fa-house",
    component: <HomePage />,
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
    component: <DoctorsPage />,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: "fa-solid fa-address-book",
    component: <div />,
  },
];
