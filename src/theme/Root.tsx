import React from "react";
import Docsly from "@docsly/base";
import "@docsly/base/index.css";
import { useLocation } from "@docusaurus/router";

export default function Root({ children }) {
  const { pathname } = useLocation();
  return (
    <>
      {children}
      <Docsly publicId="asdfasdfasdf" pathname={pathname} />
    </>
  );
}
