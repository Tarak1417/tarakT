import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
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
import WalkoverHeader from "./pages/Walkover/Walkover";
import Dashboard from "./pages/Projects/Dashboard";
import NewProject from "./pages/Projects/NewProject";
import OverTime from "./pages/Projects/OverTimeCalender";
import ProjectList from "./pages/Projects/ProjectList";
import OverViewCalender from "./pages/Projects/Calender";
import DashBoard from "./pages/Support_System/UserPage/Dashboard/DashBoard";
import TicketList from "./pages/Support_System/UserPage/Tikects/TicketList";
import Profile from "./pages/Support_System/UserPage/profile/Profile";
import Knowledgepage from "./pages/Support_System/LandingPages/Knowledgepage";
import Knowledgeview from "./pages/Support_System/LandingPages/Knowledgeview";
import Memo from "./pages/Memo/Memo";
import MemoEdit from "./pages/Memo/MemoEdit";
import LandingPage from "./pages/Support_System/LandingPages/LandingPage";
import ActiveList from "./pages/Support_System/UserPage/Tikects/ActiveTicket";
import CreateTicket from "./pages/Support_System/UserPage/Tikects/CreateTicket";
import CloseTicket from "./pages/Support_System/UserPage/Tikects/CloseTickt";
import ChatPage from "./pages/Chat/Newchatpage";
import AuthorizationProvider from "./hooks/Authorize";
import ThemeContextProvider, { useTheme } from "./style/theme";
import CreateOrganization from "./pages/Organization/CreateOrganization";
import ListOrganization from "./pages/Organization/ListOrganization";
import { setCookie } from "./utilities/cookies";
import OnBoarding from "./pages/OnBoarding/OnBoarding";

import Theme from "./pages/admin/Theme";
import Ticket from "./pages/admin/Ticket";
import ChatSetting from "./pages/admin/Chat";
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
import ViewProject from "./pages/Projects/ViewProject";
import Newreceivedapplication from "./pages/ReceivedApp/Newreceivedapplication";
import Newawardpage from "./pages/Award/Newawardpage";
import RootContainer from "./careers/globals/Root";
import CareerHome from "./careers/pages/home";
import ApplyForJob from "./careers/pages/ApplyForJob";
import JobDetails from "./careers/jobRolepages/jobs";
import { RecoilRoot } from "recoil";
import ErrorPage from "./careers/erropage/ErrorPage";
import Docs from "./pages/Docs/Docs";
import Layout from "./Layout";


const App = () => {
  const location = useLocation();
  const [ careerUser , setCareerUser] =  useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const data = {
      amount: queryParams.get("amount"),
      period: queryParams.get("period"),
      theme: queryParams.get("theme"),
    };

    if (data.amount !== null || data.period !== null) {
      localStorage.setItem("planData", JSON.stringify(data));
    }
  }, []);

  if (location.pathname.startsWith('/career')){
    return (
      <RecoilRoot>
        <RootContainer careerUser={careerUser} setCareerUser={setCareerUser} >
           <Routes>
          <Route path='/career/:organization'>
          <Route index element={<CareerHome />} />
          <Route path='apply-for-job/:id' element={<ApplyForJob setCareerUser={setCareerUser} />} />
          <Route path='job/:id' element={<JobDetails />} />
          </Route>
          <Route path='/career/404' element={<ErrorPage />} />
          </Routes>
      </RootContainer>
      </RecoilRoot>
    );
  }

  // if (shouldHideHeader) {
  //   return (
  //     <ThemeContextProvider>
  //       <AuthorizationProvider>
  //         <Routes>
  //           <Route path="/walkover" element={<WalkoverHeader />} />
  //           <Route path="/checkout" element={<OnBoarding />} />
  //           <Route
  //             path="/createOrganization"
  //             element={<CreateOrganization />}
  //           />
  //           <Route path="/listOrganization" element={<ListOrganization />} />
  //         </Routes>
  //       </AuthorizationProvider>
  //     </ThemeContextProvider>
  //   );
  // }

  return (
    <>
      <Header>
        <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="joblisting" element={<JobListingHome />} />
          <Route path="department" element={<DeptHome />} />
          <Route path="interviewquestions" element={<InterviewHome />} />
          <Route
            path="receivedapplications"
            element={<Newreceivedapplication />}
          />
          <Route
            path="new/receivedapplications"
            element={<Newreceivedapplication />}
          />

          <Route path="showmore:id" element={<ShowMoreHome />} />
          <Route path="joblisting/edit" element={<EditHome />} />
          <Route path="jobApplicationDetail">
            <Route path=":id" element={<JobApplicationDetail />} />
            <Route path="offer-letter/:id" element={<OfferLetter />} />
            <Route path="agreements/:id" element={<Agreements />} />
          </Route>

          <Route
            path="showmore:id/sendofferletter"
            element={<SendOfferHome />}
          />
          <Route path="showmore:id/offerletter" element={<OfferHome />} />

          <Route
            path="showmore:id/sendagreement"
            element={<AgreementHome />}
          />

          <Route path="noticeboard" element={<NoticeHome />} />
          <Route path="apps" element={<Apps />} />
          <Route path="docs" element={<Docs />} />
          <Route path="expenses" element={<ExpensesHome />} />
          <Route path="award" element={<Newawardpage />} />
          <Route path="holidays" element={<HolidayHome />} />

          <Route path="addpayroll" element={<AddPayrollHome />} />
          <Route path="addpayrolls" element={<MorePayrollHome />} />
          <Route path="editpayroll" element={<EditPayrollHome />} />
          <Route path="editpayrolls" element={<MoreEditPayrollHome />} />
          <Route path="employeesalary" element={<SalaryHome />} />

          <Route path="employees" element={<EmployeeHome />} />
          <Route path="performance/:id" element={<PerformanceHome />} />
          <Route path="viewemployee/:id" element={<EmpDetailsHome />} />

          <Route path="attendance" element={<AttendHome />} />
          <Route path="attendanceview" element={<AttendViewHome />} />
          <Route path="leavesettings" element={<LeaveSettingsHome />} />
          <Route path="leaveapplication" element={<LeaveAppHome />} />
          <Route path="leaveapplication/view" element={<LeaveViewHome />} />

          <Route path="rulesandregulations" element={<RuleAndRegulations />} />

          <Route path="dashboardproject" element={<Dashboard />} />
          <Route path="projectlist" element={<ProjectList />} />
          <Route path="newproject" element={<NewProject />} />
          <Route path="overTime" element={<OverTime />} />

          <Route path="overviewcalender" element={<OverTime />} />
          <Route path="viewproject" element={<ViewProject />} />

          <Route path="support/ticketlist" element={<TicketList />} />
          <Route path="support/activeticket" element={<ActiveList />} />
          <Route path="support/createtiket" element={<CreateTicket />} />
          <Route path="support/closeticket" element={<CloseTicket />} />
          <Route path="support/profile" element={<Profile />} />
          <Route path="support/Dashboard" element={<DashBoard />} />
          <Route path="support/landing" element={<LandingPage />} />
          <Route path="support/knowledgepage" element={<Knowledgepage />} />
          <Route path="support/knowledgeview" element={<Knowledgeview />} />
          <Route path="memo" element={<Memo />} />
          <Route path="memoEdit" element={<MemoEdit />} />
          <Route path="chat" element={<ChatPage />} />

          <Route path="generalsetting" element={<Generalsettinghome />} />
          <Route path="rollaccess" element={<Rollaccess />} />
          <Route path="apisetting" element={<Apisetting />} />


          <Route path="walkover" element={<WalkoverHeader />} />
          <Route path="checkout" element={<OnBoarding />} />
          <Route path="createOrganization"  element={<CreateOrganization />} />
          <Route path="listOrganization" element={<ListOrganization />} />
          </Route>
        </Routes>
      </Header>

      {/* <Footer /> */}
    </>
  );
};

export default App;
