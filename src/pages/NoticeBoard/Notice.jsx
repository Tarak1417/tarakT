import React from 'react';
import {Box, IconButton} from '@mui/material';
import view from '../ReceivedApp/viewicon.png';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';



const NoticePage = () => {
    
    const userData = [
        {id:1, title:'Updated Company Policy', desc:'some changes & add the terms & conditions.', to:'Employees', created:'12-24-2021'},
        {id:2, title:'Board Meeting Completed', desc:'some changes & add the terms & conditions.', to:'Employees', created:'12-24-2021'},
        {id:3, title:'Office Time Adjusted', desc:'some changes & add the terms & conditions.', to:'Employees', created:'12-24-2021'},
        {id:4, title:'Payment Amount Updated', desc:'some changes & add the terms & conditions.', to:'Employees', created:'12-24-2021'},
        {id:5, title:'Engineering Team Meeting', desc:'some changes & add the terms & conditions.', to:'Employees', created:'12-24-2021'},
        {id:6, title:'Client Meeting Completed', desc:'some changes & add the terms & conditions.', to:'Employees', created:'12-24-2021'},
        {id:7, title:'Tech Conference updated', desc:'some changes & add the terms & conditions.', to:'Employees', created:'12-24-2021'},
        {id:8, title:'Seminar Location Updated', desc:'some changes & add the terms & conditions.', to:'Employees', created:'12-24-2021'},
        {id:9, title:'Update Agreement Policy', desc:'some changes & add the terms & conditions.', to:'Employees', created:'12-24-2021'},
        {id:10, title:'New Recruit Brief', desc:'some changes & add the terms & conditions.', to:'Employees', created:'12-24-2021'},

        
        
    ];
       

    
   
    
    return (
        <Box sx={{backgroundColor: 'background.main',}}>
        <div className='flex flex-col'>
                <div className="flex items-center justify-between md:w-full p-4">
                        <div className="p-2">
                            <h1 className="text-2xl text-neutral-500">Notice Board</h1>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-4">
                        <button className='flex items-center text-white font-bold text-xs md:text-base py-1 md:py-1 px-2 md:px-3 rounded bg-sky-500 hover:bg-sky-700'>
                            Add New Notice
                        </button>
                            <InfoOutlinedIcon />
                        </div>
                    </div>
               
            <Box className="w-full ml-2 md:ml-0 pt-4 rounded-lg mb-4" sx={{ backgroundColor: 'background.view', }}>
                    <div className='flex flex justify-between items-center w-full pt-3'>
                            <p className=" mb-4 border-l-4 border-blue-500 pl-4  text-xl" gutterBottom>
                                Notice Summary
                            </p> 
                            <p className='text-sm md:text-[12px] text-zinc-400 pr-2 md:pr-5'>Rows per page: 10 <FontAwesomeIcon icon={faCaretDown} className='text-zinc-500 text-lg md:text-[12px] text-center ml-2'/></p>
                     </div> 
                <div className='w-[97%] ml-2 md:ml-4 border border-zinc-500 rounded-sm '>
                    <div className='flex flex-row border-b border-zinc-500'>
                        <div className='w-[25%] md:w-[8%] p-3 border-r border-zinc-500 text-left text-sm md:text-xs font-bold'>
                            No
                        </div>
                        <div className='w-[50%] md:w-[18%] p-3 border-r border-zinc-500 text-sm md:text-xs font-bold'>
                            Title
                        </div>
                        <div className='w-[25%] md:w-[34%] p-3 border-r border-zinc-500 text-sm md:text-xs font-bold'>
                            Description
                        </div>
                        <div className='w-[25%] md:w-[10%] p-3 border-r border-zinc-500 text-left text-sm md:text-xs font-bold'>
                           To
                        </div>
                        <div className='w-[50%] md:w-[10%] p-3 border-r border-zinc-500 text-sm md:text-xs font-bold'>
                           Created On
                        </div>
                        <div className='w-[25%] md:w-[10%] p-3 border-r border-zinc-500 text-sm md:text-xs font-bold'>
                            Status
                        </div>
                        <div className='w-[25%] md:w-[10%] p-3  text-left text-sm md:text-xs font-bold'>
                            Action
                        </div>                        
                    </div>
                    {userData.map((user) => (
                        <div key={user.id} className='flex flex-row border-b border-zinc-500'>
                        <div className='w-[25%] md:w-[8%] p-3 border-r border-zinc-500 text-left text-sm md:text-[10px]'>
                            {user.id}
                        </div>
                        <div className='w-[25%] md:w-[18%] p-3 border-r border-zinc-500 text-sm md:text-[10px]'>
                            {user.title}
                        </div>
                        <div className='w-[25%] md:w-[34%] p-3 border-r border-zinc-500 text-sm md:text-[10px]'>
                            {user.desc}
                        </div>
                        <div className='w-[25%] md:w-[10%] p-3 border-r border-zinc-500 text-left text-sm md:text-[10px]'>
                             {user.to}
                        </div>
                        <div className='w-[50%] md:w-[10%] p-3 border-r border-zinc-500 text-sm md:text-[10px]'>
                             {user.created}
                        </div>
                        <div className='w-[50%] md:w-[10%] p-3 border-r border-zinc-500 text-sm md:text-[10px] flex justify-center items-center'>
                                <button className='flex  items-center text-white text-[8px] md:text-[10px] py-1 md:py-0 px-2 md:px-4 rounded bg-sky-500 hover:bg-sky-900'>
                                    Active
                                </button>
                        </div>
                                                
                            <div className='w-[25%] md:w-[10%] flex flex-row gap-2 justify-center items-center'>
                                <IconButton><img src={view} alt="view" className="w-4 h-4"/></IconButton>
                                <IconButton><DeleteOutlineOutlinedIcon style={{ fontSize: '14px' }} className='text-blue-500 rounded-sm'/></IconButton>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='w-[95%] ml-2  md:ml-5 mt-5 flex justify-between items-center pb-2 mb-20 md:mb-0'>
                    <p className='text-sm md:text-[12px] text-zinc-400  '>Showing Rows: 1-8 of 10</p>
                    <div className='flex flex-row gap-4'>
                    <KeyboardArrowLeftOutlinedIcon className='text-zinc-400'/>
                    <p className='text-zinc-400'>1</p>
                    <p className='text-zinc-400 bg-blue-500 w-[20px] h-[20px] flex items-center justify-center p-1 rounded-full'>2</p>
                </div>
                </div>
            </Box>
        </div>
        </Box>
    );
};

export default NoticePage;
