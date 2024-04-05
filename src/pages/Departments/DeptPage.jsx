import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';


const departmentData = [
    { id: 1, name: 'Marketing Department' },
    { id: 2, name: 'Designing Department' },
    { id: 3, name: 'Human Resource Department' },
    { id: 4, name: 'Development' },
    { id: 5, name: 'IT Department' },
    { id: 6, name: 'Managers Department' },
    { id: 7, name: 'Technical Department' },
];

const DeptPage = () => {
    return (
        <div className="container mx-auto overscroll-auto overflow-hidden">
            <div className="flex flex-row items-center justify-between p-4">
                <h1 className="text-2xl md:text-3xl text-zinc-400 mb-4">Department</h1>
                <div className="flex items-center gap-4">
                    <button className='flex items-center text-white font-bold text-xs md:text-base py-1 md:py-1 px-2 md:px-3 rounded bg-sky-500 hover:bg-sky-700'>
                        Add Department
                    </button>
                    <InfoOutlinedIcon />
                </div>
            </div>
            <div className="w-[95%] ml-2 md:ml-5 bg-neutral-900 pt-4 rounded-lg mb-4">
                <p className="text-white mb-4 border-l-4 border-blue-500 pl-4 text-xl" gutterBottom>
                    Department Summary
                </p>
                <div className='w-full pl-4'>
                    <p className='text-sm md:text-base text-zinc-300 pl-2 md:pl-5'>Rows per page: 10 <FontAwesomeIcon icon={faCaretDown} className='text-zinc-500 text-lg md:text-2xl text-center ml-2'/></p>
                </div>
                <div className='w-[95%] ml-2 md:ml-9 border border-zinc-500 rounded-sm mt-4 '>
                    <div className='flex flex-row border-b border-zinc-500'>
                        <div className='w-[25%] md:w-[5%] p-2 border-r border-zinc-500 text-left text-sm md:text-lg font-bold'>
                            #ID
                        </div>
                        <div className='w-[50%] md:w-[85%] p-2 border-r border-zinc-500 text-sm md:text-lg text-white font-bold'>
                            Department Name
                        </div>
                        <div className='w-[25%] md:w-[10%] p-2 text-sm md:text-lg text-white font-bold'>
                            Actions
                        </div>
                    </div>
                    {departmentData.map((dept) => (
                        <div key={dept.id} className='flex flex-row border-b border-zinc-500'>
                            <div className='w-[25%] md:w-[5%] p-2 md:p-4 border-r border-zinc-500 text-left text-sm md:text-[16px]'>
                                #{dept.id}
                            </div>
                            <div className='w-[50%] md:w-[85%] p-2 md:p-4 border-r border-zinc-500 text-sm md:text-[18px]'>
                                {dept.name}
                            </div>
                            <div className='w-[25%] md:w-[10%] p-2 flex flex-row gap-2 items-center'>
                                <EditOutlinedIcon fontSize='medium' className='p-1 bg-neutral-800 rounded-sm'/>
                                <DeleteOutlineOutlinedIcon fontSize='medium' className='p-1 bg-neutral-800 text-blue-500 rounded-sm'/>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='w-[95%] ml-2  md:ml-9 mt-2 flex justify-between items-center pb-2'>
                    <p className='text-sm md:text-base text-zinc-300 '>Showing Rows: 1-10 of 20</p>
                    <div className='flex flex-row gap-4'>
                    <KeyboardArrowLeftOutlinedIcon className='text-zinc-300'/>
                    <p className='text-zinc-300'>1</p>
                    <p className='text-zinc-300 bg-blue-500 w-[20px] h-[20px] flex items-center justify-center p-1 rounded-full'>2</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default DeptPage;
