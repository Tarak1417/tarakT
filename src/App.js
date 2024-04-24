import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './utilities/axios';
import Header from './components/Header';
import Home from './pages/Home';
import JobListingHome from './pages/JobListing/JobListingHome';
import ReceivedApp from './pages/ReceivedApp/ReceivedApp';
import ShowMoreHome from './pages/ReceivedApp/ShowMoreHome';
import SendOfferHome from './pages/ReceivedApp/Steps/sendOfferHome';
import DeptHome from './pages/Departments/DeptHome';
import InterviewHome from './pages/Interview/interviewHome';
import EditHome from './pages/JobListing/EditHome';
import OfferHome from './pages/ReceivedApp/Steps/OfferHome';
import Footer from './pages/Footer';
import AgreementHome from './pages/ReceivedApp/Steps/agreements/AgreementHome';
import NoticeHome from './pages/NoticeBoard/NoticeHome';
import Apps from './pages/Apps';
import EmployeeHome from './pages/Employee/EmployeeHome';
import PerformanceHome from './pages/Employee/PerformanceHome';
import EmpDetailsHome from './pages/Employee/EmployeeDetails/EmpDetailsHome';
import AttendHome from './pages/Attendance/AttendHome';
import AttendViewHome from './pages/Attendance/AttendView/AttendViewHome';
import LeaveSettingsHome from './pages/Attendance/AttendView/LeaveSetting/LeaveSettingHome';
import LeaveAppHome from './pages/Attendance/AttendView/LeaveAppPage.jsx/LeaveAppHome';
import LeaveViewHome from './pages/Attendance/AttendView/LeaveAppPage.jsx/LeaveViewHome';
import ExpensesHome from './pages/Expenses/ExpensesHome';
import AwardHome from './pages/Award/AwardHome';
import HolidayHome from './pages/Holiday/HolidayHome';
import AddPayrollHome from './pages/Payrolls/AddPayHome';
import MorePayrollHome from './pages/Payrolls/MorePayHome';


const App = () => {
    return (
        <>
        <Header>
            <Routes>
                <Route path='/' element={<Home />} />
                
                <Route path='/joblisting' element={<JobListingHome/>} />
                <Route path='/department' element={<DeptHome/>} />
                <Route path='/interviewquestions' element={<InterviewHome/>} />
                <Route path='/receivedapplications' element={<ReceivedApp/>} />

                <Route path='/showmore:id' element={<ShowMoreHome/>} />
                <Route path='/joblisting/edit' element={<EditHome/>} />

                <Route path='/showmore:id/sendofferletter' element={<SendOfferHome/>} />
                <Route path='/showmore:id/offerletter' element={<OfferHome/>} />

                <Route path='/showmore:id/sendagreement' element={<AgreementHome/>} />

                <Route path='/noticeboard' element={<NoticeHome/>} />
                <Route path='/apps' element={<Apps/>} />
                <Route path='/expenses' element={<ExpensesHome/>} />
                <Route path='/award' element={<AwardHome/>} />
                <Route path='/holidays' element={<HolidayHome/>} />

                <Route path='/addpayroll' element={<AddPayrollHome/>} />
                <Route path='/addpayrolls' element={<MorePayrollHome/>} />

                <Route path='/employees' element={<EmployeeHome/>} />
                <Route path='/performance' element={<PerformanceHome/>} />
                <Route path='/viewemployee' element={<EmpDetailsHome/>} />
                <Route path='/attendance' element={<AttendHome/>} />
                <Route path='/attendanceview' element={<AttendViewHome/>} />
                <Route path='/leavesettings' element={<LeaveSettingsHome/>} />
                <Route path='/leaveapplication' element={<LeaveAppHome/>} />
                <Route path='/leaveapplication/view' element={<LeaveViewHome/>} />
            </Routes>
        </Header>
        <Footer/>
        </>
    );
};

export default App;
