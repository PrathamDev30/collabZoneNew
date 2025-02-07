import React from "react";
import Box from "@mui/material/Box";
import Sidenav from "../components/Sidenav";
import Header from "../components/Header";

const Quiz = () => {
  return (
    <div>
      <Header />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>This is Quiz Window</h1>
        </Box>
      </Box>
    </div>
  );
};

export default Quiz;
