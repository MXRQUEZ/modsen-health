import { ReactNode } from "react";

export interface IPage {
  name: string;
  path: string;
  icon: string;
  component: ReactNode;
}
