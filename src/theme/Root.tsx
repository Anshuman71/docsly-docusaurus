import React from "react";
import Docsly from "@docsly/base";
import "@docsly/base/index.css";
import { useLocation } from "@docusaurus/router";

export default function Root({ children }) {
  const { pathname } = useLocation();
  return (
    <>
      {children}
      <Docsly
        publicId="public_bsKNacuWYmCdRNEEt5qyI8-XdYxoURcugzU3"
        pathname={pathname}
      />
    </>
  );
}
