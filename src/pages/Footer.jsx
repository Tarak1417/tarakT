import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
//import StarOutlineIcon from '@mui/icons-material/StarOutline';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
//import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import MarkunreadMailboxOutlinedIcon from '@mui/icons-material/MarkunreadMailboxOutlined';
import VideoChatOutlinedIcon from '@mui/icons-material/VideoChatOutlined';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='fixed bottom-0 left-0 w-full bg-neutral-900 p-4 flex justify-around items-center md:hidden'>
            <div className='flex flex-col items-center'>
                <Link to="/">
                <HomeOutlinedIcon className='text-zinc-400'/>
                <p className='text-[12px] text-zinc-400'>Home</p>
                </Link>
            </div>
            <div className='flex flex-col items-center'>
                <Link to="/receivedapplications">
                <MarkunreadMailboxOutlinedIcon className='text-zinc-400'/>
                <p className='text-[12px] text-zinc-400'>ATS</p>
                </Link>
            </div>
            <div className='flex flex-col items-center'>
                <GroupOutlinedIcon className='text-zinc-400' />
                <p className='text-[12px] text-zinc-400'>Attendance</p>
            </div>
            <div className='flex flex-col items-center'>
                <VideoChatOutlinedIcon  className='text-zinc-400'/>
                <p className='text-[12px] text-zinc-400'>Chat</p>
            </div>
        </div>
    );
};

export default Footer;
