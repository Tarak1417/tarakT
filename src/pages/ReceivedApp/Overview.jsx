import React from "react";

const Overview = () => {
    return (
        <div className="md:w-full flex flex-row gap-2">
            <div className="w-[12%] h-[40px] flex flex-row items-center justify-between bg-black rounded-lg p-2 gap-10 overflow-hidden">
                <div className="flex-shrink-0">
                    <h1 className="text-[10px]">300</h1>
                    <p className='text-[8px]'>Applied</p>
                </div>
                <div className="flex-shrink-0">
                <p className="p-2 bg-green-500 rounded-sm text-xs w-[4px] h-[4px] flex items-center justify-center text-center">#</p>
                </div>
            </div>

            <div className="w-[12%] h-[40px] flex flex-row items-center justify-between bg-black rounded-lg p-2 gap-0 overflow-hidden">
                <div className="flex-shrink-0">
                    <h1 className="text-[10px]">120</h1>
                    <p className='text-[8px]'>Interview Sent</p>
                </div>
                <div className="flex-shrink-0">
                <p className="p-2 bg-green-500 rounded-sm text-xs w-[4px] h-[4px] flex items-center justify-center text-center">#</p>
                </div>
            </div>

            <div className="w-[12%] h-[40px] flex flex-row items-center justify-between bg-black rounded-lg p-2 gap-0 overflow-hidden">
                <div className="flex-shrink-0">
                    <h1 className="text-[10px]">80</h1>
                    <p className='text-[8px]'>Interviewed</p>
                </div>
                <div className="flex-shrink-0">
                <p className="p-2 bg-green-500 rounded-sm text-xs w-[4px] h-[4px] flex items-center justify-center text-center">#</p>
                </div>
            </div>

            <div className="w-[12%] h-[40px] flex flex-row items-center justify-between bg-black rounded-lg p-2 gap-0 overflow-hidden">
                <div className="flex-shrink-0">
                    <h1 className="text-[10px]">50</h1>
                    <p className='text-[8px]'>Offer Letter Sent</p>
                </div>
                <div className="flex-shrink-0">
                <p className="p-2 bg-green-500 rounded-sm text-xs w-[4px] h-[4px] flex items-center justify-center text-center">#</p>
                </div>
            </div>

            <div className="w-[12%] h-[40px] flex flex-row items-center justify-between bg-black rounded-lg p-2 gap-0 overflow-hidden">
                <div className="flex-shrink-0">
                    <h1 className="text-[10px]">45</h1>
                    <p className='text-[8px]'>Offer Letter Signed</p>
                </div>
                <div className="flex-shrink-0">
                <p className="p-2 bg-green-500 rounded-sm text-xs w-[4px] h-[4px] flex items-center justify-center text-center">#</p>
                </div>
            </div>

            <div className="w-[12%] h-[40px] flex flex-row items-center justify-between bg-black rounded-lg p-2 gap-0 overflow-hidden">
                <div className="flex-shrink-0">
                    <h1 className="text-[10px]">40</h1>
                    <p className='text-[8px]'>Agreements Sent</p>
                </div>
                <div className="flex-shrink-0">
                <p className="p-2 bg-green-500 rounded-sm text-xs w-[4px] h-[4px] flex items-center justify-center text-center">#</p>
                </div>
            </div>

            <div className="w-[12%] h-[40px] flex flex-row items-center justify-between bg-black rounded-lg p-2 gap-0 overflow-hidden">
                <div className="flex-shrink-0">
                    <h1 className="text-[10px]">40</h1>
                    <p className='text-[8px]'>Agreements Signed</p>
                </div>
                <div className="flex-shrink-0">
                <p className="p-2 bg-green-500 rounded-sm text-xs w-[4px] h-[4px] flex items-center justify-center text-center">#</p>
                </div>
            </div>

            <div className="w-[12%] h-[40px] flex flex-row items-center justify-between bg-black rounded-lg p-2 gap-0 overflow-hidden">
                <div className="flex-shrink-0">
                    <h1 className="text-[10px]">20</h1>
                    <p className='text-[8px]'>Employed</p>
                </div>
                <div className="flex-shrink-0">
                    <p className="p-2 bg-green-500 rounded-sm text-xs w-[4px] h-[4px] flex items-center justify-center text-center">#</p>
                </div>
            </div>

            <div className="w-[12%] h-[40px] flex flex-row items-center justify-between bg-black rounded-lg p-2 gap-0 overflow-hidden">
                <div className="flex-shrink-0">
                    <h1 className="text-[10px]">6</h1>
                    <p className='text-[8px]'>Terminated</p>
                </div>
                <div className="flex-shrink-0">
                <p className="p-2 bg-green-500 rounded-sm text-xs w-[4px] h-[4px] flex items-center justify-center text-center">#</p>
                </div>
            </div>
        </div>
    );
};

export default Overview;
