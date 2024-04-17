import React from 'react';
import { Box } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const AttendPage = () => {
    
    
   
    
    return (
        <Box sx={{backgroundColor: 'background.main',}}>
        <div className='flex flex-col'>
                <div className="flex items-center justify-between md:w-full p-4">
                        <div className="p-2">
                            <h1 className="text-2xl text-neutral-500">Attendance By User</h1>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-4">
                            <button className='flex  items-center text-white font-bold text-[10px] md:text-[12px] py-1 md:py-1 px-2 md:px-3 rounded bg-sky-500 hover:bg-sky-700'>
                                Mark Attendance
                            </button>
                            <InfoOutlinedIcon />
                        </div>
                    </div>
            </div>
            <Box className="w-full ml-2 md:ml-0 pt-4 rounded-lg mb-4" sx={{ backgroundColor: 'background.view', }}>
                <div className='flex flex-col md:flex-row items-center justify-center gap-8 md:w-full'>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='p-2 rounded-lg bg-sky-900 text-[12px] text-blue-500'>31</p>
                        <p className='text-[16px] text-gray-300'>Total Working Days</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='p-2 rounded-lg bg-neutral-700 text-[12px] text-blue-500'>20</p>
                        <p className='text-[16px] text-gray-300'>Present Days</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='p-2 rounded-lg bg-neutral-700 text-[12px] text-blue-500'>3</p>
                        <p className='text-[16px] text-gray-300'>Absent Days</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='p-4 rounded-lg bg-neutral-700 text-[12px] text-blue-500'>0</p>
                        <p className='text-[16px] text-gray-300'>Half Days</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='p-4 rounded-lg bg-neutral-700 text-[12px] text-blue-500'>5</p>
                        <p className='text-[16px] text-gray-300'>Late Days</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='p-4 rounded-lg bg-neutral-700 text-[12px] text-blue-500'>6</p>
                        <p className='text-[16px] text-gray-300'>Holidays</p>
                    </div>
                </div>
            </Box>
                
        </Box>
    );
};

export default AttendPage;
