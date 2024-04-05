import React from 'react';
import { Typography } from '@mui/material';
import { TrendingUp, TrendingDown } from '@mui/icons-material';
import GroupIcon from '@mui/icons-material/Group';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Charts from './DashComponents/charts';
import NoticeBoard from './DashComponents/noticeboard';
import UpcomingEvents from './DashComponents/upcomingevents';
import Bars from './DashComponents/bars';
import RecentActivity from './DashComponents/recent';
import GenderChart from './DashComponents/GenderChart';
import RecentJobs from './DashComponents/recentJobs';
import Attendance from './DashComponents/attend';

const Dashboard = () => {
    const data = [
        { name: 'Jan', employees: 100, budget: 200, year: 2024 },
        { name: 'Feb', employees: 150, budget: 220, year: 2024 },
        { name: 'Mar', employees: 200, budget: 250, year: 2024 },
        { name: 'Apr', employees: 180, budget: 230, year: 2024 },
        { name: 'May', employees: 210, budget: 240, year: 2024 },
        { name: 'Jun', employees: 220, budget: 260, year: 2024 },
        { name: 'Jan', employees: 100, budget: 200, year: 2024 },
        { name: 'Feb', employees: 150, budget: 220, year: 2024 },
        { name: 'Mar', employees: 200, budget: 250, year: 2024 },
        { name: 'Apr', employees: 180, budget: 230, year: 2024 },
        { name: 'May', employees: 210, budget: 240, year: 2024 },
        { name: 'Jun', employees: 220, budget: 260, year: 2024 },
    ];
    const barsData = [
        { name: 'Thu', inProgress: 50, pending: 20, completed: 30 },
        { name: 'Sun', inProgress: 30, pending: 20, completed: 20 },
        { name: 'Tue', inProgress: 20, pending: 50, completed: 5 },
        { name: 'Fri', inProgress: 30, pending: 20, completed: 41 },
        { name: 'Sat', inProgress: 20, pending: 0, completed: 40 },
        { name: 'Mon', inProgress: 30, pending: 20, completed: 50 },
        { name: 'Wed', inProgress: 50, pending: 10, completed: 40 },
    ];
    

    const boxesData = [
        { icon: <GroupIcon fontSize='large' className="text-white  bg-sky-400 p-2 rounded-lg" />, title: 'Total Employees',  value: <Typography variant="body1" style={{ color: '#00FF00', fontSize: '1.2em' }}>7,738</Typography>, description: '124 for last month', trendIcon: <TrendingUp className="text-green-500" /> },
        { icon: <ApartmentIcon fontSize='large' className="text-white bg-rose-500 p-2 rounded-lg" />, title: 'Department', value: <Typography variant="body1" style={{ color: '#FF0000', fontSize: '1.2em' }}>130</Typography>, description: '124 for last month,', trendIcon: <TrendingDown className="text-red-500" /> },
        { icon: <AttachMoneyIcon fontSize='large' className="text-white bg-blue-500 p-2 rounded-lg" />, title: 'Expenses', value: <Typography variant="body1" style={{ color: '#FF0000', fontSize: '1.2em' }}>$ 30,476</Typography>, description: '124 for last month', trendIcon: <TrendingDown className="text-red-500" /> }
    ];
    const eventData = [
        { date: '5 Mar', title: 'Board Meeting', description: 'Attend board meeting with company manager.', backgroundColor: '#fbbf24' },
        { date: '9 Mar', title: 'Design Team Meeting', description: 'Attend design team meeting with team mates and HOD.', backgroundColor: '#dc2626' },
        { date: '7 Feb', title: 'Tech Conference', description: 'Attend conference with teammates and other departments.', backgroundColor: '#f97316' },
        { date: '4 Mar', title: 'Development Team Pitch', description: 'Pitch idea on new development to the company board,', backgroundColor: '#3b82f6' },
    ];
    
    return (
        <div className='flex flex-col'>
            <div className="p-2">
                <Typography variant="h5" className="text-neutral-500" gutterBottom>
                    HR DASHBOARD
                </Typography>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-3/4">
                        <div className="flex flex-col gap-4 mb-4 md:flex-row md:flex-row">
                            {boxesData.map((box, index) => (
                                <div key={index} className="bg-neutral-900 rounded-lg p-4 shadow-md text-white md:w-1/3">
                                    <Typography className='text-xl'>{box.title}</Typography>
                                    <div className="flex items-center mb-2">
                                        <Typography className="w-5/6 text-xl">{box.value}</Typography>
                                        <div className="w-1/6">{box.icon}</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {box.trendIcon}
                                        <Typography variant="body2" className="ml-2">{box.description}</Typography>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Charts data={data} />
                    </div>
                    <div className="w-full md:w-1/4">
                        <NoticeBoard eventData={eventData} />
                        <UpcomingEvents />
                    </div>
                </div>
            </div>
            <div className='w-full  flex flex-col md:flex-row p-2'>
                <div className='w-full md:w-1/3 mx-1 mb-2 md:mb-0'>
                    <Bars barsData={barsData}/>
                </div>
                <div className='w-full md:w-1/3 mx-1 mb-2 md:mb-0'>
                    <RecentActivity/>
                </div>
                <div className='w-full md:w-1/3 mx-1'>
                    <GenderChart/> 
                </div>
            </div>
            <div className='w-full  flex flex-col md:flex-row p-2'>
                <div className='w-full md:w-1/2 mx-1 mb-2 md:mb-0'>
                    <RecentJobs/>
                </div>
                <div className='w-full md:w-1/2 mx-1 mb-2 md:mb-0'>
                    <Attendance/>
                </div>
            </div>
            
        </div>
    );
};

export default Dashboard;
