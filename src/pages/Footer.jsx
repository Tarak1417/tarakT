import React, { useState } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import VideoChatOutlinedIcon from '@mui/icons-material/VideoChatOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import { Link } from 'react-router-dom';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import AtsIcon from '../services/icons/ats.png';
import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import GroupsIcon from '@mui/icons-material/Groups';
const ATS = () => <img src={AtsIcon} alt="ats Icon" style={{ width: '20px', height: '20px' }} />;

const Footer = () => {
    const [activeIcon, setActiveIcon] = useState(null);

    const handleIconClick = (iconName) => {
        setActiveIcon(iconName === activeIcon ? null : iconName);
    };

    return (
        <Box sx={{ backgroundColor: 'background.view',  height: '10dvh' }} className='fixed bottom-0 text-gray-400 w-full text-xs p-2 flex flex-row gap-4 items-center justify-between md:hidden'>
            <Link to="/">
                <div className="flex flex-col items-center justify-center  w-[50px]" onClick={() => handleIconClick('home')}>
                    <div className={`${activeIcon === 'home' && 'text-white rounded-3xl bg-blue-500/[.15] w-[90%] flex justify-center '} px-2 py-px`}>
                        <HomeOutlinedIcon color={`${activeIcon === 'home' && 'primary'}`}    />
                    </div>
                    <p className={`${activeIcon === 'home' && 'text-blue-500 '}`}>Home</p>
                </div>
            </Link>
            <Link to="/receivedapplications">
                <div className="flex flex-col items-center justify-center  w-[50px]" onClick={() => handleIconClick('ats')}>
                    <div className={`${activeIcon === 'ats' && 'text-white rounded-3xl bg-blue-500/[.15] w-[90%] flex justify-center '} px-2 py-px`}>
                        <GroupsIcon color={`${activeIcon === 'ats' && 'primary'}`} />
                    </div>
                    <p className={`${activeIcon === 'ats' && 'text-blue-500'}`}>ATS</p>
                </div>
            </Link>
            <Link to="/apps">
                <div className="flex flex-col items-center justify-center  w-[70px]" onClick={() => handleIconClick('app')}>
                     <div className={`${activeIcon === 'app' && 'text-white rounded-3xl bg-blue-500/[.15] w-[90%] flex justify-center '} px-2 py-px`}>
                        <AppsOutlinedIcon fontSize='large' color={`${activeIcon === 'app' && 'primary'}`} />
                    </div>
                   
                </div>
                </Link>
            <Link to="/attendance">
                <div className="flex flex-col items-center justify-center w-[50px]" onClick={() => handleIconClick('attendance')}>
                     <div className={`${activeIcon === 'attendance' && 'text-white rounded-3xl bg-blue-500/[.15] w-[90%] flex justify-center '} px-2 py-px`}>
                        <GroupOutlinedIcon color={`${activeIcon === 'attendance' && 'primary'}`} />
                    </div>
                    <p className={`${activeIcon === 'attendance' && 'text-blue-500'}`}>Projects</p>
                </div>
            </Link>
            <Link to="/chat">
                <div className="flex flex-col justify-center items-center w-[50px]" onClick={() => handleIconClick('chat')}>
                    <div className={`${activeIcon === 'chat' && 'text-white rounded-3xl bg-blue-500/[.15] w-[90%] flex justify-center '} px-2 py-px`}>
                        <ChatOutlinedIcon color={`${activeIcon === 'chat' && 'primary'}`}  />
                        
                    </div>
                    <p className={`${activeIcon === 'chat' && 'text-blue-500'}`}>Chat</p>
                </div>
            </Link>
        </Box>
    );
};

export default Footer;
