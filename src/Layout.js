// Layout.js
import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';

const Layout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let subscriptionId = localStorage.getItem("subscriptionId");
    let path = location.pathname
    const hideHeaderPaths = [
        "/walkover",
        "/checkout",
        "/createOrganization",
        "/listOrganization",
    ]; // Add the paths where you want to hide the header
    let shouldHideHeader = hideHeaderPaths.includes(path);

    if(shouldHideHeader){
        if(subscriptionId && (path ==="/walkover" ||path=== "/checkout" )){
            navigate("/listOrganization")
        }
    }else{
        if(!subscriptionId){
            navigate("/walkover")
        }
    }
    // console.log("shouldHideHeader" ,shouldHideHeader)

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
