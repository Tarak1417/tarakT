import { Box, IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import Newsidebar from "./Newsidebar";
import Newchatsection from "./Newchatsection";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Newchatpage = () => {

  return (
    <Box className="mx-[2px]"
      sx={{ backgroundColor: "background.main" , borderRadius : '14px' }}
    >
      <div className="hidden md:block">
        <div className="flex justify-between items-center mx-10 py-6 ">
          <h2 className="text-[25px]">Chat</h2>{" "}
          <Tooltip title="info" placement="top">
            <IconButton disableRipple variant="navIcon" sx={{ mr: 0 }}>
              <InfoOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </div>
      </div>
        <Newsidebar  />
    </Box>
  );
};

export default Newchatpage;
