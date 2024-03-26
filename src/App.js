import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './utilities/axios';

import Header from './components/Header';
import Home from './pages/Home';

const App = () => {
    return (
        <Header>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </Header>
    );
};

export default App;
