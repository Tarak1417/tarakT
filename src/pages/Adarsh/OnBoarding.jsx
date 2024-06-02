import React from "react";
import Nav from "./Nav";
import ThemeContextProvider from "../../style/theme";

import TabsSection from "./TabSection";
import { CssBaseline } from "@mui/material";

const OnBoarding = () => {
  return (
    <ThemeContextProvider>
      <CssBaseline />
      <Nav />
      <TabsSection />
    </ThemeContextProvider>
  );
};

export default OnBoarding;
