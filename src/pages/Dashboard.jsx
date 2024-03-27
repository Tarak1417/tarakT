import React from 'react';
import { Typography } from '@mui/material';
import {  TrendingUp, TrendingDown } from '@mui/icons-material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import GroupIcon from '@mui/icons-material/Group';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Dashboard = () => {
    const data = [
        { name: 'Jan', employees: 100, budget: 200, year: 2024 },
        { name: 'Feb', employees: 150, budget: 220, year: 2024 },
        { name: 'Mar', employees: 200, budget: 250, year: 2024 },
        { name: 'Apr', employees: 180, budget: 230, year: 2024 },
        { name: 'May', employees: 210, budget: 240, year: 2024 },
        { name: 'Jun', employees: 220, budget: 260, year: 2024 },
    ];

    const boxesData = [
  
        { icon: <GroupIcon fontSize='large' sx={{ color: 'white', backgroundColor: '#0ea5e9', padding: '6px', borderRadius: '20%' }} />, title: 'Total Employees', value: <Typography variant="body1" style={{ color: '#00FF00', fontSize: '1.2em' }}>7,738</Typography>, description: '124 for last month', trendIcon: <TrendingUp sx={{ color: '#00FF00' }} /> },
        { icon: <ApartmentIcon fontSize='large' sx={{ color: 'white', backgroundColor: '#e11d48', padding: '6px', borderRadius: '20%' }}/>, title: 'Department', value: <Typography variant="body1" style={{ color: '#FF0000', fontSize: '1.2em' }}>130</Typography>, description: '124 for last month,', trendIcon: <TrendingDown sx={{ color: '#FF0000' }}/> },
        { icon: <AttachMoneyIcon fontSize='large' sx={{ color: 'white', backgroundColor: '#e11d48', padding: '6px', borderRadius: '20%' }}/>, title: 'Expenses', value: <Typography variant="body1" style={{ color: '#FF0000', fontSize: '1.2em' }}>$ 30,476</Typography>, description: '124 for last month', trendIcon: <TrendingDown sx={{ color: '#FF0000' }}/> }  ];
        const eventData = [
            { date: '05 Mar', title: 'Board Meeting', description: 'Attend board meeting with company manager.',  backgroundColor: '#fbbf24' },
            { date: '10 Mar', title: 'Design Team Meeting', description: 'Attend design team meeting with team mates and HOD.',  backgroundColor: '#dc2626' },
            { date: '05 Mar', title: 'Tech Conference', description: 'Attend conference with teammates and other departments.',  backgroundColor: '#f97316' },
            { date: '10 Mar', title: 'Development Team Pitch', description: 'Pitch idea on new development to the company board,',  backgroundColor: '#3b82f6' },
            
        ];
       
        

    return (
        <div style={{ padding: '16px' }}>
            <Typography variant="h4" gutterBottom>
                HR DASHBOARD
            </Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap:'10px' }}>
                
                <div style={{ width: '70%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                        {boxesData.map((box, index) => (
                            <div key={index} style={{ width: '30%', backgroundColor: '#171717', borderRadius: '8px', padding: '16px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', color: '#FFFFFF' }}>
                                    <Typography variant="subtitle1" style={{ marginRight: '8px' }}>{box.title}</Typography>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                                    <Typography variant="subtitle2" style={{ display: 'flex', alignItems: 'center', width: '95%' , fontSize: '1.2em'}}>{box.value}</Typography>
                                    <Typography variant="subtitle1" style={{ marginRight: '8px' }}>{box.icon}</Typography>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                                    {box.trendIcon}
                                    <Typography variant="body2" style={{ marginLeft: '4px' }}>{box.description}</Typography>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#171717', padding:"10px", gap:"2%"}}>
                    <div style={{ width: '50%',}}>
                    <Typography variant="h5" gutterBottom>
                        Overview
                    </Typography>
                    </div>
                    <div style={{ width: '12%',outline: '1px solid #71717a', padding:'8px', borderRadius: '8px'}}>
                    <Typography variant="h7" gutterBottom>
                        Employee
                    </Typography>
                    </div>
                    <div style={{ width: '13%',outline: '1px solid #71717a', padding:'8px', borderRadius: '8px', }}>
                    <Typography variant="h7" gutterBottom>
                        Budget
                    </Typography>
                    </div>
                    <div style={{
                        width: '13%',
                        outline: '1px solid #71717a',
                        padding: '4px',
                        borderRadius: '8px',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                        <Typography variant="h7" gutterBottom>
                            Year
                        </Typography>
                        <KeyboardArrowDownIcon sx={{ alignSelf: 'flex-end' }}/> 
                    </div>

                    </div>
                    <div style={{ backgroundColor: '#171717',  padding: '16px', marginBottom: '16px',  }}>
                        
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={data}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="employees" fill="#93c5fd " barSize={10} />
                                <Bar dataKey="budget" fill="#1d4ed8" barSize={10} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                
                <div style={{ width: '28%' }}>
                    <div style={{ backgroundColor: '#171717', borderRadius: '8px', padding: '16px', marginBottom: '16px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', height:'400px' }}>
                        
                        <Typography variant="h5" gutterBottom style={{ color: '#FFFFFF', marginBottom: '14px', borderLeft: '4px solid #0ea5e9', paddingLeft: '10px' }}>
                            Notice Board
                        </Typography>

                        <div>
                            {eventData.map((event, index) => (
                                <div key={index} style={{ marginBottom: '20px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row', gap: '4%' }}>
                                        <div style={{ width: '20%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', backgroundColor: event.backgroundColor, padding: '6px', borderRadius: '10%' }}>
                                            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1px', borderRadius: '10%', outline: '3px solid #171717', paddingLeft:'9px' }}>
                                                <p>{event.date}</p>
                                            </div>
                                        </div>
                                        <div style={{ width: '75%', display: 'flex', flexDirection: 'column' }}>
                                            <h1 style={{ fontSize: '14px' }}>{event.title}</h1>
                                            <p style={{ fontSize: '12px', color: '#71717a' }}>{event.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{ borderRadius: '8px', padding: '4px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', height:'140px' }}>
                       
                        <Typography variant="h5" gutterBottom style={{ color: '#FFFFFF', marginBottom: '16px' }}>
                            Upcoming Events
                        </Typography>
                        <div style={{backgroundColor:'#171717', padding:'10px'}}>
                        <div style={{ width: '20%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', backgroundColor: '#84cc16', padding: '6px', borderRadius: '10%' }}>
                            <div style={{ width: '99%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1px', borderRadius: '10%', outline: '3px solid #171717', paddingLeft:'8px' }}>
                                <p>22</p>
                                <p>Mar</p>
                            </div>
                        </div>
                        </div>
                            

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
