// JobListing.jsx
import React, { useCallback, useEffect, useState } from 'react';
import { Button, Modal, Skeleton } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import axios from 'axios';
import { useMessage } from '../../components/Header';
import useModal from '../../hooks/useModal';
import AddJobs from '../../components/AddJobs';
import JobListingCard from './JobCards';
import noRecord from '../../assets/initalScreen/jobListing.svg';

const getOrders = jobs =>
    jobs.map((job, i) => ({
        id: job._id,
        index: i,
    }));

const JobListing = () => {
    const [currentScreen, setCurrentScreen] = useState(1);

    const handlePrevScreen = () => {
        if (currentScreen > 1) {
            setCurrentScreen(currentScreen - 1);
        }
    };

    const handleNextScreen = () => {
        
        if (currentScreen < 2) {
            setCurrentScreen(currentScreen + 1);
        }
    };
    const { modalState, closeModal, openModal } = useModal();
    const [selectedJob, setSelectedJob] = useState({});
    const [jobs, setJobs] = useState(null);
    const [originalOrder, setOriginalOrders] = useState(null);
    const [isOrderChanged, setIsOrderChanged] = useState(false);
    const [loading, setLoading] = useState(false);
    const { showError, showSuccess } = useMessage();
    const [offset, setOffset] = useState(0);
    const [pageNo, setPageNo] = useState(1);
    const [pageLimit, setPageLimit] = useState(0);
    // const errorHandler = useErrorHandler();
    const [departments, setDepartments] = useState({});

    const fetchJobListing = useCallback(
        async (search = '') => {
            // setJobs(null);
            try {
                const response = await axios.get(
                    `/hr/job-listing?searchBy=title&search=${search}&sortBy=order&direction=1&page=${pageNo}`
                );
                const body = response.data;
                const { jobs, pageData } = body;
                const { currentPage, pageSize } = pageData;
                setJobs(jobs);
                setOffset((currentPage - 1) * pageSize);
                setPageLimit(response.data.pageData.totalPages);
                setOriginalOrders(getOrders(jobs));
            } catch (e) {
                console.warn(e);
            }
        },
        [setJobs, pageNo]
    );

    useEffect(() => {
        fetchJobListing();
    }, [fetchJobListing]);

    const editJob = id => {
        openModal();
        setSelectedJob({ id, action: 'edit' });
    };

    const copyJob = id => {
        openModal();
        setSelectedJob({ id });
    };

    const goToCareerPage = () => {
        let currentOrg = sessionStorage.getItem("org");
        if (currentOrg) {
          currentOrg = JSON.parse(currentOrg);
          let  careerPage  = '/career/'+currentOrg.name
          window.open(careerPage, '_blank', 'noopener,noreferrer')
        //   navigate(careerPage);
        }
       
    };


    const saveOrder = async (newJobOrder) => {
        setLoading(true);
        const newOrder = getOrders(newJobOrder);
        const effOrder = newOrder
            .filter((order, i) => order.id !== originalOrder[i].id)
            .map(order => ({
                ...order,
                index: order.index + offset,
            }));

        const res = await axios.patch('/hr/job-listing/order', {
            newOrders: effOrder,
        });

        const { success } = res.data;

        if (success) {
            showSuccess('Order saved successfully');
        } else {
            showError('Cannot save order');
        }

        setIsOrderChanged(false);
        setLoading(false);
    };

    const onDragEnd = result => {
        const { source, destination } = result;

        if (!destination) return;

        if (source.droppableId === destination.droppableId && source.index === destination.index)
            return;

        setIsOrderChanged(true);

        const draggingJob = jobs[source.index];
        jobs.splice(source.index, 1);

        console.log('removed');
        console.log(jobs);

        jobs.splice(destination.index, 0, draggingJob);

        console.log('added');
        console.log(jobs);

        setJobs([...jobs]);
        saveOrder([...jobs])
    };

    const getDepartments = useCallback(async () => {
        try {
            const response = await axios.get(`/hr/department`);
            const departments = response.data.departments;

            const format = {};

            departments.forEach(department => (format[department._id] = department.name));

            setDepartments(format);
        } catch (e) {
            console.log(e)
        }
    }, []);

    useEffect(() => {
        getDepartments();
    }, [getDepartments]);
    console.log(jobs)
    console.log(currentScreen)
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between md:w-full p-4">
                <div className="p-2">
                    <h1 className="text-2xl text-neutral-500" onClick={goToCareerPage} >Job Listing</h1>
                </div>
                <div className="flex flex-row items-center justify-center gap-4">
                    <Button variant="contained" onClick={openModal}>Add Job</Button>
                    <InfoOutlinedIcon />
                </div>
            </div>

            <div>
            {jobs && jobs?.length > 0  ?
            <div className="overflow-y-auto">
            <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId='list'>
                        {provided => (
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                {jobs
                                    ? jobs.map((job, i) => (
                                          <Draggable key={job._id} draggableId={job._id} index={i}>
                                              {provided => (
                                                  <div
                                                      ref={provided.innerRef}
                                                      {...provided.draggableProps}
                                                      {...provided.dragHandleProps}>
                                                      <JobListingCard
                                                          ref={provided.innerRef}
                                                          draggableProps={provided.draggableProps}
                                                          dragHandleProps={provided.dragHandleProps}
                                                          title={job.title}
                                                          key={i}
                                                          location={job.location}
                                                          experience={job.experience}
                                                          details={job.details}
                                                          jobType={job.jobType}
                                                          salary={job.salary}
                                                          departmentId={job.department}
                                                          refresh={fetchJobListing}
                                                          id={job._id}
                                                          editJob={editJob}
                                                          copyJob={copyJob}
                                                          departments={departments}
                                                      />
                                                  </div>
                                              )}
                                          </Draggable>
                                      ))
                                    : Array(5)
                                          .fill(0)
                                          .map((el, i) => (
                                              <Skeleton
                                                  variant='rounded'
                                                  key={i}
                                                  width='100%'
                                                  height='136px'
                                                  animation='wave'
                                                  sx={{
                                                      borderRadius: '20px',
                                                      my: 2,
                                                  }}
                                              />
                                          ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
            :
            <div className="flex flex-col items-center justify-center  text-center">
            <div><img src={noRecord} alt="No Record" className="mb-1"
            style={{maxWidth:'70%' , margin:'auto'}}
            /></div>
            <div><h1 className="text-2xl font-bold mb-2" style={{fontSize:'36px'}}>No Job  list Available</h1></div>
            <div><p className='mb-[50px]'> You have not listed any availble job for application Click on add job now<br /> to start creating opportunites.</p></div>
            </div>
            }
            <div className='flex items-center justify-between w-[80%] md:w-[92%] md:mx-4 pl-5 md:pl-0 pt-4 md:pt-10'>
                <div className="p-2 rounded-lg ">
                    <div className="flex items-center gap-0 md:gap-6">
                        
                    </div>
                </div>
                <Modal sx={{ overflowY: 'scroll' }} open={modalState} onClose={closeModal}>
                    <AddJobs
                        selectedJob={selectedJob}
                        setSelectedJob={setSelectedJob}
                        refresh={fetchJobListing}
                        handleClose={closeModal}
                    />
                </Modal>
                <div className="flex flex-row gap-4">
                    <KeyboardArrowLeftOutlinedIcon
                        className="text-zinc-400 cursor-pointer"
                        onClick={handlePrevScreen}
                    />
                    <p className="text-zinc-400">1</p>
                    {currentScreen === 1 ? (
                        <KeyboardArrowRightOutlinedIcon
                            className="text-zinc-300 cursor-pointer"
                            onClick={handleNextScreen}
                        />
                    ) : (
                        <div className="bg-blue-500 w-[20px] h-[20px] flex items-center justify-center p-1 rounded-full">
                            2
                        </div>
                    )}
                </div>
            </div> 
            </div>
            
            
        </div>
    );
};

export default JobListing;
