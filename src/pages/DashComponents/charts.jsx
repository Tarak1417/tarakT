import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Crop54Icon from '@mui/icons-material/Crop54';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Charts = ({ data }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [ setSelectedYear] = useState('2024');

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleYearSelect = (year) => {
        setSelectedYear(year);
        setDropdownOpen(false);
    };

   

    return (
        <div className="relative">
            <div className="bg-neutral-900 p-4 mb-4">
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <Typography variant="h5" className="w-full md:w-1/3 border-l-4 border-blue-500 pl-2 mb-4 md:mb-0 md:mr-4" gutterBottom>
                        Overview
                    </Typography>
                    <div className="w-full md:w-1/5 flex items-center justify-center border border-gray-600 rounded-lg p-2 gap-6">
                        <Crop54Icon className="bg-blue-300 text-blue-300" />
                        <Typography variant="h7">Employee</Typography>
                    </div>
                    <div className="w-full md:w-1/5 flex items-center justify-center border border-gray-600 rounded-lg p-2 gap-6">
                        <Crop54Icon className="text-blue-700 bg-blue-700" />
                        <Typography variant="h7">Budget</Typography>
                    </div>
                    <div className="w-full md:w-1/6 flex items-center justify-between border border-gray-600 rounded-lg p-2">
                        <div className="flex items-center relative">
                            <Typography variant="h7">Year</Typography>
                            {dropdownOpen && (
                                <div className="absolute top-10 right-0 mt-1 w-20 bg-neutral-900 rounded-lg border border-gray-600 z-10">
                                    <div className="p-2 flex flex-col gap-2 justify-center items-center">
                                        <Typography variant="h7" className="cursor-pointer" onClick={() => handleYearSelect('2024')}>
                                            2023
                                        </Typography>
                                        <Typography variant="h7" className="cursor-pointer" onClick={() => handleYearSelect('2023')}>
                                            2024
                                        </Typography>
                                        <Typography variant="h7" className="cursor-pointer" onClick={() => handleYearSelect('2023')}>
                                            2025
                                        </Typography>
                                        <Typography variant="h7" className="cursor-pointer" onClick={() => handleYearSelect('2023')}>
                                            2026
                                        </Typography>
                                        <Typography variant="h7" className="cursor-pointer" onClick={() => handleYearSelect('2023')}>
                                            2027
                                        </Typography>
                                        <Typography variant="h7" className="cursor-pointer" onClick={() => handleYearSelect('2023')}>
                                            2028
                                        </Typography>
                                    </div>
                                </div>
                            )}
                            <KeyboardArrowDownIcon className="ml-12 cursor-pointer text-9333ea" onClick={toggleDropdown} />
                        </div>
                    </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="employees" fill="#93c5fd" barSize={10} />
                        <Bar dataKey="budget" fill="#1d4ed8" barSize={10} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Charts;
