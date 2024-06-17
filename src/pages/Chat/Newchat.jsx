import { Box } from "@mui/material";
import React from "react";

const Newchat = ({ setSharedData }) => {
  const userList = [
    {
      id: 1,
      name: "Shakira",
      msg: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat a repellat voluptatem, nulla omnis, fugit earum   quidem non laborum iure facilis excepturi quod maxime dolor    reprehenderit soluta ex autem explicabo?",
      img: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      name: "John",
      msg: "john@clikkle.com",
      img: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Michael",
      msg: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat a repellat voluptatem, nulla omnis, fugit earum   quidem non laborum iure facilis excepturi quod maxime dolor    reprehenderit soluta ex autem explicabo?",
      img: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    },
    {
      id: 4,
      name: "Steve",
      msg: "steve@clikkle.com",
      img: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    },
    {
      id: 5,
      name: "Brock",
      msg: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat a repellat voluptatem, nulla omnis, fugit earum   quidem non laborum iure facilis excepturi quod maxime dolor    reprehenderit soluta ex autem explicabo?",
      img: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    },
    {
      id: 6,
      name: "Kane",
      msg: "kane@clikkle.com",
      img: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    },
    {
      id: 7,
      name: "Jason",
      msg: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat a repellat voluptatem, nulla omnis, fugit earum   quidem non laborum iure facilis excepturi quod maxime dolor    reprehenderit soluta ex autem explicabo?",
      img: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    },
    {
      id: 8,
      name: "Armond",
      msg: "armond@clikkle.com",
      img: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    },
    {
      id: 9,
      name: "Henery",
      msg: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat a repellat voluptatem, nulla omnis, fugit earum   quidem non laborum iure facilis excepturi quod maxime dolor    reprehenderit soluta ex autem explicabo?",
      img: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    },
    {
      id: 10,
      name: "Randy",
      msg: "randy@clikkle.com",
      img: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    },
  ];
  const handleClick = (item) => {
    console.log("shared data from chat", item);
    setSharedData(item);
  };

  return (
    <Box sx={{ backgroundColor: "background.view", width: "100%" }}>
      <div className="h-[70vh] md:h-[62vh]  oveflow-hidden overflow-y-scroll no-scrollbar">
        <p className="h-[1px] bg-slate-500 w-full"></p>
        {userList.map((item, index) => (
          <div key={index}>
            {" "}
            <div className="flex  gap-4 items-center my-3 ">
              <div className="h-[52px] w-[65px] md:h-[40px]  md:w-[50px] relative">
                <img
                  className="w-full h-full rounded-[50%] object-cover object-top"
                  src={item.img}
                  alt=""
                />
                <p className="h-[12px] md:h-[9px] w-[12px] md:w-[9px] bg-blue-500 border-2 p-[2px]  rounded-[50%] absolute bottom-1 right-[0px]"></p>
              </div>
              <div onClick={() => handleClick(item)} className="grow w-full">
                <div className="flex justify-between items-center">
                  <div className="text-[24px] md:text-[16px] ">{item.name}</div>
                  <div className="text-blue-500 text-[17px] md:text-[10px]">
                    Now
                  </div>
                </div>
                <div className="flex mt-2 md:mt-0 justify-between items-center ">
                  <div className="line-clamp-1 text-[#939393] md:text-[12px]">
                    {item.msg}
                  </div>
                  <div className="bg-blue-500 rounded-[50%] md:text-[8px] px-[5px] ">
                    1
                  </div>
                </div>
              </div>
            </div>
            <p className="h-[1px] md:hidden bg-slate-500 w-full"></p>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default Newchat;
