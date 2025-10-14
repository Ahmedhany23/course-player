import { ReactNode } from "react";

export interface IBreadCrumbNavItem {
  label: string;
  href?: string;
  icon?: ReactNode;
  ariaLabel?: string;
}

export interface IBreadCrumbNavProps {
  items: IBreadCrumbNavItem[];
  rtl?: boolean;
  separator?: ReactNode;
}
