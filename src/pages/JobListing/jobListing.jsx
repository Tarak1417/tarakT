// JobListing.jsx
import React, { useCallback, useEffect, useState } from 'react';
import { Button, IconButton, Modal, Pagination, Skeleton } from '@mui/material';
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
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const getOrders = jobs =>
    jobs.map((job, i) => ({
        id: job._id,
        index: i,
    }));

const JobListing = () => {
    const [currentScreen, setCurrentScreen] = useState(1);
    const [org , setOrg] = useState('N/A');
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
        let currentOrg = localStorage.getItem("org");
        currentOrg = JSON.parse(currentOrg);
        setOrg(currentOrg)
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

    const handleCopy = () => {
        let text =  `https://hr.clikkle.com/career/${org.name}`
        navigator.clipboard.writeText(text).then(() => { }).catch((err) => {
          console.error('Failed to copy text: ', err);
        });
      };

    const goToCareerPage = () => {

          let  careerPage  = '/career/'+org.name
          window.open(careerPage, '_blank', 'noopener,noreferrer')
        //   navigate(careerPage);

       
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
        <div className="flex flex-col gap-4 max-w-screen py-4 px-2 sm:px-4 " >
            <div className="flex md:items-center items-start justify-between flex-row md:w-full py-1 ">
                <div className=" flex flex-row flex-wrap  gap-2">
                    <h1 className="text-2xl text-neutral-500"  >Job Listing</h1>
                    <a className="hidden sm:block text-lg text-neutral-500  cursor-pointer" onClick={goToCareerPage} >hr.clikkle.com/career/{org.name} </a>
                    <span className="hidden sm:block" onClick={handleCopy}> 
                    
                    <IconButton sx={{height:'20px' ,  width: '20px' }} >
                            <ContentCopyIcon  sx={{height:'17px'}} />
                        </IconButton>  </span>
                </div>
                <div className="flex flex-row   gap-4">
                    <Button variant="contained" onClick={openModal}>Add Job</Button>
                    <InfoOutlinedIcon />
                </div>
            </div>
            <div className=" sm:hidden py-1 flex flex-row  gap-2 ">
                    <a className="text-lg text-neutral-500 truncate cursor-pointer" onClick={goToCareerPage} >hr.clikkle.com/career/{org.name} </a>
                    <span className="" onClick={handleCopy}> 
                    <IconButton sx={{height:'20px' ,  width: '20px' }} >
                            <ContentCopyIcon  sx={{height:'17px'}} />
                        </IconButton>  </span>
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
       
            </div>
            <Modal sx={{ overflowY: 'scroll' }} open={modalState} onClose={closeModal}>
                    <AddJobs
                        selectedJob={selectedJob}
                        setSelectedJob={setSelectedJob}
                        refresh={fetchJobListing}
                        handleClose={closeModal}
                    />
                </Modal>
            <div className='flex justify-end pb-2 sm:pb-0'>

            <Pagination
          page={pageNo}
          onChange={(_, newPage) => setPageNo(newPage)}
          color="primary"
          count={pageLimit}
        />

</div>
            
            
        </div>
    );
};

export default JobListing;
