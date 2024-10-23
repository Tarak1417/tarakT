import {
    DashboardOutlined,
    Settings,
} from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import InterviewIcon from './icons/interview.png';
import JobListIcon from './icons/joblisting.png'
import OfficeIcon from './icons/office.svg'
import ReceivedIcon from './icons/recieved.svg';
import AttendIcon from './icons/attend.svg';
import LeaveIcon from './icons/leave.svg';
import PersonIcon from './icons/person.png';
import DownloadIcon from './icons/download.svg';
import SettingsIcon from '@mui/icons-material/Settings';
import TripOriginIcon from '@mui/icons-material/TripOrigin';

const InterviewQuestionIcon = () => <img src={InterviewIcon} alt="Interview Icon" style={{ width: '24px', height: '24px' }} />;
const JobList = () => <img src={JobListIcon} alt="Interview Icon" style={{ width: '20px', height: '20px' }} />;
const Office = () => <img src={OfficeIcon} alt="Interview Icon" style={{ width: '20px', height: '20px' }} />;
const Received = () => <img src={ReceivedIcon} alt="Interview Icon" style={{ width: '20px', height: '20px' }} />;
const Leave = () => <img src={LeaveIcon} alt="Interview Icon" style={{ width: '20px', height: '20px' }} />;
const Attend= () => <img src={AttendIcon} alt="Interview Icon" style={{ width: '20px', height: '20px' }} />;
const Person = () => <img src={PersonIcon} alt="Interview Icon" style={{ width: '20px', height: '20px' }} />;
const Download= () => <img src={DownloadIcon} alt="Interview Icon" style={{ width: '20px', height: '20px' }} />;
const SupportSetting= () => <img src='data:image/png;base64,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' alt="Interview Icon" style={{ width: '10px', height: '10px' }} />;
const TagSupport = () => <span style={{fontSize:'12px' , position:'relative' , right:'10px' , textWrap:'nowrap'}}>Landing Page</span>
const TagSupport2 = () => <span style={{fontSize:'12px' , position:'relative' , right:'10px' , textWrap:'nowrap'}}>Knowledge Pages</span>
const TagSupport3 = () => <span style={{fontSize:'12px' , position:'relative' , right:'10px' , textWrap:'nowrap'}}>Knowledge View</span>
const TagSupport4 = () => <span style={{fontSize:'12px'   , position:'relative' , right:'10px' , textWrap:'nowrap' }}>Dashboard</span>
const TagSupport5 = () => <span style={{fontSize:'12px'  , position:'relative' , right:'10px' , textWrap:'nowrap' }}>Profile</span>
const TagSupport6 = () => <span style={{fontSize:'12px' , position:'relative' , right:'10px' , textWrap:'nowrap' }}>Ticket List</span>
const TagSupport7 = () => <span style={{fontSize:'12px' , position:'relative' , right:'10px' ,  textWrap:'nowrap' }}>Active Tickets</span>

const TagSupport8 = () => <span style={{fontSize:'12px' , position:'relative' , right:'10px' ,  textWrap:'nowrap' }}>Closed Tickets</span>
const TagSupport9 = () => <span style={{fontSize:'12px' , position:'relative' , right:'10px' ,  textWrap:'nowrap'}}>Create Tickets</span>
const TagSupport10 = () => <span style={{fontSize:'12px' , position:'relative' , right:'10px' ,  textWrap:'nowrap' }}>View Tickets</span>








const menuItems = [
    {
        icon: <HomeIcon fontSize='small' />,
        label: 'Dashboard',
        to: [
            {
                label: 'Dashboard',
                icon: <HomeOutlinedIcon fontSize='small' className='text-zinc-500' />,
                to: '/',
            },
            {
                label: 'Department',
                icon: <Office/>,
                to: '/department',
            },
             
            {
                label: 'Docs',
                icon: <Office/>,
                to: '/docs',
            },
            {
                label: 'Interview Question',
                icon:  <InterviewQuestionIcon  className='text-zinc-500' />,
                to: '/interviewquestions',
            },
            {
                label: 'Job Listing',
                icon:<JobList  className='text-zinc-500'/>,
                to: '/joblisting',
            },{
                icon: <GroupsIcon fontSize='small' />,
                label: 'Memos',
                to: '/memo',
            },

            {
                icon: <GroupsIcon fontSize='small' />,
                label: 'Notice Board',
                to: '/noticeboard',
            },
            {
                label: 'Received Applications',
                icon: <Received/>,
                to: '/receivedapplications',
            },
            {
                icon: <GroupsIcon fontSize='small' />,
                label: 'Rules & Regulations',
                to: '/rulesandregulations',
            },
        ],
    },
    {
        icon: <GroupsIcon fontSize='small' />,
        label: 'Staff',
        to: [
            {
                label: 'Employee List',
                icon: <Person/>,
                to: '/employees',
            },
            {
                label: 'Employee View',
                icon: <Person/>,
                to: '/performance/view',
            },
            {
                label: 'Award',
                icon: <EmojiEventsIcon fontSize='small' />,
                to: '/award',
            },
        ],
    },
    {
        label: 'Attendance',
        icon: <DashboardOutlined fontSize='small' />,
        to: [
            {
                label: 'Attendance View',
                icon: <Attend />,
                to: '/attendanceview',
            },
            {
                label: 'Leave Setting',
                icon: <Leave/>,
                to: '/leavesettings',
            },
            {
                label: 'Leave Application',
                icon: <Download/>,
                to: '/leaveapplication',
            },
            {
                label: 'Attendance By User',
                icon: <Person/>,
                to: '/attendance',
            },
           
        ],
    },
    {
        icon: <GroupsIcon fontSize='small' />,
        label: 'Schedule',
        to: [
            {
                label: 'Overview Calendar',
                icon: <Person/>,
                to: 'Schudle',
            },
            {
                label: 'Employee Shift',
                icon: <Person/>,
                to: 'hfh',
            },
            {
                label: 'Holiday',
                icon: <HolidayVillageIcon fontSize='small' />,
                to: '/holidays',
            },
            {
                label: 'Schedule',
                icon: <Person/>,
                to: 'fnfn',
            },
        ],
    },
    
   
   
    {
        label: 'Payroll',
        icon: <DashboardOutlined fontSize='small' />,
        to: [
            {
                label: 'Employee Salary',
                icon: <Attend />,
                to: '/employeesalary',
            },
            {
                label: 'Add Payroll',
                icon: <Leave/>,
                to: '/addpayroll',
            },
            {
                icon: <GroupsIcon fontSize='small' />,
                label: 'Expenses',
                to: '/expenses',
            },
            {
                label: 'Edit Payroll',
                icon: <Download/>,
                to: '/editpayroll',
            },
           
        ],
    },
    
    
    {
        label: 'Admin',
        icon: <DashboardOutlined fontSize='small' />,
        to: [
            {
                label: 'General Settings',
                icon: <Attend />,
                to: '/generalsetting',
            },
            {
                label: 'API Settings',
                icon: <Leave/>,
                to: '/apisetting',
            },
            {
                label: 'Role Access',
                icon: <Download/>,
                to: '/rollaccess',
            },
           
        ],
    },
];

export { menuItems };
