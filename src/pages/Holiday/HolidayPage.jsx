import React from 'react';
import {Box, IconButton} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

const HolidayPage = () => {
    const userData = [
        {no:1, day:'Tuesday', date:'25-12-2024', holiday:'Christmas'},
        {no:2, day:'Tuesday', date:'25-12-2024', holiday:'Christmas'},
        {no:3, day:'Tuesday', date:'25-12-2024', holiday:'Christmas'},
        
        
    ];
    
    return (
        <Box sx={{backgroundColor: 'background.main',}}>
        <div className='flex flex-col justify-start'>
                <div className="flex items-center justify-between md:w-full p-4">
                        <div className="p-2">
                            <h1 className="text-2xl text-neutral-500">Holidays</h1>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-4">
                            <button className='flex items-center text-white font-bold text-xs md:text-base py-1 md:py-1 px-2 md:px-3 rounded bg-sky-500 hover:bg-sky-700'>
                                Add Holiday
                            </button>
                            <InfoOutlinedIcon />
                        </div>
                    </div>
                <Box className="w-full md:ml-0 pt-4 md:mt-5 rounded-lg mb-4 p-4" sx={{ backgroundColor: 'background.view', }}>
                <Box className="flex flex-col md:flex-row justify-center gap-4 w-[97%] ml-2 md:ml-4 ">
                   <div className='w-full md:w-[38%] border border-gray-500 rounded-lg flex flex-row items-center'>
                     <select className="appearance-none bg-transparent w-[90%] text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none text-[12px] focus:border-gray-500">
                            <option>DD-MM-YYY</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                        <CalendarTodayOutlinedIcon style={{fontSize:'24px'}} className="text-zinc-500 pr-2"/>
                   </div>
                   <div className='w-full md:w-[38%] border border-gray-500 rounded-lg flex flex-row items-center'>
                     <select className="appearance-none bg-transparent w-[90%] text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none text-[12px] focus:border-gray-500">
                            <option>Select Month</option>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                        </select>
                        <ArrowDropDownIcon style={{fontSize:'28px'}} className="text-zinc-500"/>
                   </div>
                   <div className='w-full md:w-[24%] flex justify-end md:justify-end items-center '>
                        <button className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
                   </div>
                </Box>
                </Box>
            <Box className="w-full md:ml-0 md:mt-5 pt-4 rounded-lg" sx={{ backgroundColor: 'background.view', }}>
                <div className='flex items-center mb-5 md:w-full'>
                        <p className='text-[14px] md:text-[16px]  pl-2 md:pl-5'>Holidays Lists</p>
                </div>
                <div className='w-[97%] ml-2 md:ml-4  rounded-sm '>
                    <Box className='flex flex-row' sx={{ backgroundColor: 'background.main',}}>
                        <div className='w-[20%] md:w-[20%] p-3 text-[12px] md:text-xs font-bold md:text-center'>
                           No
                        </div>
                        <div className='w-[20%] md:w-[20%] p-3  text-left text-[12px] md:text-xs font-bold md:text-center'>
                            Day
                        </div>
                        <div className='w-[20%] md:w-[20%] p-3  text-[12px] md:text-xs font-bold md:text-center'>
                            Date
                        </div>
                        <div className='w-[20%] md:w-[20%] p-3 b text-[12px] md:text-xs font-bold md:text-center'>
                            Holidays
                        </div>
                        <div className='w-[20%] md:w-[20%] p-3 text-[12px] md:text-xs font-bold md:text-center'>
                           Action
                        </div>                        
                    </Box>
                    {userData.map((user) => (
                        <Box key={user.id} className='flex flex-row'>
                        <div className='w-[20%] md:w-[20%] p-3 text-[8px] md:text-[10px] md:text-center'>
                            {user.no}
                        </div>
                       <div className='w-[20%] md:w-[20%] p-3 text-[8px] md:text-[10px] md:text-center'>
                            {user.day}
                        </div>
                        <div className='w-[20%] md:w-[20%] p-3 text-[8px] md:text-[10px] md:text-center'>
                            {user.date}
                        </div>
                        <div className='w-[20%] md:w-[20%] p-3 text-[8px] md:text-[10px] md:text-center'>
                            {user.holiday}
                        </div>
                        <div className='w-[20%] md:w-[20%] p-3  text-[10px] md:text-[10px] flex justify-center items-center'>
                                <IconButton><EditOutlinedIcon style={{ fontSize: '12px' }}  className=' text-blue-500 rounded-sm'/></IconButton>
                                <IconButton><DeleteOutlineOutlinedIcon style={{ fontSize: '12px' }} className='text-red-500 rounded-sm'/></IconButton>
                        </div>
                        </Box>
                    ))}
                </div>
                <div className='w-[95%] ml-2  md:ml-5 mt-5 flex justify-end items-center pb-2 md:mb-0'>
                    <p className='text-[8px] md:text-[12px]  '>Rows per page <span className='md:pl-5 md:pr-5 pl-2 pr-2 text-[8px] md:text-[12px]'>10</span> 1-1 of 1</p>
                </div>
            </Box>
        </div>
        </Box>
    );
};

export default HolidayPage;
