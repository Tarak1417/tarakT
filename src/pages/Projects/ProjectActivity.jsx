import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ProjectActivity = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [setSelectedYear] = useState('2024');

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleYearSelect = (year) => {
        setSelectedYear(year);
        setDropdownOpen(false);
    };

    const jobs = [
        { title: 'Mobile App design page was created', description: 'From "robertsmith@gmail.com", DevOps' },
        { title: 'Short Leave Mail', description: 'From "Richard Miller" QAtester conference leave on 20th..' },
        { title: 'Received Mail', description: 'Emergency leave for "George Anderson" from Development team.' },
        { title: 'Job Application mMil', description: 'From "Mohammedali@gmail.com", Technical Support' },
        { title: 'Job Application Mail', description: 'From "stevesmith@gmail.com", UI DesignServices.' },
    ];

    return (
        <Box className="rounded-lg mb-4 shadow-md pr-4 pt-4 pb-4" sx={{ backgroundColor: 'background.view' }}>
            <div className="flex flex-col md:flex-row gap-4 mb-4 items-center justify-between">
                <Typography variant="h5" className="w-full md:w-1/3 border-l-4 border-blue-500 pl-2 whitespace-nowrap" gutterBottom>
                     Activity
                </Typography>
                <div className="border border-gray-600 rounded-lg p-1">
                    <Typography className="text-[12px]">
                        View All <KeyboardArrowDownIcon className="cursor-pointer text-9333ea" onClick={toggleDropdown} />
                    </Typography>
                    {dropdownOpen && (
                        <div className="absolute top-10 right-0 mt-1 w-20 bg-neutral-900 rounded-lg border border-gray-600 z-10">
                            <div className="p-2 flex flex-col gap-2 justify-center items-center">
                                <Typography variant="h7" className="cursor-pointer" onClick={() => handleYearSelect('2024')}>
                                    Sun
                                </Typography>
                                <Typography variant="h7" className="cursor-pointer" onClick={() => handleYearSelect('2023')}>
                                    Mon
                                </Typography>
                                <Typography variant="h7" className="cursor-pointer" onClick={() => handleYearSelect('2023')}>
                                    Tue
                                </Typography>
                                <Typography variant="h7" className="cursor-pointer" onClick={() => handleYearSelect('2023')}>
                                    Wed
                                </Typography>
                                <Typography variant="h7" className="cursor-pointer" onClick={() => handleYearSelect('2023')}>
                                    Thu
                                </Typography>
                                <Typography variant="h7" className="cursor-pointer" onClick={() => handleYearSelect('2023')}>
                                    Fri
                                </Typography>
                                <Typography variant="h7" className="cursor-pointer" onClick={() => handleYearSelect('2023')}>
                                    Sat
                                </Typography>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="w-full pl-4">
                {jobs.map((job, index) => (
                    <div key={index} className="mb-4">
                        <div className="flex gap-4 justify-center items-center mt-[22px] mt-[35px] ">
                            <div style={{ height: '40px', width: '64px', display: 'flex', alignItems: 'center'  }}>
                                <img
                                    src="https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg"
                                    style={{ display: 'block'  , borderRadius:'8px' }}
                                />
                            </div>
                            <div className="w-4/5">
                                <h1 className="text-[17px] font-bold">{job.title}</h1>
                                <div className="flex flex-row ">
                                <img
                                    src="https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg"
                                    style={{ display: 'block'  , height:'20px' , marginRight:'8px' , borderRadius:'50%'}}
                                />  <p className="text-[10px] mt-[4px] text-gray-500">{job.description}</p>
                                    </div>
                             
                            </div>
                            <div className="w-1/5">
                                <p className="text-[10px] text-center text-zinc-500">just now</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Box>
    );
};

export default ProjectActivity;
