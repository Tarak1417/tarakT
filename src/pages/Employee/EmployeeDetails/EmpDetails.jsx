import React, { useCallback, useEffect, useState } from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PersonalDetails from './PersonalDetails';
import CompanyDetails from './CompanyDetails';
import BankDetails from './BankDetails';
import UploadDetails from './UploadDoc';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EmpDetailsPage = () => {
    const [activeContent, setActiveContent] = useState('content1');
    const handleButtonClick = (content) => {
        setActiveContent(content); 
    };

    const { id } = useParams();
    const [employeeDetail, setEmployeeDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchEmployeeDetails = useCallback(async () => {
        try {
            const response = await axios.get(`/employee/profile/${id}`);
            setEmployeeDetail(response.data.employee);
            setLoading(false);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        fetchEmployeeDetails();
    }, [fetchEmployeeDetails]);

    return (
        <div className="container mx-auto overscroll-auto overflow-hidden">
            <div className="flex items-center justify-between p-4">
                <div>
                    <h1 className="text-sm md:text-3xl text-zinc-400">Employee</h1>
                </div>
                <div className="flex items-center gap-4">
                    <InfoOutlinedIcon />
                </div>
            </div>
            <div className="flex justify-start gap-4 p-4">
                <button
                    onClick={() => handleButtonClick('content1')}
                    className={`${activeContent === 'content1' ? 'bg-sky-500' : ''} font-bold text-[8px] md:text-[14px] py-1 md:py-2 px-2 md:px-4 rounded-lg`}
                >
                    Personal Details
                </button>
                <button
                    onClick={() => handleButtonClick('content2')}
                    className={`${activeContent === 'content2' ? 'bg-sky-500' : ''} font-bold text-[8px] md:text-[14px] py-1 md:py-2 px-2 md:px-4 rounded-lg`}
                >
                    Company Details
                </button>
                <button
                    onClick={() => handleButtonClick('content3')}
                    className={`${activeContent === 'content3' ? 'bg-sky-500' : ''} font-bold text-[8px] md:text-[14px] py-1 md:py-2 px-2 md:px-4 rounded-lg`}
                >
                    Bank Details
                </button>
                <button
                    onClick={() => handleButtonClick('content4')}
                    className={`${activeContent === 'content4' ? 'bg-sky-500' : ''} font-bold text-[8px] md:text-[14px] py-1 md:py-2 px-2 md:px-4 rounded-lg`}
                >
                    Upload Documents
                </button>
            </div>
            <div className="p-4">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        {activeContent === 'content1' && <PersonalDetails employeeDetails={employeeDetail} />}
                        {activeContent === 'content2' && <CompanyDetails id={employeeDetail._id}
                            department={employeeDetail.department}
                            designation={employeeDetail.designation}
                            dateOfJoining={employeeDetail.dateOfJoining}
                            jobType={employeeDetail.jobType}
                            amount={employeeDetail.salary.amount} 
                            employeeDetail={employeeDetail}
                            />}
                        {activeContent === 'content3' && <BankDetails 
                            id={employeeDetail._id}
                            accountHolder={employeeDetail?.bank?.accountHolder}
                            accountNumber={employeeDetail?.bank?.accountNumber}
                            branch={employeeDetail?.bank?.branch}
                            bankName={employeeDetail?.bank?.bankName}
                            ifsc={employeeDetail?.bank?.ifsc}
                            pan={employeeDetail?.bank?.pan}
                            city={employeeDetail?.bank?.city}
                            state={employeeDetail?.bank?.state}
                            country={employeeDetail?.bank?.country} />}
                        {activeContent === 'content4' && <UploadDetails
                          id={employeeDetail._id}
                        />}
                    </>
                )}
            </div>
        </div>
    );
};

export default EmpDetailsPage;
