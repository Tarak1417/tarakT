import React, { useCallback, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/material";
import axios from "axios";

const Newcontact = ({ setSharedData }) => {
  let page  = 1;
  const [ contacts , setContacts] =  useState([])
 let img = "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww"
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

  const fetchContactList  = useCallback(
    async () => {
        // setJobs(null);
        try {
            const response = await axios.get(
                `/hr/message/contact?page=${page}&limit=50`
            );
            const data = response.data;
            setContacts(data.contact)
        } catch (e) {
            console.warn(e);
        }
    },
    [setJobs, pageNo]
);

useEffect(() => {
  fetchContactList();
}, [fetchContactList]);


  const handleClick = (item) => {
    console.log("first", item);
    setSharedData(item);
  };
  return (
    <Box>
      <div className=" md:h-[72vh] md:py-2 px-2 md:overflow-y-scroll overflow-hidden no-scrollbar">
        <p className="h-[1px] md:hidden bg-[#111111] w-full"></p>
        {contacts.map((item, index) => (
          <div key={index}>
            <div className="flex gap-4 items-center p-1 my-3">
              <div className="h-[31px] w-[31px] md:h-[40px]  md:w-[50px] relative">
                <img
                  className="w-full h-full rounded-full object-cover object-top"
                  src={img}
                  alt=""
                />
              </div>
              <div className="flex w-full flex-row justify-between items-center" >             
              <div
                onClick={() => handleClick(item)}
                className="w-full font-bold"
              >
                <div className="text-base md:text-xs ">{item.firstName} {item.lastName}</div>

                <div className="mt-1 line-clamp-1 text-xs text-[#434343] md:text-[9px]">
                  {item.email}
                </div>
              </div>
            
              <MoreVertIcon sx={{width : "18px" , height :"18px"}} className="text-[35px] md:text-[20px]" />
              </div>
            </div>
            <p className="h-[1px] md:hidden bg-[#111111] w-full"></p>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default Newcontact;
