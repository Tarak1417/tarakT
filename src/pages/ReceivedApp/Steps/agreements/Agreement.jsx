import React, { useState } from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import IntellectualProperty from './IP';
import NonDisclosure from './ND';
import EmployeeContract from './EC';

const AgreementPage = () => {
    const [scheduleDisabled, setScheduleDisabled] = useState(false); 
    const [activeContent, setActiveContent] = useState('content1');

    const toggleButtonText = () => {
        setScheduleDisabled(true); 
    };

    const handleButtonClick = (content) => {
        setActiveContent(content); 
    };

    return (
        <div className="container mx-auto overscroll-auto overflow-hidden">
            <div className="flex items-center justify-between p-4">
                <div>
                    <h1 className="text-sm md:text-3xl text-zinc-400">Job Application Details</h1>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        disabled={scheduleDisabled}
                        onClick={toggleButtonText}
                        className={`${
                            scheduleDisabled
                                ? 'bg-neutral-700 cursor-not-allowed text-stone-400'
                                : 'bg-sky-500 hover:bg-sky-700'
                        } text-white font-bold text-[8px] md:text-[14px] py-1 md:py-2 px-2 md:px-4 rounded`}
                    >
                        Send Agreement
                    </button>
                    <InfoOutlinedIcon />
                </div>
            </div>
            <div className="flex justify-start gap-4">
                <button
                    onClick={() => handleButtonClick('content1')}
                    className={`${
                        activeContent === 'content1'
                            ? 'text-blue-500 border-b border-blue-500'
                            : 'text-zinc-500'
                    } font-bold text-[8px] md:text-[14px] py-1 md:py-2 px-2 md:px-4 rounded`}
                >
                    Intellectual Property
                </button>
                <button
                    onClick={() => handleButtonClick('content2')}
                    className={`${
                        activeContent === 'content2'
                            ? 'text-blue-500 border-b border-blue-500'
                            : ' text-zinc-500'
                    } font-bold text-[8px] md:text-[14px] py-1 md:py-2 px-2 md:px-4 rounded`}
                >
                    Non-Disclosure
                </button>
                <button
                    onClick={() => handleButtonClick('content3')}
                    className={`${
                        activeContent === 'content3'
                            ? 'text-blue-500 border-b border-blue-500'
                            : 'text-zinc-500'
                    } font-bold text-[8px] md:text-[14px] py-1 md:py-2 px-2 md:px-4 rounded`}
                >
                    Employment Contract
                </button>
            </div>
            <div className="p-4">
                {activeContent === 'content1' && <div><IntellectualProperty/></div>}
                {activeContent === 'content2' && <div><NonDisclosure/></div>}
                {activeContent === 'content3' && <div><EmployeeContract/></div>}
            </div>
        </div>
    );
};

export default AgreementPage;
