import React from "react";

const JobCards = () => {
  const data = [
    { id: 1, title: "Full Stack Developer", date: "12 Nov 2023", name: "George Anikan", label: "Label1" },
    { id: 2, title: "Frontend Developer", date: "12 Nov 2023", name: "John Doe", label: "Label2" },
    { id: 1, title: "Full Stack Developer", date: "12 Nov 2023", name: "George Anikan", label: "Label1" },
    { id: 2, title: "Graphics Designer", date: "12 Nov 2023", name: "John Doe", label: "Label2" },
    { id: 1, title: "Backend Developer", date: "12 Nov 2023", name: "George Anikan", label: "Label1" },
    { id: 2, title: "QA Tester", date: "12 Nov 2023", name: "John Doe", label: "Label2" },
    { id: 1, title: "Marketing Manager", date: "12 Nov 2023", name: "George Anikan", label: "Label1" },
    { id: 2, title: "Data Architect", date: "12 Nov 2023", name: "John Doe", label: "Label2" },
    { id: 1, title: "Full Stack Developer", date: "12 Nov 2023", name: "George Anikan", label: "Label1" },
    { id: 2, title: "Frontend Developer", date: "12 Nov 2023", name: "John Doe", label: "Label2" },
    { id: 1, title: "Full Stack Developer", date: "12 Nov 2023", name: "George Anikan", label: "Label1" },
    { id: 2, title: "Frontend Developer", date: "12 Nov 2023", name: "John Doe", label: "Label2" },
    { id: 1, title: "Full Stack Developer", date: "12 Nov 2023", name: "George Anikan", label: "Label1" },
    { id: 2, title: "Frontend Developer", date: "12 Nov 2023", name: "John Doe", label: "Label2" },
    { id: 2, title: "Frontend Developer", date: "12 Nov 2023", name: "John Doe", label: "Label2" },
    { id: 2, title: "Frontend Developer", date: "12 Nov 2023", name: "John Doe", label: "Label2" },

   
  ];

  

  return (
    <div className="w-full flex flex-wrap justify-between mx-4 pt-10 gap-1 pr-6">
      {data.map((item, index) => (
        <div key={index} className="w-[24%] h-auto p-2 gap-4 bg-neutral-900 rounded-lg mb-4">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-[12px]">{item.title}</h1>
            <p className="text-[8px] text-zinc-500">{item.date}</p>
          </div>
          <div className="flex flex-row justify-start gap-2 items-center">
            <p className="text-[10px]">#{item.id}</p>
            <p className="text-[8px] text-zinc-500">{item.name}</p>
          </div>
          <div className="flex flex-row gap-2 pt-2">
            <button className="flex text-zinc-200 p-1 bg-sky-500 rounded-sm text-[6px]">Show more</button>
            <button className="flex text-zinc-200 p-1 bg-yellow-400 rounded-sm text-[6px]">Delete</button>
          </div>
          <div className="flex items-center">
            <input
              className="outline-none bg-transparent border-b border-solid border-zinc-50 w-5/3 placeholder-white text-[12px]"
              type="text"
              placeholder="Add Label"
            />
            <p className="text-[18px] text-zinc-400 pl-1">+</p>
          </div>
          <div className="flex flex-row gap-2 pt-2">
            <button className="flex text-zinc-300 p-1 bg-neutral-800 text-[6px]">Applied</button>
            <button className="flex text-zinc-300 p-1 bg-neutral-800 text-[6px]">Interview Sent</button>
            <button className="flex text-zinc-300 p-1 bg-neutral-800 text-[6px]">Interviewed</button>
            <button className="flex text-zinc-300 p-1 bg-neutral-800 text-[6px]">Offer Letter Sent</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobCards;
