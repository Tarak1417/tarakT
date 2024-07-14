import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Apps from '@mui/icons-material/Apps';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import logo from './hivrrlogo.png';
import { useLocation } from 'react-router-dom';
export const appList= [
  
  {
    logo: 'https://cdn.clikkle.com/images/campaigns/logo/2023/campaigns.png',
    name: 'Campaigns',
    link: 'https://clikkle.com/campaigns',
  },
  {
    logo: 'https://cdn.clikkle.com/images/host/logo/2023/host.png',
    name: 'Host',
    link: 'https://clikkle.com/host',
  },
  {
    logo: 'https://cdn.clikkle.com/images/files/logo/2023/files.png',
    name: 'Files',
    link: 'https://clikkle.com/files',
  },
  {
    logo: 'https://cdn.clikkle.com/images/e-sign/logo/2023/e-sign.png',
    name: 'E-Sign',
    link: 'https://clikkle.com/esign',
  },
  { logo: 'https://cdn.clikkle.com/images/ads/logo/2023/ads.png', 
    name: 'Ads',
    link: 'https://clikkle.com/ads',
  
  },
  {
    logo: 'https://cdn.clikkle.com/images/pitch/logo/2023/pitch.png',
    name: 'Pitch',
    link: 'https://clikkle.com/pitch',
  },
  { logo: 'https://cdn.clikkle.com/images/cmail/logo/2023/cmail.png', 
    name: 'Mail',
    link: 'https://clikkle.com/mail',
  
  },
  {
    logo: 'https://cdn.clikkle.com/images/projects/logo/2023/projects.png',
    name: 'Projects',
    link: 'https://clikkle.com/projects',
  },
  {
    logo: 'https://cdn.clikkle.com/images/launch/logo/2023/launch.png',
    name: 'Launch',
    link: 'https://clikkle.com/launch',
  },
  { logo: 'https://cdn.clikkle.com/images/hr/logo/2023/hr.png',
    name: 'HR',
    link: 'https://clikkle.com/hr',
   },
  { logo: 'https://cdn.clikkle.com/images/tax/logo/2023/tax.png', 
    name: 'Tax',
    link: 'https://clikkle.com/tax',
  },
  {
    logo: 'https://cdn.clikkle.com/images/chat/logo/2023/chat.png',
    name: 'Chat',
    link: 'https://clikkle.com/chat',
  },
  {
    logo: 'https://cdn.clikkle.com/images/social/logo/2023/social.png',
    name: 'Social',
    link: 'https://clikkle.com/social',
  },
  { logo: 'https://cdn.clikkle.com/images/sms/logo/2023/sms.png', 
    name: 'SMS',
    link: 'https://clikkle.com/sms',
  },
  {
    logo: 'https://cdn.clikkle.com/images/crew/logo/2023/crew.png',
    name: 'Crew',
    link: 'https://clikkle.com/crew',

  },
  {
    logo: 'https://cdn.clikkle.com/images/swiprr/logo/2023/swiprr.png',
    name: 'Swiprr',
    link: 'https://swiprr.clikkle.com',
  },
  {
    logo: 'https://cdn.clikkle.com/images/kept-up/logo/2023/kept-up.png',
    name: 'KeptUp',
    link: 'https://keptup.app',
  },
  {
    logo: 'https://cdn.clikkle.com/images/news/logo/2023/news.png',
    name: 'News',
    link: 'https://news.clikkle.com',
  },
  {
    logo: logo,
    name: 'Hivrr',
    link: 'https://hivrr.clikkle.com',
  },
];

const AppListToggler = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();

  const orgName = localStorage.getItem('Organization');
  const pathName = location.pathname;

  const shouldRenderMenuIcon =
    !pathName.includes(`/career/${orgName}`) && orgName === 'clikkle';


  return (
    <div className='hidden sm:flex items-center gap-2'>
      {shouldRenderMenuIcon && <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
        <Apps />
      </IconButton> }
      <Button variant='contained'>
          <Link to={"https://accounts.clikkle.com"}>
           Sign In
          </Link>
        </Button>
{
  shouldRenderMenuIcon && 
  <Popover
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className='w-[350px] p-4 flex items-center justify-center flex-wrap gap-4'>
          {appList.map((app) => (
            <div
              key={app.logo}
              className='flex flex-col items-center w-[80px] cursor-pointer'
            >
              <Link to={app.link}>
              <img
                src={app.logo}
                alt={app.name}
                className='h-[35px] w-[35px]'
              />
              </Link>
              <Link to={app.link}>
              <Typography sx={{ p: 1 }}>{app.name}</Typography>
              </Link>
              
            </div>
          ))}
        </div>
      </Popover>
}
      
    </div>
  );
};

export default AppListToggler;
