import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

const NoticeBoard = ({ eventData }) => {
 
  const [datastore , setStore] = useState([]);

  useEffect(()=>{
    setStore(eventData)
  },[eventData])


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short" };
    return date.toLocaleDateString("en-US", options);
  };

  const removePTags = (caption) => {
    return caption.replace(/<p>|<\/p>/g, '');
  };

  const getBackgroundColor = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();

    if (day >= 1 && day <= 10) {
      return '#fbbf24'; // yellow
    } else if (day > 10 && day <= 20) {
      return '#10b981'; // green
    } else {
      return '#f97316'; // orange
    }
  };
  const getClassName = (dateString) => {
    const date = new Date(dateString);
    const shortMonth = new Intl.DateTimeFormat("en-US", { month: "short" }).format(date);

    return `notice-${shortMonth.toLowerCase()}`
  };

  return (
    <Box
      sx={{
        backgroundColor: "background.view",
      }}
      className="rounded-lg"
    >
      <div className="rounded-lg pt-4 mb-4 shadow-md h-96 overflow-hidden relative">
        <p
          className=" mb-4 border-l-4 border-blue-500 pl-2 text-2xl"
          gutterBottom
        >
          Notice Boards
        </p>
        <div className="px-1 p-4 overflow-y-auto">
          <div className="">
            {datastore ? datastore?.map((event, index) => (
              <div key={index} className="mb-4">
                <div className="flex gap-4 justify-center items-center">
                  <div
                    className={`w-1/4 h-[60px] flex items-center justify-center text-white rounded-lg ${getClassName(event.updatedAt)}`}
                    style={{
                     // backgroundColor: event.updatedAt ? getBackgroundColor(event.updatedAt) : event.backgroundColor
                    }}
                  >
                    <div className="w-[97%] h-[57px] flex items-center justify-center border-2 border-gray-900 rounded-lg p-0">
                      <p className="p-1 text-gray-900 font-semibold text-center gap-0">
                        {event.updatedAt ? formatDate(event.updatedAt) : event.date}
                      </p>
                    </div>
                  </div>
                  <div className="w-4/5">
                    <h1 className="text-sm">{event.title}</h1>
                    <p className="text-xs text-gray-500">{event.caption ? removePTags(event.caption) : event.description}</p>
                  </div>
                </div>
              </div>
            ))
          :
          "Loading...."
          }
          </div>
        </div>
        <style jsx>{`
          .overflow-y-auto::-webkit-scrollbar {
            display: none;
          }

          .overflow-y-auto {
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </Box>
  );
};

export default NoticeBoard;
