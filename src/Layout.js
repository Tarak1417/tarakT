// Layout.js
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';

const Layout = () => {
    const location = useLocation();
    const hideHeaderPaths = [
        "/walkover",
        "/checkout",
        "/createOrganization",
        "/listOrganization",
    ]; // Add the paths where you want to hide the header
    let shouldHideHeader = hideHeaderPaths.includes(location.pathname);

    console.log("shouldHideHeader" ,shouldHideHeader)

    return (

        <>
            {shouldHideHeader ?
                <Outlet />
                :
                <Navbar>
                    <Outlet />
                </Navbar>
            }
        </>

    );
};

export default Layout;
