import React, { useState } from 'react';
import { Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SwipeDownAltIcon from '@mui/icons-material/SwipeDownAlt';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const RecentJobs = () => {
    const [dropdown1Open, setDropdown1Open] = useState(false);
    const [dropdown2Open, setDropdown2Open] = useState(false);
    const [ setSelectedYear] = useState('2024');

    const toggleDropdown1 = () => {
        setDropdown1Open(!dropdown1Open);
    };

    const toggleDropdown2 = () => {
        setDropdown2Open(!dropdown2Open);
    };

    const handleYearSelect = (year) => {
        setSelectedYear(year);
        setDropdown1Open(false);
        setDropdown2Open(false);
    };
    

    const items = [
        { id: 1, name: 'John Doe', role: 'Developer', years: '2 years', country: 'USA' },
        { id: 2, name: 'Jane Smith', role: 'Designer', years: '3 years', country: 'Canada' },
        { id: 1, name: 'John Doe', role: 'Developer', years: '2 years', country: 'USA' },
        { id: 2, name: 'Jane Smith', role: 'Designer', years: '3 years', country: 'Canada' },
    
    ];

    return (
        <div className='bg-neutral-900 rounded-lg mb-4 shadow-md p-4'>
            <div className="flex flex-col md:flex-row gap-4 mb-4 items-center">
                <div className='w-1/2'>
                    <Typography className="w-full md:w-1/3 border-l-4 border-blue-500 pl-2 whitespace-nowrap text-xl">
                        Recent Job Applications
                    </Typography>
                </div>
                <div className="border border-gray-600 rounded-lg p-1 w-1/5">
                    <Typography className="text-sm">Monthly <KeyboardArrowDownIcon className="cursor-pointer text-9333ea" onClick={toggleDropdown1} /></Typography>
                    {dropdown1Open && (
                        <div className="absolute top-10 right-0 mt-1 w-20 md:w-40 bg-neutral-900 rounded-lg border border-gray-600 z-10">
                            <div className="p-2 flex flex-col gap-2 justify-center items-center">
                                <Typography variant="h7" className="cursor-pointer" onClick={() => handleYearSelect('2024')}>
                                    Option 1
                                </Typography>
                                <Typography variant="h7" className="cursor-pointer" onClick={() => handleYearSelect('2023')}>
                                    Option 2
                                </Typography>
                                <Typography variant="h7" className="cursor-pointer" onClick={() => handleYearSelect('2023')}>
                                    Option 3
                                </Typography>
                            </div>
                        </div>
                    )}
                </div>
                <div className="border border-gray-600 rounded-lg p-1 w-1/5">
                    <Typography className="text-sm">All Jobs <KeyboardArrowDownIcon className="cursor-pointer text-9333ea" onClick={toggleDropdown2} /></Typography>
                    {dropdown2Open && (
                        <div className="absolute top-10 right-0 mt-1 w-20 md:w-40 bg-neutral-900 rounded-lg border border-gray-600 z-10">
                            <div className="p-2 flex flex-col gap-2 justify-center items-center">
                                <Typography variant="h7" className="cursor-pointer" onClick={() => handleYearSelect('2024')}>
                                    Option A
                                </Typography>
                                <Typography variant="h7" className="cursor-pointer" onClick={() => handleYearSelect('2023')}>
                                    Option B
                                </Typography>
                                <Typography variant="h7" className="cursor-pointer" onClick={() => handleYearSelect('2023')}>
                                    Option C
                                </Typography>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="w-full flex flex-col">
                {items.map(item => (
                    <div key={item.id} className="flex flex-row mb-4">
                    <div className=" w-1/6  mb-1 flex items-center justify-center">
                            <div>
                              <AccountCircleIcon fontSize='large'/>
                            </div>
                        </div>
                        <div className="w-1/3  mb-1 p-2">
                            <div>
                                <h1 className='text-lg text-zinc-300'>{item.name}</h1>
                                <p1 className='text-sm text-zinc-500'>{item.role}</p1>
                            </div>
                        </div>
                        <div className=" w-1/5  mb-1 flex items-center justify-center">
                            <div>
                                <Typography variant="body1">{item.years}</Typography>
                            </div>
                        </div>
                        <div className=" w-1/5  mb-1 flex items-center justify-center">
                            <div>
                                <Typography variant="body1"><SwipeDownAltIcon/> {item.country}</Typography>
                            </div>
                        </div>
                        <div className=" w-1/4 mb-1 flex items-center justify-center">
                            <div className='flex flex-row gap-2'>
                           <CallIcon className='text-green-700'/>
                           <EmailIcon className='text-green-700'/>
                           <DeleteIcon className='text-red-700 '/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentJobs;
