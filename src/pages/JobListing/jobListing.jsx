// JobListing.jsx
import React, { useState } from 'react';
import { Button } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import JobCards from './JobCards';

const JobListing = () => {
    const [currentScreen, setCurrentScreen] = useState(1);

    const handlePrevScreen = () => {
        if (currentScreen > 1) {
            setCurrentScreen(currentScreen - 1);
        }
    };

    const handleNextScreen = () => {
        
        if (currentScreen < 2) {
            setCurrentScreen(currentScreen + 1);
        }
    };

    return (
        <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between md:w-full p-4">
                <div className="p-2">
                    <h1 className="text-3xl text-zinc-200">Job Listing</h1>
                </div>
                <div className="flex flex-row items-center justify-center gap-4">
                    <Button variant="contained">Add Job</Button>
                    <InfoOutlinedIcon />
                </div>
            </div>
            <div className="flex items-center justify-between md:w-[92%] mx-4 md:pt-10">
                <div className="bg-neutral-900 p-2 rounded-lg">
                    <div className="flex items-center">
                        <input
                            className="outline-none bg-transparent"
                            type="text"
                            placeholder="Search your listing here"
                        />
                        <SearchOutlinedIcon className="outline-none text-zinc-300" />
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <KeyboardArrowLeftOutlinedIcon
                        className="text-zinc-300 cursor-pointer"
                        onClick={handlePrevScreen}
                    />
                    <p className="text-zinc-300">1</p>
                    {currentScreen === 1 ? (
                        <KeyboardArrowRightOutlinedIcon
                            className="text-zinc-300 cursor-pointer"
                            onClick={handleNextScreen}
                        />
                    ) : (
                        <div className="bg-blue-500 w-[20px] h-[20px] flex items-center justify-center p-1 rounded-full">
                            2
                        </div>
                    )}
                </div>
            </div>

            <div className="overflow-y-auto">
                <JobCards currentScreen={currentScreen} />
            </div>
        </div>
    );
};

export default JobListing;
