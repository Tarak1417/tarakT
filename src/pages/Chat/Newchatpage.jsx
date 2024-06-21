import { Box, IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import Newsidebar from "./Newsidebar";
import Newchatsection from "./Newchatsection";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Newchatpage = () => {

  return (
    <Box className="mx-[2px] h-full overflow-hidden"
      sx={{ backgroundColor: "background.main" , borderRadius : '14px' }}
    >
      <div className="hidden md:block">
        <div className="flex justify-between items-center mx-9 py-3 ">
          <div className="text-xl font-bold text-[#A5A5A5]">Chat</div>
          <Tooltip title="info" placement="top">
            <IconButton disableRipple variant="navIcon" sx={{ mr: 0 }}>
              <InfoOutlinedIcon fontSize="medium" />
            </IconButton>
          </Tooltip>
        </div>
      </div>
        <Newsidebar  />
    </Box>
  );
};

export default Newchatpage;
