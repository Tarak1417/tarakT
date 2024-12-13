import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';

const Layout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const subscriptionId = localStorage.getItem("subscriptionId");
    const path = location.pathname;

    // Paths where the header should be hidden
    const hideHeaderPaths = [
        "/walkover",
        "/checkout",
        "/createOrganization",
        "/listOrganization",
    ];

    // Check if the path is "/EditOrganization" or starts with it (dynamic segments)
    const isEditOrganization = path.startsWith("/EditOrganization");

    // Determine if the header should be hidden
    const shouldHideHeader = hideHeaderPaths.includes(path) || isEditOrganization;

    useEffect(() => {
        // Navigate to "/listOrganization" if subscriptionId exists and the path is "/walkover" or "/checkout"
        if (subscriptionId && (path === "/walkover" || path === "/checkout")) {
            navigate("/listOrganization");
        }
    }, [subscriptionId, path, navigate]);

    return (
        <>
            {shouldHideHeader ? (
                <Outlet />
            ) : (
                <>
                    <Navbar>
                    <Outlet />
                    </Navbar>
                </>
            )}
        </>
    );
};

export default Layout;
