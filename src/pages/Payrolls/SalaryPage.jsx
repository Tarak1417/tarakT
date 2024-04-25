import React from 'react';
import {Box, IconButton} from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PersonIcon from '@mui/icons-material/Person';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import view from '../ReceivedApp/viewicon.png';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const SalaryPage = () => {
    
    const userData = [
        {id:'1003', name:'Derek Wonder', year:'January-2021', des:'General Manager', salary:'32,000', date:'01-11-2023', profile:'Paid'},
        {id:'1749', name:'Tony Cooke', year:'March-2020', des:'Tester', salary:'19,035', date:'11-12-2020', profile:'Paid'},
        {id:'1946', name:'Aisha Malik', year:'February-2022', des:'Frontend Development', salary:'29,000', date:'02-05-2022', profile:'Unpaid'},
        {id:'1444', name:'Darnell Rowland', year:'August-2021', des:'Digital Marketer', salary:'12,000', date:'06-02-2021', profile:'Paid'},
        {id:'1900', name:'Emma Stone', year:'March-2020', des:'HR Manager', salary:'20,290', date:'19-04-2020', profile:'Unpaid'},
        {id:'1283', name:'raymond Emodi', year:'January-2019', des:'UX Designer', salary:'32,320', date:'14-08-2019', profile:'Unpaid'},
        {id:'1288', name:'Emily Styles', year:'March-2021', des:'PHP Developer', salary:'20,500', date:'07-04-2020', profile:'Paid'},
    ];
    const getColor = (profile) => {
        switch (profile) {
            case 'Paid':
                return { bgColor: 'bg-green-950', textColor: 'text-green-500' };
            case 'Unpaid':
                return { bgColor: 'bg-red-950', textColor: 'text-red-500' };
            
            default:
                return { bgColor: 'bg-gray-900', textColor: 'text-gray-500' };
        }
    };
    

    
   
    
    return (
        <Box sx={{backgroundColor: 'background.main',}}>
        <div className='flex flex-col'>
                <div className="flex items-center justify-between md:w-full p-4">
                        <div className="p-2">
                            <h1 className="text-2xl text-neutral-500">Employee Salary</h1>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-4">
                        <button className='flex items-center text-amber-500  text-xs md:text-sm py-1 md:py-1 px-2 md:px-3 rounded border border-amber-500 hover:bg-orange-700'>
                            Download Monthly Report
                        </button>
                        <button className='flex items-center text-white text-xs md:text-sm py-1 md:py-1 px-2 md:px-3 rounded bg-sky-500 hover:bg-sky-700'>
                            Add New Payroll
                        </button>
                            <InfoOutlinedIcon />
                        </div>
                    </div>
               
            <Box className="w-full ml-2 md:ml-0 pt-4 rounded-lg mb-4" sx={{ backgroundColor: 'background.view', }}>
            <Box className="flex flex-col md:flex-row justify-center gap-4 w-[97%] ml-2 md:ml-4 mb-5 ">
                <div className='flex flex-row w-full items-center'>
                <div className='w-1/2'>
                <p className='text-sm md:text-[12px] pr-2 md:pr-5'>Rows per page: 7 <FontAwesomeIcon icon={faCaretDown} className='text-zinc-500 text-lg md:text-[12px] text-center ml-2'/></p>
                    
                </div>
                <div className='w-1/2 flex flex-row  justify-center gap-5'>
                   <div className='w-full md:w-[38%] border border-gray-500 rounded-lg flex flex-row items-center'>
                     <select className="appearance-none bg-transparent w-[90%] text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none text-[12px] focus:border-gray-500">
                            <option>Employee Name</option>
                            <option>name1</option>
                            <option>name2</option>
                            <option>name3</option>
                        </select>
                        <ArrowDropDownIcon style={{fontSize:'28px'}} className="text-zinc-500"/>
                   </div>
                   </div>
                   </div>
                </Box>
                <div className='w-[97%] ml-2 md:ml-4 border border-zinc-500 rounded-sm '>
                    <div className='flex flex-row border-b border-zinc-500'>
                        <div className='w-[25%] md:w-[8%] p-3 border-r border-zinc-500 text-left text-sm md:text-sm  flex items-center font-bold'>
                            Emp ID
                        </div>
                        <div className='w-[50%] md:w-[15%] p-3 border-r border-zinc-500 text-sm md:text-xsm  flex items-center font-bold'>
                            Emp Name
                        </div>
                        <div className='w-[25%] md:w-[11%] p-3 border-r border-zinc-500 text-sm md:text-sm  flex items-center font-bold'>
                            Month-Year
                        </div>
                        <div className='w-[25%] md:w-[13%] p-3 border-r border-zinc-500 text-left text-sm md:text-sm  flex items-center font-bold'>
                           Designation
                        </div>
                        <div className='w-[50%] md:w-[10%] p-3 border-r border-zinc-500 text-sm md:text-sm  flex items-center font-bold'>
                           ($) Salary
                        </div>
                        <div className='w-[25%] md:w-[10%] p-3 border-r border-zinc-500 text-sm md:text-sm flex items-center font-bold'>
                            Generated Date
                        </div>
                        <div className='w-[25%] md:w-[10%] p-3 border-r border-zinc-500 text-left text-sm md:text-sm flex items-center font-bold'>
                            Status
                        </div>
                        <div className='w-[25%] md:w-[24%] p-3  text-left text-sm md:text-sm flex items-center font-bold'>
                            Action
                        </div>
                        
                    </div>
                    {userData.map((user) => (
                        <div key={user.id} className='flex flex-row border-b border-zinc-500'>
                        <div className='w-[25%] md:w-[8%] p-3 border-r border-zinc-500 text-left text-sm md:text-[10px]'>
                            #{user.id}
                        </div>
                        <div className='w-[50%] md:w-[15%] p-1 border-r border-zinc-500 text-sm md:text-[10px] flex flex-row gap-2 flex items-center'>
                            <div className='flex justify-center items-center pl-2'>
                                <PersonIcon style={{ fontSize: '16px' }} className="text-zinc-300"/>
                            </div>
                            <div className=''>
                                {user.name}
                                
                            </div>
                        </div>
                        <div className='w-[25%] md:w-[11%] p-3 border-r border-zinc-500 text-sm md:text-[10px]'>
                            {user.year}
                        </div>
                        <div className='w-[25%] md:w-[13%] p-3 border-r border-zinc-500 text-left text-sm md:text-[10px]'>
                             {user.des}
                        </div>
                        <div className='w-[50%] md:w-[10%] p-3 border-r border-zinc-500 text-sm md:text-[10px]'>
                             ${user.salary}
                        </div>
                        <div className='w-[25%] md:w-[10%] p-3 border-r border-zinc-500 text-sm md:text-[10px]'>
                             {user.date}
                        </div>
                        
                        <div className='w-[25%] md:w-[10%] p-3 border-r border-zinc-500'>
                        <div
                                    className={`px-0 py-0 rounded-lg text-sm md:text-[8px] flex justify-center items-center ${
                                        getColor(user.profile).bgColor
                                    } ${getColor(user.profile).textColor}`}
                                >
                                    {user.profile}
                                </div>
                        </div>
                        
                            <div className='w-[25%] md:w-[24%] flex flex-row gap-1 justify-center items-center'>
                                <IconButton><img src={view} alt="view" className="w-4 h-4"/></IconButton>
                                <IconButton><EditOutlinedIcon style={{ fontSize: '12px' }}  className=' rounded-sm'/></IconButton>
                                <IconButton><SaveAltOutlinedIcon style={{ fontSize: '14px' }}  className=' rounded-sm text-blue-500'/></IconButton>
                                <IconButton><ShareOutlinedIcon style={{ fontSize: '14px' }}  className=' rounded-sm text-amber-500'/></IconButton>
                                <IconButton><PrintOutlinedIcon style={{ fontSize: '14px' }}  className=' rounded-sm text-green-500'/></IconButton>
                                <IconButton><CloseOutlinedIcon style={{ fontSize: '14px' }}  className=' rounded-sm text-red-500'/></IconButton>
                             </div>
                        </div>
                    ))}
                </div>
                <div className='w-[95%] ml-2  md:ml-5 mt-5 flex justify-between items-center pb-2 mb-20 md:mb-0'>
                    <p className='text-sm md:text-[12px]  '>Showing Rows: 1-7 of 20</p>
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

export default SalaryPage;
