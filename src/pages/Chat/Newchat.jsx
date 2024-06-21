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
    <Box >
      <div className=" md:h-[62vh] md:overflow-y-scroll overflow-hidden no-scrollbar">
        <p className="h-[1px] md:hidden bg-[#111111] w-full"></p>
        {userList.map((item, index) => (
          <div key={index}  >
            <div className="flex gap-4 items-center p-1 my-3">
              <div className="h-[31px] w-[31px] md:h-[40px]  md:w-[50px] relative">
                <img
                  className="w-full h-full rounded-full object-cover object-top"
                  src={item.img}
                  alt=""
                />
                <p className="h-[7px]  w-[7px]  bg-blue-500 border p-[2px] md:right-[1px] md:bottom-[3px] rounded-full absolute bottom-[4px] right-[-1px]"></p>
              </div>
              <div onClick={() => handleClick(item)} className="w-full font-bold">
                <div className="flex  justify-between items-center">
                  <div className="text-sm  md:text-xs ">{item.name}</div>
                  <div className="text-[#3A7EC1] text-xs md:text-[8px]">
                    Now
                  </div>
                </div>
                <div className="flex mt-1 md:mt-0 justify-between items-center ">
                  <div className="line-clamp-1 text-xs text-[#434343] md:text-[12px]">
                    {item.msg}
                  </div>
                  <div className="bg-[#3A7EC1] text-[10px] rounded-full md:text-[8px] px-[5px] ">
                    1
                  </div>
                </div>
              </div>
            </div>
            <p className="h-[1px] md:hidden bg-[#111111] w-full"></p>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default Newchat;
