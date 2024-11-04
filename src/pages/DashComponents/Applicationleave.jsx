import React, { useCallback, useEffect, useState } from 'react';
import { Box, Grid, LinearProgress } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useMessage } from '../../components/Header';

const LeaveAppPage = () => {
    const [LeaveApplications, seLeaveApplications] = useState([]);
    // const errorHandler = useErrorHandler();

    const fetchLeaveApplication = useCallback(
        async function () {
            try {
                const response = await axios.get(
                    '/hr/attendance/leaves?searchBy=status&search=Pending'
                );
                seLeaveApplications(response.data.leaves);
            } catch (e) {
                console.log(e)
            }
        },
        []
    );

    useEffect(() => {
        fetchLeaveApplication();
    }, [fetchLeaveApplication]);
   
    const { showError, showSuccess } = useMessage();
    const [acceptLoading, setAcceptLoading] = useState(false);
    const acceptLeave = useCallback(
        async function (id) {
            setAcceptLoading(true);
            try {
                const res = await axios.post(`/hr/attendance/leaves/approve/${id}`);
                fetchLeaveApplication();
                const { success, message } = res.data;
                if (success) return showSuccess(message);
                showError(message);
            } catch (e) {
                console.log(e);
            } finally {
                setAcceptLoading(false);
            }
        },
        [fetchLeaveApplication, showSuccess, showError]
    );

    const rejectLeave = useCallback(
        async function (id) {
            try {
                const res = await axios.post(`/hr/attendance/leaves/deny/${id}`);
                fetchLeaveApplication();
                const { success, message } = res.data;
                if (success) return showSuccess(message);
                showError(message);
            } catch (e) {
                showError(e);
            }
        },
        [fetchLeaveApplication, showSuccess, showError]
    );


    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
      }

    return (
        <Box sx={{ backgroundColor: 'background.view',marginTop:"12px" ,borderRadius:"15px"}}>
          
            <Box className="w-full ml-2 md:ml-0 rounded-lg mb-4 pb-5 "  sx={{  backgroundColor: 'background.view',
                        overflowY: 'scroll',
                        '&::-webkit-scrollbar': {
                            display: 'none'
                        },
                        '-ms-overflow-style': 'none',
                        'scrollbar-width': 'none'
                    }}>
            <div className='flex flex justify-between items-center w-full pt-3'>
                        <p style={{fontFamily:"sans-serif",fontSize:"15px",marginRight:"8px"}} className="  pl-4  text-xl" gutterBottom>
                            Recent Leave Application
                        </p> 
                        <Link to="/leaveapplication/view">
                            <button style={{fontSize:"10px",width:"70px",marginRight:"8px"}} className='flex   py-1 md:py-2 px-2 md:px-4 rounded bg-sky-500 '>
                                View All
                            </button>
                        </Link>
            </div> 
                <Grid container spacing={2} className='mx-2 pr-4 pt-2 pl-4'>
                    {LeaveApplications?.map((section, index) => {
                        const date = new Date(section.updatedAt);
                        let Applied = date.toLocaleTimeString();

                        const from = new Date(
                            `${section.dates[0]?.month}-${section.dates[0]?.day}-${section.dates[0]?.year}`
                        );

                        const to = section.dates[1]
                            ? new Date(
                                  `${section.dates[1]?.month}-${section.dates[1]?.day}-${section.dates[1]?.year}`
                              )
                            : new Date(
                                  `${section.dates[0]?.month}-${section.dates[0]?.day}-${section.dates[0]?.year}`
                              );
                        const timeDifference = Math.abs(from - to);
                        const daysRemaining = Math.ceil(
                            timeDifference / (1000 * 60 * 60 * 24)
                        );
                        return(
                            <Grid key={index} item xs={12} sm={6} md={4}>
                                <Box 
                               className=" ml-2 md:ml-0 rounded-lg" sx={{ backgroundColor: 'background.view',height:"201px" }}>
                                    
                                    <Box sx={{borderStyle:"solid",borderWidth:"1px",borderColor:"gray",borderRadius:"15px",height:"200px",marginTop:"-7px",width:"285px",marginLeft:"-5px"}}>
                                    <div style={{marginTop:"3px",marginLeft:"3px"}} className='flex flex-row gap-2 mx-4'>
                                        <div  className='flex justify-center items-center'>
                                            <AccountCircleOutlinedIcon fontSize='large' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <h1 className='text-[13px]'>{section.fullName}</h1>
                                            <p className='text-[10px] text-zinc-500'>{section.department}</p>
                                        </div>
                                    </div>
                                    <div  className='flex flex-row gap-4 mx-5 pt-2 ' style={{marginTop:'3px' , marginBottom:'3px'}}>
                                        <div style={{marginTop:"-11px",marginLeft:"-2px"}} className='flex justify-center items-center'>
                                            <CalendarTodayOutlinedIcon fontSize='small' />
                                        </div>
                                        <p style={{marginTop:"-7px"}} className='text-[11px]'>{section.date}
                                        {section?.dates[0]?.year}-{section?.dates[0]?.month}-{section?.dates[0]?.day}
                                        {section?.dates.length > 1 ? ` - ${section?.dates[section.dates.length - 1].year}-${section?.dates[section.dates.length - 1].month}-${section?.dates[section.dates.length - 1].day}` : ''}

                                        </p>
                                        <button style={{marginTop:"-7px"}} className='flex text-center items-center text-white text-[8px] md:text-[8px]  px-2 md:px-2 rounded bg-slate-500 hover:bg-sky-700'>
                                        {daysRemaining ?  daysRemaining + 1 : '1'} days
                                        </button>
                                    </div>
                                    <div style={{marginTop:"-5px",marginLeft:"3px"}} className='flex flex-col w-[90%] md:ml-5 mx-4 gap-2'>
                        <p className='text-[10px] text-zinc-500 mt-2'>Applied On {formatDate(section.updatedAt)}</p>
                                    
                                    <LinearProgress variant="determinate" className='mb-2 w-[100%]' value={daysRemaining} />
                                    </div>
                                    <div style={{marginTop:"-5px",marginLeft:"4px"}} className='flex flex justify-between items-center w-[85%] md:ml-5 mx-4'>
                                        <p className="md:text-[10px] pl-1 pt-1 text-gray-400" gutterBottom>
                                            Remaining Leaves
                                        </p>
                                        <p className='flex items-center text-[8px] md:text-[10px]' >
                                            {daysRemaining}
                                        </p>
                                    </div>
                                    <Box className='mt-2 w-[95%] ml-3 flex  md:ml-5 rounded-lg' sx={{ backgroundColor: 'background.bond',marginTop:"-3px",marginLeft:"5px" }}>
                                        <div>
                                            <div style={{}} className='flex flex-col p-2'>
                                                <h1 className='text-[10px]'>Reason</h1>
                                                <p className='text-[8px] text-zinc-500'>{section.reason}</p>
                                            </div>
                                        </div>
                                    </Box>
                                    <div className='w-full flex justify-center items-center'>
                                    <div className='w-[90%]  flex flex-row gap-2 pb-2 mt-2 justify-center items-center'>
                                        <div className='w-1/2 flex justify-center items-center'>
                                            <button className='flex w-full justify-center items-center text-blue-500 text-[8px] md:text-[10px] py-1 md:py-1 px-2 md:px-2 border border-blue-500 rounded hover:bg-sky-700'
                                            onClick={() => acceptLeave(section?._id)}
                                            disabled={acceptLoading}>
                                                Accept
                                            </button>
                                        </div>
                                        <div className='w-1/2 flex justify-center items-center'>
                                            <button className='flex w-full justify-center items-center text-red-500 text-[8px]  md:text-[10px] py-1 md:py-1 px-2 md:px-2 border border-red-500 rounded hover:bg-red-700'
                                            onClick={() => rejectLeave(section?._id)}
                                            >
                                                Reject
                                            </button>
                                        </div>
                                    </div>
                                    </div>
                                    </Box>
                                </Box>
                            </Grid>
                    )})}
                </Grid>
            </Box>
        </Box>
    );
};

export default LeaveAppPage;
