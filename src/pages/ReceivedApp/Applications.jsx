import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import Overview from './Overview';
import OverviewCards from './JobCards';


const Applications = () => {
    return (
        <div className="bg-black rounded-lg overscroll-auto overflow-hidden">
            <div className='flex items-center justify-between md:w-full p-2'>
                <div className='p-2'>
                    <h1 className='text-3xl text-neutral-400'>Received Applications</h1>
                </div>
                <div className='flex flex-row items-center justify-center gap-4'>
                    <InfoOutlinedIcon/>
                </div>
            </div>
            <div className='md:w-[98%] p-4 flex flex-col gap-4 bg-neutral-900 rounded-lg mx-4'>
                <h1 className='text-xl text-zinc-400'>Job Application Overview</h1>
                <Overview/>
            </div>
            <div className='flex items-center justify-between md:w-[92%] mx-4 md:pt-10'>
                <div className=" p-2 rounded-lg bg-neutral-900">
                    <div className="flex items-center bg-neutral-900 gap-6">
                        <input
                        className="outline-none bg-transparent pl-5"
                        type="text"
                        placeholder="search by job title"
                        />
                        <SearchOutlinedIcon className="outline-none text-zinc-300 " />
                    </div>
                </div>
                <div className='flex flex-row gap-4'>
                    <KeyboardArrowLeftOutlinedIcon className='text-zinc-300'/>
                    <p className='text-zinc-300'>1</p>
                    <p className='text-zinc-300 bg-blue-500 w-[20px] h-[20px] flex items-center justify-center p-1 rounded-full'>2</p>
                </div>
            </div>
            <OverviewCards/>
        </div>
    );
};

export default Applications;
