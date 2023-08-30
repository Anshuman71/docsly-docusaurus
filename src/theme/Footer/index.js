import React from "react";
import Footer from "@theme-original/Footer";

import Huddle from "@huddlerun/react";
import "@huddlerun/react/styles.css";
import { useLocation } from "@docusaurus/router";

export default function FooterWrapper(props) {
  const { pathname } = useLocation();
  return (
    <>
      <Footer {...props} />
      <Huddle
        frontendKey="huddle_fe_liwm89xxmXdgKydAGal6SYnfbzESuM1Z1Ecq8FIf"
        pathname={pathname}
      />
    </>
  );
}
