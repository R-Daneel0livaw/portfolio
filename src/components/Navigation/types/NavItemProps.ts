import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";

export interface NavItemProps {
  to: string;
  icon: IconDefinition;
  children: ReactNode;
  currentPage: string;
}