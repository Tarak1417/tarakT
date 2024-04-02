import React, { useState }  from 'react';
import { Button} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profile from './profile.png';
import view from './viewicon.png';
import Calendar from './Calender';


const ShowMorePage = () => {
    const [showPopup, setShowPopup] = useState(false);
    //const [ setSelectedDate] = useState(new Date());

   // const handleMonthChange = (date) => {
       // setSelectedDate(date);
    //};
    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-between p-4">
                <div>
                    <h1 className="text-lg md:text-3xl text-zinc-400">Job Application Details</h1>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="contained" onClick={() => setShowPopup(true)}>Schedule Interview</Button>
                    <InfoOutlinedIcon />
                </div>
            </div>
            <div className="flex flex-col md:flex-row p-4 items-start justify-start">
                <div className="md:w-1/3 flex flex-col gap-2 p-4">
                    <div className="flex justify-center md:justify-start">
                        <img src={profile} alt="Profile" className=" w-[50%] md:w-full max-w-[200px] h-auto" />
                    </div>
                    <div className="w-full">
                        <h1 className="text-blue-500 text-[22px]">George Kepner</h1>
                        <p className="text-zinc-50 text-[16px]">Full Stack Developer</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 md:w-2/3">
                    <div className="flex flex-row items-center justify-start gap-10">
                        <div className="w-1/2">
                            <h1 className="text-neutral-500 text-[20px]">Full Name:</h1>
                        </div>
                        <div className="w-1/2">
                            <p className="text-zinc-50 text-[20px]">George Kepner</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-10">
                        <div className="w-1/2">
                            <h1 className="text-neutral-500 text-[20px]">Resume:</h1>
                        </div>
                        <div className="w-1/2">
                            <Button variant="outlined"><SaveAltIcon className="pr-2"/> Download</Button>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-10">
                        <div className="w-1/2">
                            <h1 className="text-neutral-500 text-[20px]">Job Title:</h1>
                        </div>
                        <div className="w-1/2">
                            <p className="text-zinc-50 text-[20px]">Full Stack Developer</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-10">
                        <div className="w-1/2">
                            <h1 className="text-neutral-500 text-[20px]">Years of Experience:</h1>
                        </div>
                        <div className="w-1/2">
                            <p className="text-zinc-50 text-[20px]">3</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-10">
                        <div className="w-1/2">
                            <h1 className="text-neutral-500 text-[20px]">Email:</h1>
                        </div>
                         <div className="w-1/2">
                            <p className="text-zinc-50 text-[20px]">georgekepner@gmail.com</p>
                         </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-10">
                        <div className="w-1/2">
                            <h1 className="text-neutral-500 text-[20px]">Phone:</h1>
                        </div>
                        <div className="w-1/2">
                            <p className="text-zinc-50 text-[20px]">+234 245 952 3219</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-10">
                        <div className="w-1/2">
                            <h1 className="text-neutral-500 text-[20px]">LinkedIn Account:</h1>
                        </div>
                        <div className="w-1/2">
                            <Button variant="contained"><LinkedInIcon className="pr-2"/> LinkedIn Profile</Button>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-10">
                        <div className="w-1/2">
                            <h1 className="text-neutral-500 text-[20px]">Documents:</h1>
                        </div>
                        <div className="w-1/2">
                            <Button variant="outlined"><img src={view} alt="view" className="w-[18px] h-[15px] pr-2"/> View</Button>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-10">
                        <div className="w-1/2">  
                            <h1 className="text-neutral-500 text-[20px]">Applied at:</h1>
                        </div>
                        <div className="w-1/2">
                            <p className="text-zinc-50 text-[20px]">23/10/2023, 15:39:16</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-10">
                        <div className="w-1/2">                            
                            <h1 className="text-neutral-500 text-[20px]">Candidate Sign:</h1>
                        </div>
                         <div className="w-1/2">
                            <p className="text-zinc-50 text-[20px]">George Kepner</p>
                         </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-10">
                        <div className="w-1/2">
                            <h1 className="text-neutral-500 text-[20px]">Interview Score:</h1>
                        </div>
                        <div className="w-1/2">
                            <p className="text-blue-500 text-[20px]">0%</p>
                        </div>
                    </div>
                </div>
            </div>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-neutral-900 bg-opacity-50 absolute inset-0"></div>
                    <div className=" w-full bg-neutral-900 p-8 w-[45%] h-auto relative z-10 border border-zinc-100 rounded-lg">
                       <div className='w-full flex flex-col gap-10'>
                            <div className='flex flex-col items-center justify-center'>
                                <h1 className='text-zinc-50 text-xl'>Select Your Preferred Time and Date</h1>
                                <p className='text-zinc-500 text-lg'>When do you want your Interview to be conducted? Select a date.</p>
                            </div>
                            <div className='flex flex-row w-full gap-10'>
                                    <div className='w-2/3'>
                                        <Calendar/>
                                    </div>
                                    <div className='w-1/3 flex flex-col gap-4 mt-8'>
                                        <h1 className='text-zinc-500 text-[20px]'>Schedule at</h1>
                                        <form>
                                            <input type="radio" id="1" name="fav_language" value="9:00AM" className="mr-2" />
                                            <label htmlFor="1" className="inline-block">9:00AM</label><br />
                                            <input type="radio" id="2" name="fav_language" value="10:00AM" className="mr-2" />
                                            <label htmlFor="2" className="inline-block">10:00AM</label><br />
                                            <input type="radio" id="3" name="fav_language" value="11:00AM" className="mr-2" />
                                            <label htmlFor="3" className="inline-block">11:00AM</label><br />
                                            <input type="radio" id="4" name="fav_language" value="12:00PM" className="mr-2" />
                                            <label htmlFor="4" className="inline-block">12:00PM</label><br />
                                            <input type="radio" id="5" name="fav_language" value="1:00PM" className="mr-2" />
                                            <label htmlFor="5" className="inline-block">1:00PM</label><br />
                                            <input type="radio" id="6" name="fav_language" value="2:00PM" className="mr-2" />
                                            <label htmlFor="6" className="inline-block">2:00PM</label><br />
                                            <input type="radio" id="7" name="fav_language" value="3:00PM" className="mr-2" />
                                            <label htmlFor="7" className="inline-block">3:00PM</label><br />
                                            <input type="radio" id="8" name="fav_language" value="4:00PM" className="mr-2" />
                                            <label htmlFor="8" className="inline-block">4:00PM</label><br />
                                        </form>
                                        </div>


                            </div>

                       </div>
                        
                        <div className="flex justify-end pt-5">
                            <Button variant="contained" onClick={() => setShowPopup(false)}>Schedule</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShowMorePage;
