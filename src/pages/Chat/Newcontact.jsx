import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/material";

const Newcontact = ({ setSharedData }) => {
  const userList = [
    {
      id: 1,
      name: "Randy",
      email: "randy@clikkle.com",
      img: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      name: "John",
      email: "john@clikkle.com",
      img: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Michael",
      email: "michael@clikkle.com",
      img: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    },
    {
      id: 4,
      name: "Steve",
      email: "steve@clikkle.com",
      img: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    },
    {
      id: 5,
      name: "Brock",
      email: "brock@clikkle.com",
      img: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    },
    {
      id: 6,
      name: "Kane",
      email: "kane@clikkle.com",
      img: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    },
    {
      id: 7,
      name: "Jason",
      email: "jason@clikkle.com",
      img: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    },
    {
      id: 8,
      name: "Armond",
      email: "armond@clikkle.com",
      img: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    },
    {
      id: 9,
      name: "Henery",
      email: "henery@clikkle.com",
      img: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    },

    {
      id: 10,
      name: "Shakira",
      email: "shakiradwain@clikkle.com",
      img: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    },
  ];
  const handleClick = (item) => {
    console.log("first", item);
    setSharedData(item);
  };
  return (
    <Box
      sx={{
        backgroundColor: "background.view",
        width: "100%",
        borderTopLeftRadius: "15px",
      }}
    >
      {" "}
      <div className="h-[70vh] md:h-[62vh]  overflow-y-scroll  oveflow-hidden no-scrollbar">
        <p className="h-[1px] bg-slate-500 w-full"></p>
        {userList.map((item, index) => (
          <div key={index}>
            {" "}
            <div className="flex  justify-between items-center my-3">
              <div className="flex gap-4 items-center ">
                {" "}
                <div className="h-[52px] w-[65px] md:h-[40px]   md:w-[60px] relative">
                  <img
                    className="w-full h-full rounded-[50%] object-cover object-top"
                    src={item.img}
                    alt=""
                  />
                </div>
                <div onClick={() => handleClick(item)} className="w-full grow">
                  <div className="flex  items-center">
                    <div className="text-[24px] md:text-[16px]">
                      {item.name}
                    </div>
                  </div>
                  <div className="flex mt-2 md:mt-0 justify-between items-center ">
                    <div className="line-clamp-1 text-[#939393] md:text-[12px]">
                      {item.email}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <MoreVertIcon className="text-[35px] md:text-[20px]" />
              </div>
            </div>
            <p className="h-[1px] md:hidden bg-slate-500 w-full"></p>
          </div>
        ))}{" "}
      </div>
    </Box>
  );
};

export default Newcontact;
