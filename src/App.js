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
            </Routes>
        </Header>
        <Footer/>
        </>
    );
};

export default App;
