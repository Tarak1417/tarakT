import { Box } from '@mui/material';
import React, {useState} from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import moment from 'moment';
import { Email } from '@mui/icons-material';

const PersonalDetails = ({employeeDetails}) => {
    const [currentPage, setCurrentPage] = useState(1);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return(
        <Box className="w-full ml-2 md:ml-0 rounded-lg mb-4" sx={{ backgroundColor: 'background.view', }}>
            {currentPage === 1 && (
            <div className='w-[99%] p-2 flex flex-col gap-4'>
                <h1 className='text-xl font-bold'>Basic</h1>
                <div className='flex flex-col md:flex-row w-full gap-8'>
                    <div className='flex flex-row w-full md:w-1/2  gap-2 '>
                        <div className='w-1/4 flex items-center'>
                            <p className='text-[16px]'>Full Name</p>
                        </div>
                        <div className='w-4/5 border border-gray-300 rounded-lg flex items-center'>
                            <input type="text" className="w-full rounded-lg bg-transparent focus:outline-none p-2" placeholder='first name' value={employeeDetails?.firstName}/>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2 w-full md:w-1/2 flex items-center '>
                        <div className='w-full border border-gray-300 rounded-lg'>
                            <input type="text" className="w-full rounded-lg bg-transparent focus:outline-none p-2" placeholder='last name' value={employeeDetails?.lastname}/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row w-full gap-8'>
                    <div className='flex flex-row w-full md:w-1/2  gap-2 '>
                        <div className='w-1/4 flex items-center'>
                            <p className='text-[16px]'>Username</p>
                        </div>
                        <div className='w-4/5 border border-gray-300 rounded-lg flex items-center'>
                            <input type="text" className="w-full rounded-lg bg-transparent focus:outline-none p-2" placeholder='enter username'/>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2 w-full md:w-1/2 '>
                        <div className='w-1/4 flex items-center'>
                           <p className='text-[16px['>Contact Number</p>
                        </div>
                        <div className='w-4/5 border border-gray-300 rounded-lg flex items-center'>
                            <input type="text" className="w-full rounded-lg bg-transparent focus:outline-none p-2" placeholder='enter contact number' value={employeeDetails?.phone?.phone}/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row w-full gap-8'>
                    <div className='flex flex-row w-full md:w-1/2  gap-2 '>
                        <div className='w-1/4 flex items-center'>
                            <p className='text-[16px]'>Emergency Contact No 1</p>
                        </div>
                        <div className='w-4/5 border border-gray-300 rounded-lg flex items-center'>
                            <input type="text" className="w-full rounded-lg bg-transparent focus:outline-none p-2" placeholder='enter emergency contact 1' value={employeeDetails?.phone?.phone}/>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2 w-full md:w-1/2 '>
                        <div className='w-1/4 flex items-center'>
                        <p className='text-[16px]'>Emergency Contact No 2</p>
                        </div>
                        <div className='w-4/5 border border-gray-300 rounded-lg flex items-center'>
                            <input type="text" className="w-full rounded-lg bg-transparent focus:outline-none p-2" placeholder='enter emergency contact 2' value={employeeDetails?.phone?.phone}/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row w-full gap-8'>
                    <div className='flex flex-row w-full md:w-1/2  gap-2 '>
                        <div className='w-1/4 flex items-center'>
                            <p className='text-[16px]'>Date of Birth</p>
                        </div>
                        <div className='w-4/5 border border-gray-300 rounded-lg flex items-center'>
                            <input type="text" className="w-full rounded-lg bg-transparent focus:outline-none p-2" placeholder='enter date of birth' value={moment(employeeDetails?.dob)
                                                    .utc()
                                                    .format('MM-DD-YYYY')}/>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2 w-full md:w-1/2 '>
                        <div className='w-1/4 flex items-center'>
                        <p className='text-[16px]'>Blood Group</p>
                        </div>
                        <div className='w-4/5 border border-gray-300 rounded-lg flex items-center'>
                            <input type="text" className="w-full rounded-lg bg-transparent focus:outline-none p-2" placeholder='enter blood group'/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row w-full gap-8'>
                    <div className='flex flex-row w-full md:w-full  gap-2 '>
                        <div className='w-[13%] flex items-center'>
                            <p className='text-[16px]'>Email</p>
                        </div>
                        <div className='w-full border border-gray-300 rounded-lg flex items-center'>
                            <input type="text" className="w-full rounded-lg bg-transparent focus:outline-none p-2" placeholder='enter email address' value={employeeDetails?.email}/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row w-full gap-8'>
                    <div className='flex flex-row w-full md:w-1/2  gap-2 '>
                        <div className='w-1/4 flex items-center'>
                            <p className='text-[16px]'>Present Address</p>
                        </div>
                        <div className='w-4/5 border border-gray-300 rounded-lg flex items-center'>
                            <input type="text" className="w-full rounded-lg bg-transparent focus:outline-none p-2" placeholder='enter present address'/>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2 w-full md:w-1/2 '>
                        <div className='w-1/4 flex items-center'>
                        <p className='text-[16px]'>Permanent Address</p>
                        </div>
                        <div className='w-4/5 border border-gray-300 rounded-lg flex items-center'>
                            <input type="text" className="w-full rounded-lg bg-transparent focus:outline-none p-2" placeholder='enter permanent address'/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row w-full gap-2'>
                    <div className='flex flex-row w-full md:w-2/5  gap-10 '>
                        <div className='w-1/3 flex items-center'>
                            <p className='text-[16px]'>Gender</p>
                        </div>
                        <div className="w-4/5  rounded-lg flex items-center flex flex-row gap-2">
                            <input type="radio" id="male" name="gender" className="hidden" defaultChecked />
                            <label htmlFor="male" className="flex items-center cursor-pointer mr-6">
                                <span className="w-4 h-4 border-4 border-blue-500 rounded-full mr-2"></span>
                                Male
                            </label>

                            <input type="radio" id="female" name="gender" className="hidden" />
                            <label htmlFor="female" className="flex items-center cursor-pointer">
                                <span className="w-4 h-4 border-4 border-gray-500 rounded-full mr-2"></span>
                                Female
                            </label>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2 w-full md:w-3/5 '>
                        <div className='w-1/4 flex items-center'>
                        <p className='text-[16px]'>Marital Status</p>
                        </div>
                        <div className='w-full border border-gray-300 rounded-lg flex items-center'>
                            <input type="text" className="w-full rounded-lg bg-transparent focus:outline-none p-2" placeholder='enter marital status'/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row  w-full gap-2'>
                    <div className='flex flex-row w-full md:w-[85%] gap-2 '>
                        <div className='w-1/6 flex items-center'>
                            <p className='text-[16px]'>Upload Photo</p>
                        </div>
                        <div className='w-full border border-gray-300 rounded-lg flex items-center'>
                            <input type="file" className="w-full rounded-lg bg-transparent focus:outline-none p-2"/>
                        </div>
                    </div>
                    <div className='flex flex-row w-full md:w-[14%] justify-end'>
                        <button className='flex items-center text-white font-bold text-[10px] md:text-[12px] py-1 md:py-1 px-2 md:px-10 rounded bg-sky-500 hover:bg-sky-700'>
                                Choose File
                            </button>
                    </div>
                </div>
            </div>
            )}
            {currentPage === 2 && (
            <div className='w-[99%]  p-2 flex flex-col gap-4'>
                <h1 className='text-xl font-bold'>Account Login</h1>
                <div className='flex flex-col md:flex-row w-full gap-8'>
                    <div className='flex flex-row w-full md:w-full  gap-4 '>
                        <div className='w-1/5 flex items-center'>
                            <p className='text-[16px]'>Employee Email</p>
                        </div>
                        <div className='w-full border border-gray-300 rounded-lg flex items-center'>
                            <input type="text" className="w-full rounded-lg bg-transparent focus:outline-none p-2"/>
                        </div>
                    </div> 
                </div>
                    <div className='flex flex-col md:flex-row w-full gap-8'>
                        <div className='flex flex-row w-full md:w-full  gap-4 '>
                            <div className='w-1/5 flex items-center'>
                                <p className='text-[16px]'>Password</p>
                            </div>
                            <div className='w-full border border-gray-300 rounded-lg flex items-center'>
                                <input type="text" className="w-full rounded-lg bg-transparent focus:outline-none p-2"/>
                            </div>
                        </div> 
                    </div>
                     <div className='flex flex-row gap-7 items-center'>
                        <p className='text-[18px]'>Enable Notifications</p><ToggleOffOutlinedIcon fontSize='large'/>
                     </div>
                     
                     <div className="flex justify-end gap-5  md:mr-10 mr-4 h-[300px] items-end">
                        <button className="flex items-center text-white  text-[10px] md:text-[12px] h-[30px] py-1 md:py-1 px-2 md:px-6 rounded bg-sky-500 hover:bg-sky-700">Update</button>
                        <button className="flex items-center text-red-500  text-[10px] md:text-[12px]  h-[30px] py-1 md:py-1 px-2 md:px-6  border border-red-500 rounded bg-transparent hover:bg-red-700">Cancel</button>
                    </div>
            </div>
            )}
                    
            <div className="flex justify-between p-4">
                    <button onClick={prevPage} disabled={currentPage === 1} className="btn">
                        <KeyboardArrowLeftIcon/>
                    </button>
                    <button onClick={nextPage} disabled={currentPage === 2} className="btn">
                        <KeyboardArrowRightIcon/>
                    </button>
            </div>
            
            
        </Box>
    );

};
export default PersonalDetails;
