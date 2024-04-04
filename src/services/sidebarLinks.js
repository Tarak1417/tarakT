import {
    DashboardOutlined,
} from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupsIcon from '@mui/icons-material/Groups';

import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import InterviewIcon from './icons/interview.png';
import JobListIcon from './icons/joblisting.png'
import OfficeIcon from './icons/office.png'
import ReceivedIcon from './icons/recieved.png';
import AttendIcon from './icons/attend.png';
import LeaveIcon from './icons/leave.png';
import PersonIcon from './icons/person.png';
import DownloadIcon from './icons/download.png';



const InterviewQuestionIcon = () => <img src={InterviewIcon} alt="Interview Icon" style={{ width: '24px', height: '24px' }} />;
const JobList = () => <img src={JobListIcon} alt="Interview Icon" style={{ width: '20px', height: '20px' }} />;
const Office = () => <img src={OfficeIcon} alt="Interview Icon" style={{ width: '20px', height: '20px' }} />;
const Received = () => <img src={ReceivedIcon} alt="Interview Icon" style={{ width: '20px', height: '20px' }} />;
const Leave = () => <img src={LeaveIcon} alt="Interview Icon" style={{ width: '20px', height: '20px' }} />;
const Attend= () => <img src={AttendIcon} alt="Interview Icon" style={{ width: '20px', height: '20px' }} />;
const Person = () => <img src={PersonIcon} alt="Interview Icon" style={{ width: '20px', height: '20px' }} />;
const Download= () => <img src={DownloadIcon} alt="Interview Icon" style={{ width: '20px', height: '20px' }} />;


const menuItems = [
    {
        icon: <HomeIcon fontSize='small' />,
        label: 'Dashboard',
        to: [
            {
                label: 'Dashboard',
                icon: <HomeOutlinedIcon fontSize='small' className='text-blue-500' />,
                to: '/',
            },
            {
                label: 'Job Listing',
                icon:<JobList/>,
                to: '/joblisting',
            },
            {
                label: 'Interview Question',
                icon:  <InterviewQuestionIcon />,
                to: '/interviewquestions',
            },
            {
                label: 'Department',
                icon: <Office/>,
                to: '/department',
            },
            {
                label: 'Received Applications',
                icon: <Received/>,
                to: '/receivedapplications',
            },
        ],
    },
    {
        icon: <GroupsIcon fontSize='small' />,
        label: 'Employees',
        to: [],
    },
    {
        label: 'Attendance',
        icon: <DashboardOutlined fontSize='small' />,
        to: [
            {
                label: 'Attendance View',
                icon: <Attend />,
                to: '/employees/award',
            },
            {
                label: 'Leave Setting',
                icon: <Leave/>,
                to: '/employees/award',
            },
            {
                label: 'Leave Application',
                icon: <Download/>,
                to: '/employees/award',
            },
            {
                label: 'Attendance By User',
                icon: <Person/>,
                to: '/employees/award',
            },
           
        ],
    },
    {
        label: 'Award',
        icon: <EmojiEventsIcon fontSize='small' />,
        to: '/employees/award',
    },
    {
        label: 'Holiday',
        icon: <HolidayVillageIcon fontSize='small' />,
        to: '/employees/holiday',
    },
];

export { menuItems };
