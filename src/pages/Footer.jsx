import React, { useState } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import MarkunreadMailboxOutlinedIcon from '@mui/icons-material/MarkunreadMailboxOutlined';
import VideoChatOutlinedIcon from '@mui/icons-material/VideoChatOutlined';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [activeIcon, setActiveIcon] = useState(null);

    const handleIconClick = (iconName) => {
        setActiveIcon(iconName === activeIcon ? null : iconName);
    };

    return (
        <div className='fixed bottom-0 left-0 w-full bg-neutral-900 p-4 flex justify-around items-center md:hidden'>
            <Link to="/">
                <div className="flex flex-col items-center" onClick={() => handleIconClick('home')}>
                    <div className={`${activeIcon === 'home' && 'text-white rounded-lg bg-sky-500 w-full flex justify-center px-4 py-1'}`}>
                        <HomeOutlinedIcon />
                    </div>
                    <p className='text-[12px] text-zinc-400'>Home</p>
                </div>
            </Link>
            <Link to="/receivedapplications">
                <div className="flex flex-col items-center" onClick={() => handleIconClick('ats')}>
                    <div className={`${activeIcon === 'ats' && 'text-white rounded-lg bg-sky-500 w-full flex justify-center px-4 py-1'}`}>
                        <MarkunreadMailboxOutlinedIcon  />
                    </div>
                    <p className='text-[12px] text-zinc-400'>ATS</p>
                </div>
            </Link>
            <Link to="/attendance">
                <div className="flex flex-col items-center" onClick={() => handleIconClick('attendance')}>
                     <div className={`${activeIcon === 'attendance' && 'text-white rounded-lg bg-sky-500 w-full flex justify-center px-4 py-1'}`}>
                        <GroupOutlinedIcon  />
                    </div>
                    <p className='text-[12px] text-zinc-400'>Attendance</p>
                </div>
            </Link>
            <Link to="/chat">
                <div className="flex flex-col items-center" onClick={() => handleIconClick('chat')}>
                    <div className={`${activeIcon === 'chat' && 'text-white rounded-lg bg-sky-500 w-full flex justify-center px-4 py-1'}`}>
                        <VideoChatOutlinedIcon  />
                    </div>
                    <p className='text-[12px] text-zinc-400'>Chat</p>
                </div>
            </Link>
        </div>
    );
};

export default Footer;
