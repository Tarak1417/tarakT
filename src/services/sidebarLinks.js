import {
    DashboardOutlined,
} from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ListIcon from '@mui/icons-material/List';
import ApartmentIcon from '@mui/icons-material/Apartment';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';




const menuItems = [
    {
        icon: <HomeIcon fontSize='small' />,
        label: 'Dashboard',
        to: [
            {
                label: 'Dashboard',
                icon: <HomeIcon fontSize='small' />,
                to: '/',
            },
            {
                label: 'Job Listing',
                icon: <FormatListBulletedIcon fontSize='small' />,
                to: '/joblisting',
            },
            {
                label: 'Interview Question',
                icon: <ListIcon fontSize='small' />,
                to: '/contacts/signup-forms',
            },
            {
                label: 'Department',
                icon: <ApartmentIcon fontSize='small' />,
                to: '/contacts/tags',
            },
            {
                label: 'Received Applications',
                icon: <MarkunreadMailboxIcon  fontSize='small' />,
                to: '/contacts/segments',
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
                icon: <CalendarMonthIcon fontSize='small' />,
                to: '/employees/award',
            },
            {
                label: 'Leave Setting',
                icon: <WorkHistoryIcon fontSize='small' />,
                to: '/employees/award',
            },
            {
                label: 'Attendance By User',
                icon: <AssignmentReturnedIcon fontSize='small' />,
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
