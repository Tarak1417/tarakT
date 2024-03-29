import { Button } from '@mui/material';
import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import JobCards from './JobCards';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';


const JobListing = () => {
    return (
        <div className="bg-black rounded-lg">
        <div className='flex items-center justify-between md:w-full p-4 '>
            <div className='p-2'>
                <h1 className='text-3xl text-zinc-200'>Job Listing</h1>
            </div>
            <div className='flex flex-row items-center justify-center gap-4'>
                <Button variant='contained'>Add Job</Button>
                <InfoOutlinedIcon/>
            </div>
        </div>
        <div className='flex items-center justify-between md:w-[92%] mx-4 md:pt-10'>
        <div className="border-2 border-zinc-500 p-2 rounded-lg ">
            <div className="flex items-center">
                <input
                className="outline-none bg-transparent"
                type="text"
                placeholder="search your listing here"
                />
                <SearchOutlinedIcon className="outline-none text-zinc-300" />
            </div>
            </div>
            <div className='flex flex-row gap-4'>
            <KeyboardArrowLeftOutlinedIcon className='text-zinc-300'/>
            <p className='text-zinc-300'>1</p>
            <p className='text-zinc-300 bg-blue-500 w-[20px] h-[20px] flex items-center justify-center p-1 rounded-full'>2</p>
            </div>
        </div>
        <JobCards/>
            
            
        </div>
    );
};

export default JobListing;
