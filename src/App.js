import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './utilities/axios';

import Header from './components/Header';
import Home from './pages/Home';
import JobListingHome from './pages/JobListing/JobListingHome';
import ReceivedApp from './pages/ReceivedApp/ReceivedApp';

const App = () => {
    return (
        <Header>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/joblisting' element={<JobListingHome/>} />
                <Route path='/receivedapplications' element={<ReceivedApp/>} />

            </Routes>
        </Header>
    );
};

export default App;
