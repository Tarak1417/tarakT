import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './utilities/axios';

import Header from './components/Header';
import Home from './pages/Home';
import JobListing from './pages/JobListing/jobListing';

const App = () => {
    return (
        <Header>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/joblisting' element={<JobListing/>} />

            </Routes>
        </Header>
    );
};

export default App;
