import React from 'react';
import { Box, Grid, IconButton } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import view from '../../../ReceivedApp/viewicon.png';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';



const data = [
    {id:1, type:'Casual Leaves', number:20 },
    {id:1, type:'Sick Leaves', number:20 },
    {id:1, type:'Maternity Leaves', number:30 },
    {id:1, type:'Annual Leaves', number:10 },
    {id:1, type:'Paternity Leaves', number:10 },
    {id:1, type:'Unpaid Leaves', number: '00' },
    {id:1, type:'Other Leaves', number:15 },
];

const LeaveSettingPage = () => {



   

    
   
    
    return (
        <Box sx={{backgroundColor: 'background.main',}}>
        <div className='flex flex-col md:mb-1'>
                <div className="flex items-center justify-between md:w-full p-4">
                        <div className="p-2">
                            <h1 className="text-xs md:text-2xl text-neutral-500">Leave Settings</h1>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-4">
                            <button className='flex  items-center text-white font-bold text-[8px] md:text-[12px] py-1 md:py-1 px-2 md:px-3 rounded bg-sky-500 hover:bg-sky-700'>
                                Add Leave Type
                            </button>
                            <InfoOutlinedIcon />
                        </div>
                    </div>
            </div>
            <Box className="w-full ml-2 md:ml-0 pt-4 rounded-lg mb-4 pb-5" sx={{ backgroundColor: 'background.view', }}>
                        <p className=" mb-4 border-l-4 border-blue-500 pl-4 text-xl" gutterBottom>
                            Leaves Types
                        </p>  
                        <Box
                        className='w-[97%] ml-2 md:ml-4 border border-zinc-500 rounded-sm mt-10'
                        sx={{
                            overflowY: 'scroll',
                            '&::-webkit-scrollbar': {
                                display: 'none'
                            },
                            '-ms-overflow-style': 'none',
                            'scrollbar-width': 'none'
                        }}
                    >
                    <Grid
                        className='flex flex-row border-b border-zinc-500'
                        
                    >
                        <div className='w-1/3 md:w-[33%] p-4 flex items-center border-r border-zinc-500 text-left text-sm md:text-[16px] font-bold'>
                           Leaves Type
                        </div>
                        <div className='w-1/3 md:w-[33%] p-4 flex items-center border-r border-zinc-500 text-sm md:text-[16px] font-bold'>
                            Number of Leaves
                        </div>
                        <div className='w-1/3 md:w-[33%] flex items-center p-4  text-sm md:text-[16px] font-bold'>
                            Actions
                        </div>
                        
                    </Grid>
                    {data.map((item) => (
                    <Grid
                    key={item.id}
                        className='flex flex-row border-b border-zinc-500'
                        
                    >
                     <div className='w-1/3 md:w-[33%] p-4 flex items-center border-r border-zinc-500 text-left text-sm md:text-[12px]'>
                           {item.type}
                        </div>
                        <div className='w-1/3 md:w-[33%] p-4 flex items-center border-r border-zinc-500 text-sm md:text-[12px]'>
                           {item.number}
                        </div>
                        <div className='w-1/3 md:w-[33%] flex items-center flex flex-row gap-3 p-4  text-sm md:text-[12px]'>
                        <IconButton><img src={view} alt="view" className="w-4 h-4"/></IconButton>
                        <IconButton><DeleteOutlineOutlinedIcon fontSize='medium' className='text-blue-500'/></IconButton>
                        </div>

                    </Grid>
                    ))}
                </Box>

                
            </Box>
    </Box>
    );
};

export default LeaveSettingPage;
