import React from "react";
import { Breadcrumb } from "antd";
import Link from "next/link";
import { IBreadCrumbNavProps } from "./types";

const BreadCrumbNav: React.FC<IBreadCrumbNavProps> = ({
  items,
  rtl = false,
  separator = "›",
}) => {
  return (
    <Breadcrumb
      separator={separator}
      style={{ direction: rtl ? "rtl" : "ltr" }}
      aria-label="breadcrumb"
      items={items.map((item) => ({
        title: item.href ? (
          <Link href={item.href} aria-label={item.ariaLabel || item.label}>
            {item.icon && (
              <span style={{ marginInlineEnd: 4 }}>{item.icon}</span>
            )}
            {item.label}
          </Link>
        ) : (
          <>
            {item.icon && (
              <span style={{ marginInlineEnd: 4 }}>{item.icon}</span>
            )}
            {item.label}
          </>
        ),
      }))}
    />
  );
};

export default BreadCrumbNav;
