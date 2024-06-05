import React from "react";
import { Route, Routes } from "react-router-dom";
import "./utilities/axios";
import Header from "./components/Header";
import Home from "./pages/Home";
import JobListingHome from "./pages/JobListing/JobListingHome";
import ReceivedApp from "./pages/ReceivedApp/ReceivedApp";
import ShowMoreHome from "./pages/ReceivedApp/ShowMoreHome";
import SendOfferHome from "./pages/ReceivedApp/Steps/sendOfferHome";
import DeptHome from "./pages/Departments/DeptHome";
import InterviewHome from "./pages/Interview/interviewHome";
import EditHome from "./pages/JobListing/EditHome";
import OfferHome from "./pages/ReceivedApp/Steps/OfferHome";
import AgreementHome from "./pages/ReceivedApp/Steps/agreements/AgreementHome";
import NoticeHome from "./pages/NoticeBoard/NoticeHome";
import Apps from "./pages/Apps";
import EmployeeHome from "./pages/Employee/EmployeeHome";
import PerformanceHome from "./pages/Employee/PerformanceHome";
import EmpDetailsHome from "./pages/Employee/EmployeeDetails/EmpDetailsHome";
import AttendHome from "./pages/Attendance/AttendHome";
import AttendViewHome from "./pages/Attendance/AttendView/AttendViewHome";
import LeaveSettingsHome from "./pages/Attendance/AttendView/LeaveSetting/LeaveSettingHome";
import LeaveAppHome from "./pages/Attendance/AttendView/LeaveAppPage.jsx/LeaveAppHome";
import LeaveViewHome from "./pages/Attendance/AttendView/LeaveAppPage.jsx/LeaveViewHome";
import ExpensesHome from "./pages/Expenses/ExpensesHome";
import AwardHome from "./pages/Award/AwardHome";
import HolidayHome from "./pages/Holiday/HolidayHome";
import AddPayrollHome from "./pages/Payrolls/AddPayHome";
import MorePayrollHome from "./pages/Payrolls/MorePayHome";
import Footer from "./pages/Footer";
import EditPayrollHome from "./pages/Payrolls/EditPayHome";
import MoreEditPayrollHome from "./pages/Payrolls/MoreEPayHome";
import SalaryHome from "./pages/Payrolls/SalaryHome";
import JobApplicationDetail from "./pages/JobApplicationDetail";
import Agreements from "./pages/Agreements";
import OfferLetter from "./pages/OfferLatter";
import RuleAndRegulations from "./pages/Rules&Regulations";
import Dashboard from "./pages/Projects/Dashboard";
import NewProject from "./pages/Projects/NewProject";
import OverTime from "./pages/Projects/OverTimeCalender";
import OverViewCalender from "./pages/Projects/OverViewCalender";
import ViewProject from "./pages/Projects/ViewProject";

import Theme from "./pages/admin/Theme";
import Ticket from "./pages/admin/Ticket";
import Chat from "./pages/admin/Chat";
import Emailsetting from "./pages/admin/Emailsetting";
import Fileupload from "./pages/admin/Fileupload";
import Customcssjs from "./pages/admin/Customcssjs";
import Captcha from "./pages/admin/Captcha";
import Notifications from "./pages/admin/Notifications";

import Generalsettings from "./pages/admin/Generalsettings";
import Paymentsetting from "./pages/admin/Paymentsetting";
import Othersetting from "./pages/admin/Othersetting";
import Apisetting from "./pages/admin/Apisetting";
import Generalsettinghome from "./pages/admin/Generalsettinghome";
import Rollaccess from "./pages/admin/Rollaccess";

const App = () => {
  return (
    <>
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/joblisting" element={<JobListingHome />} />
          <Route path="/department" element={<DeptHome />} />
          <Route path="/interviewquestions" element={<InterviewHome />} />
          <Route path="/receivedapplications" element={<ReceivedApp />} />

          <Route path="/showmore:id" element={<ShowMoreHome />} />
          <Route path="/joblisting/edit" element={<EditHome />} />
          <Route path="/jobApplicationDetail">
            <Route path=":id" element={<JobApplicationDetail />} />
            <Route path="offer-letter/:id" element={<OfferLetter />} />
            <Route path="agreements/:id" element={<Agreements />} />
          </Route>

          <Route
            path="/showmore:id/sendofferletter"
            element={<SendOfferHome />}
          />
          <Route path="/showmore:id/offerletter" element={<OfferHome />} />

          <Route
            path="/showmore:id/sendagreement"
            element={<AgreementHome />}
          />

          <Route path="/noticeboard" element={<NoticeHome />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/expenses" element={<ExpensesHome />} />
          <Route path="/award" element={<AwardHome />} />
          <Route path="/holidays" element={<HolidayHome />} />

          <Route path="/addpayroll" element={<AddPayrollHome />} />
          <Route path="/addpayrolls" element={<MorePayrollHome />} />
          <Route path="/editpayroll" element={<EditPayrollHome />} />
          <Route path="/editpayrolls" element={<MoreEditPayrollHome />} />
          <Route path="/employeesalary" element={<SalaryHome />} />

          <Route path="/employees" element={<EmployeeHome />} />
          <Route path="/performance/:id" element={<PerformanceHome />} />
          <Route path="/viewemployee/:id" element={<EmpDetailsHome />} />
          <Route path="/attendance" element={<AttendHome />} />
          <Route path="/attendanceview" element={<AttendViewHome />} />
          <Route path="/leavesettings" element={<LeaveSettingsHome />} />
          <Route path="/leaveapplication" element={<LeaveAppHome />} />
          <Route path="/leaveapplication/view" element={<LeaveViewHome />} />
          <Route path="rulesandregulations" element={<RuleAndRegulations />} />
          <Route path="/dashboardproject" element={<Dashboard />} />
          <Route path="/newProject" element={<NewProject />} />
          <Route path="/OverTime" element={<OverTime />} />
          <Route path="/OverViewCalender" element={<OverViewCalender />} />
          <Route path="/ViewProject" element={<ViewProject />} />

          <Route path="/generalsettinghome" element={<Generalsettinghome />} />
          <Route path="/rollaccess" element={<Rollaccess />} />
          <Route path="/apisetting" element={<Apisetting />} />
        </Routes>
      </Header>
      <Footer />
    </>
  );
};

export default App;
