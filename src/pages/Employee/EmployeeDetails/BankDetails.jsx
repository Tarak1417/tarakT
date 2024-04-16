import { Box } from '@mui/material';
import React from 'react';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';

const BankDetails = () => {
    return(
        <Box className="w-full ml-2 md:ml-0 pt-4 rounded-lg mb-4" sx={{ backgroundColor: 'background.view', }}>
            <div className='w-[99%]  p-2 flex flex-col gap-6'>
                    <div className='flex flex-col md:flex-row w-full gap-8'>
                        <div className='flex flex-row w-full md:w-full  gap-4 '>
                            <div className='w-1/6 flex items-center'>
                                <p className='text-[16px]'>Account Holder</p>
                            </div>
                            <div className='w-full border border-gray-300 rounded-lg flex items-center'>
                                <input type="text" className="w-full rounded-lg bg-transparent focus:outline-none p-2" placeholder='Name'/>
                            </div>
                        </div> 
                    </div>
                    <div className='flex flex-col md:flex-row w-full gap-8'>
                        <div className='flex flex-row w-full md:w-full  gap-4 '>
                            <div className='w-1/6 flex items-center'>
                                <p className='text-[16px]'>Account Number</p>
                            </div>
                            <div className='w-full border border-gray-300 rounded-lg flex items-center'>
                                <input type="text" className="w-full rounded-lg bg-transparent focus:outline-none p-2" placeholder='Number'/>
                            </div>
                        </div> 
                    </div>
                    <div className='flex flex-col md:flex-row w-full gap-8'>
                        <div className='flex flex-row w-full md:w-full  gap-4 '>
                            <div className='w-1/6 flex items-center'>
                                <p className='text-[16px]'>Bank Name</p>
                            </div>
                            <div className='w-full border border-gray-300 rounded-lg flex items-center'>
                                <input type="text" className="w-full rounded-lg bg-transparent focus:outline-none p-2" placeholder='Name'/>
                            </div>
                        </div> 
                    </div>
                    
                    <div className='flex flex-col md:flex-row w-full gap-8'>
                        <div className='flex flex-row w-full md:w-full  gap-4 '>
                            <div className='w-1/6 flex items-center'>
                                <p className='text-[16px]'>Branch Location</p>
                            </div>
                            <div className='w-full border border-gray-300 rounded-lg flex items-center'>
                                <input type="text" className="w-full rounded-lg bg-transparent focus:outline-none p-2" placeholder='Location'/>
                            </div>
                        </div> 
                    </div>
                    <div className='flex flex-col md:flex-row w-full gap-8'>
                        <div className='flex flex-row w-full md:w-full  gap-4 '>
                            <div className='w-1/6 flex items-center'>
                                <p className='text-[16px]'>Bank Code(IFSC)  <HelpOutlinedIcon style={{fontSize:"16px"}}/></p>
                            </div>
                            <div className='w-full border border-gray-300 rounded-lg flex items-center'>
                                <input type="text" className="w-full rounded-lg bg-transparent focus:outline-none p-2" placeholder='Code'/>
                            </div>
                        </div> 
                    </div>
                    <div className='flex flex-col md:flex-row w-full gap-8'>
                        <div className='flex flex-row w-full md:w-full  gap-4 '>
                            <div className='w-1/6 flex items-center'>
                                <p className='text-[16px]'>Tax Payer ID (PAN) <HelpOutlinedIcon style={{fontSize:"16px"}}/></p>
                            </div>
                            <div className='w-full border border-gray-300 rounded-lg flex items-center'>
                                <input type="text" className="w-full rounded-lg bg-transparent focus:outline-none p-2" placeholder='ID No'/>
                            </div>
                        </div> 
                    </div>
                    <div className="flex justify-end gap-5  md:mr-10 mr-4 mb-5 items-end">
                        <button className="flex items-center text-white  text-[10px] md:text-[12px] h-[30px] py-1 md:py-1 px-2 md:px-6 rounded bg-sky-500 hover:bg-sky-700">Save</button>
                        <button className="flex items-center text-red-500  text-[10px] md:text-[12px]  h-[30px] py-1 md:py-1 px-2 md:px-6  border border-red-500 rounded bg-transparent hover:bg-red-700">Cancel</button>
                    </div>
            </div>
        </Box>
    );

};
export default BankDetails;