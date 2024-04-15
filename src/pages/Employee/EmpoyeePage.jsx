import React from 'react';
import { Grid, Typography } from '@mui/material';
import { TrendingUp, TrendingDown } from '@mui/icons-material';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import MaleOutlinedIcon from '@mui/icons-material/MaleOutlined';
import FemaleOutlinedIcon from '@mui/icons-material/FemaleOutlined';
import {Box, IconButton} from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PersonIcon from '@mui/icons-material/Person';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

const EmployeePage = () => {
    
    const EmployeeData = [
        {id:1, name:'Derek wonder', mail:'derek@clikkmail.com', empid:'#1003', dept:'HR', desig:'General Manager', phone:'+961849321', joind:'20 Nov 2020', work:'4Y 2M 3D', profile:'' },
        {id:2, name:'Tony Cooke', mail:'tony@clikkmail.com', empid:'#1003', dept:'HR', desig:'General Manager', phone:'+961849321', joind:'20 Nov 2020', work:'4Y 2M 3D', profile:'' },
        {id:3, name:'Aisha Malik', mail:'aisha@clikkmail.com', empid:'#1003', dept:'HR', desig:'General Manager', phone:'+961849321', joind:'20 Nov 2020', work:'4Y 2M 3D', profile:'' },
        {id:4, name:'Darnell Rowland', mail:'darnel@clikkmail.com', empid:'#1003', dept:'HR', desig:'General Manager', phone:'+961849321', joind:'20 Nov 2020', work:'4Y 2M 3D', profile:'' },
        {id:5, name:'Emma Stone', mail:'emma@clikkmail.com', empid:'#1003', dept:'HR', desig:'General Manager', phone:'+961849321', joind:'20 Nov 2020', work:'4Y 2M 3D', profile:'' },
        {id:6, name:'Raymond Emodi', mail:'raymond@clikkmail.com', empid:'#1003', dept:'HR', desig:'General Manager', phone:'+961849321', joind:'20 Nov 2020', work:'4Y 2M 3D', profile:'' },
        {id:7, name:'Emily Styles', mail:'emily@clikkmail.com', empid:'#1003', dept:'HR', desig:'General Manager', phone:'+961849321', joind:'20 Nov 2020', work:'4Y 2M 3D', profile:'' },
        {id:8, name:'Paige Campbell', mail:'paige@clikkmail.com', empid:'#1003', dept:'HR', desig:'General Manager', phone:'+961849321', joind:'20 Nov 2020', work:'4Y 2M 3D', profile:'' },
        {id:9, name:'Daniel Sullivan', mail:'daniel@clikkmail.com', empid:'#1003', dept:'HR', desig:'General Manager', phone:'+961849321', joind:'20 Nov 2020', work:'4Y 2M 3D', profile:'' },
        {id:10, name:'Antonia Gavor', mail:'antonia@clikkmail.com', empid:'#1003', dept:'HR', desig:'General Manager', phone:'+961849321', joind:'20 Nov 2020', work:'4Y 2M 3D', profile:'' },
        
        
    ];
    

    const boxesData = [
        { icon: <GroupOutlinedIcon fontSize='large' className="text-white  bg-green-600 p-2 rounded-lg" />, title: 'Total Employees',  value: <Typography variant="body1" style={{ color: '#00FF00', fontSize: '1.2em' }}>8,400</Typography>, description: '124 for last month', trendIcon: <TrendingUp className="text-green-500" /> },
        { icon: <MaleOutlinedIcon fontSize='large' className="text-white bg-teal-700 p-2 rounded-lg" />, title: 'Total Male Employees', value: <Typography variant="body1" style={{ color: '#5eead4', fontSize: '1.2em' }}>5,267</Typography>, description: '124 for last month,', trendIcon: <TrendingDown className="text-red-500" /> },
        { icon: <FemaleOutlinedIcon fontSize='large' className="text-white bg-teal-950 p-2 rounded-lg" />, title: 'Total Female Employees', value: <Typography variant="body1" style={{ color: '#f472b6', fontSize: '1.2em' }}>2,947</Typography>, description: '124 for last month', trendIcon: <TrendingDown className="text-red-500" /> },
        { icon: <GroupsOutlinedIcon  fontSize='large' className="text-white bg-red-800 p-2 rounded-lg" />, title: 'Total New Employees', value: <Typography variant="body1" style={{ color: '#FF0000', fontSize: '1.2em' }}>186</Typography>, description: '124 for last month', trendIcon: <TrendingDown className="text-red-500" /> }
    ];
   
    
    return (
        <Box sx={{backgroundColor: 'background.main',}}>
        <div className='flex flex-col'>
                <div className="flex items-center justify-between md:w-full p-4">
                        <div className="p-2">
                            <h1 className="text-2xl text-neutral-500">Employees</h1>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-4">
                            <button className='flex  items-center text-white font-bold text-[10px] md:text-[12px] py-1 md:py-1 px-2 md:px-3 rounded bg-sky-500 hover:bg-sky-700'>
                                Add New Employee
                            </button>
                            <InfoOutlinedIcon />
                        </div>
                    </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-full">
                        <div  className="flex flex-col gap-4 mb-4 md:flex-row md:flex-row">
                            {boxesData.map((box, index) => (
                                <Grid sx={{backgroundColor: 'background.view',}}  key={index} className="rounded-lg p-4 shadow-md md:w-1/4">
                                    <p className='text-lg'>{box.title}</p>
                                    <div className="flex items-center mb-2">
                                        <p className="w-5/6 text-xl">{box.value}</p>
                                        <div className="w-1/6">{box.icon}</div>
                                    </div>
                                </Grid>
                            ))}
                        </div>
                    </div>  
                </div>
            <Box className="w-full ml-2 md:ml-0 pt-4 rounded-lg mb-4" sx={{ backgroundColor: 'background.view', }}>
                <div className='flex items-center justify-between md:w-full'>
                    <div>
                    <p className=" mb-4 border-l-4 border-blue-500 pl-3 text-xl" gutterBottom>
                        Employees List
                    </p>
                    </div>
                    <div className='flex flex-row items-center justify-center gap-4 mr-8'>
                        <p className='text-sm md:text-base text-zinc-400 pl-2 md:pl-5'>Rows per page: 10 <FontAwesomeIcon icon={faCaretDown} className='text-zinc-500 text-lg md:text-2xl text-center ml-2'/></p>
                    </div>
                </div>
                <div className='w-[97%] ml-2 md:ml-4 border border-zinc-500 rounded-sm '>
                    <div className='flex flex-row border-b border-zinc-500'>
                        <div className='w-[25%] md:w-[5%] p-2 border-r border-zinc-500 text-left text-sm md:text-xs font-bold'>
                            No
                        </div>
                        <div className='w-[50%] md:w-[15%] p-2 border-r border-zinc-500 text-sm md:text-xs font-bold'>
                            Emp Name
                        </div>
                        <div className='w-[25%] md:w-[10%] p-2 border-r border-zinc-500 text-sm md:text-xs font-bold'>
                            Emp ID
                        </div>
                        <div className='w-[25%] md:w-[8%] p-2 border-r border-zinc-500 text-left text-sm md:text-xs font-bold'>
                            Department
                        </div>
                        <div className='w-[50%] md:w-[12%] p-2 border-r border-zinc-500 text-sm md:text-xs font-bold'>
                            Designation
                        </div>
                        <div className='w-[25%] md:w-[10%] p-2 border-r border-zinc-500 text-sm md:text-xs font-bold'>
                            Phone No
                        </div>
                        <div className='w-[25%] md:w-[10%] p-2 border-r border-zinc-500 text-left text-sm md:text-xs font-bold'>
                            Join Date
                        </div>
                        <div className='w-[50%] md:w-[10%] p-2 border-r border-zinc-500 text-sm md:text-xs font-bold'>
                            At Work
                        </div>
                        <div className='w-[25%] md:w-[10%] p-2 border-r border-zinc-500 text-sm md:text-xs font-bold'>
                            Status
                        </div>
                        <div className='w-[25%] md:w-[10%] p-2  text-left text-sm md:text-xs font-bold'>
                            Action
                        </div>
                        
                    </div>
                    {EmployeeData.map((employee) => (
                        <div key={employee.id} className='flex flex-row border-b border-zinc-500'>
                        <div className='w-[25%] md:w-[5%] p-2 border-r border-zinc-500 text-left text-sm md:text-[10px]'>
                            {employee.id}
                        </div>
                        <div className='w-[50%] md:w-[15%] p-0 border-r border-zinc-500 text-sm md:text-[10px] flex flex-row gap-2 flex items-center'>
                            <div className='flex justify-center items-center pl-4'>
                                <PersonIcon style={{ fontSize: '16px' }} className="text-zinc-300"/>
                            </div>
                            <div className='flex flex-col gap-0'>
                                {employee.name}
                                <p className='text-[6px]'>{employee.mail}</p>
                            </div>
                        </div>
                        <div className='w-[25%] md:w-[10%] p-2 border-r border-zinc-500 text-sm md:text-[10px]'>
                            {employee.empid}
                        </div>
                        <div className='w-[25%] md:w-[8%] p-2 border-r border-zinc-500 text-left text-sm md:text-[10px]'>
                             {employee.dept}
                        </div>
                        <div className='w-[50%] md:w-[12%] p-2 border-r border-zinc-500 text-sm md:text-[10px]'>
                             {employee.desig}
                        </div>
                        <div className='w-[25%] md:w-[10%] p-2 border-r border-zinc-500 text-sm md:text-[10px]'>
                             {employee.phone}
                        </div>
                        <div className='w-[25%] md:w-[10%] p-2 border-r border-zinc-500 text-left text-sm md:text-[10px]'>
                            {employee.joind}
                        </div>
                        <div className='w-[50%] md:w-[10%] p-2 border-r border-zinc-500 text-sm md:text-[10px]'>
                            {employee.work}
                        </div>
                        <div className='w-[25%] md:w-[10%] p-2 border-r border-zinc-500 text-sm md:text-xs'>
                        <button className='flex  items-center text-white font-bold text-[6px] md:text-[8px] py-0 md:py-0 px-2 md:px-3 rounded bg-sky-500 hover:bg-sky-700'>
                                Active
                            </button>
                        </div>
                        
                            <div className='w-[25%] md:w-[10%] flex flex-row gap-2 justify-center items-center'>
                                <IconButton><EditOutlinedIcon style={{ fontSize: '12px' }}  className=' rounded-sm'/></IconButton>
                                <IconButton><DeleteOutlineOutlinedIcon style={{ fontSize: '12px' }} className='text-blue-500 rounded-sm'/></IconButton>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='w-[95%] ml-2  md:ml-9 mt-2 flex justify-between items-center pb-2 mb-20 md:mb-0'>
                    <p className='text-sm md:text-base text-zinc-400 '>Showing Rows: 1-10 of 20</p>
                    <div className='flex flex-row gap-4'>
                    <KeyboardArrowLeftOutlinedIcon className='text-zinc-400'/>
                    <p className='text-zinc-400'>1</p>
                    <p className='text-zinc-400 bg-blue-500 w-[20px] h-[20px] flex items-center justify-center p-1 rounded-full'>2</p>
                </div>
                </div>
            </Box>
        </div>
        </Box>
    );
};

export default EmployeePage;
