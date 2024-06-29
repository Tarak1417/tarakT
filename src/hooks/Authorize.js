import React, { createContext, useContext, useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { env } from '../utilities/function';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setCookie } from '../utilities/cookies';
//import axios from 'axios';
//import { useMessage } from '../components/Header';

const authorizeContext = createContext();

const AuthorizationProvider = ({ children }) => {
    const [content, setContent] = useState(<Loading message='Please wait, logging you in...' />);
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    // const { showError } = useMessage();

    const authorize = async (loggedIn, cb) => {
        if (loggedIn) {
            setContent(children);
        } else {
            const redirectTo =
                env('AUTHENTICATION_CLIENT') +
                '/login?redirectto=' +
                encodeURIComponent(window.location.href);
            setContent(
                <Loading
                    message='Please wait, redirecting you to Clikkle Accounts'
                    redirectTo={redirectTo}
                />
            );
        }
        if (typeof cb === 'function') cb(setUser);
    };

    const checkUserSubscription = async (userId) => {

        let selectedOrg = localStorage.getItem("org");
        if (selectedOrg) {


        } else {
            try {
                const response = await axios.post(`/user/subscription/check`, { userId: userId });
                let data = response.data;
                if (data.success) {
                    await checkOrganization();
                } else {
                    navigate("/walkover");
                }

            } catch (e) {
                console.log("subscription/check Error:", e);
                navigate("/walkover");
            }
        }

    }

    const checkOrganization = async () => {
        let selectedOrg = localStorage.getItem("org");
        if (selectedOrg) {
            try {
                selectedOrg = JSON.parse(selectedOrg);
                const response = await axios.post(`/hr/organization/select`, {
                    organizationId: selectedOrg._id,
                });
                let data = response.data;
                if (!data.success) {
                    navigate("/listOrganization");
                }
            } catch (e) {
                console.log("Error select of Organization", e);
                navigate("/listOrganization");
            }

        } else {
            // navigate("/listOrganization");
        }

    }

    const createSession = async (refreshToken, user) => {
        try {
            const response = await axios.post(`/open/session`, {
                refreshToken, userId :user._id
            });
            let data = response.data;
            if (data.success) {
                setCookie("accessToken", data.token);
                await checkUserSubscription(user.id)
                authorize(true, (setUser) => setUser(user));
            } else {
                authorize(false);
            }
        } catch (e) {
            authorize(false);
        }
    }

    useEffect(() => {
        (async () => {
            // try {
            //     // Simulate fetching user data from server
            //     const dummyUser = { id: 123, name: 'Test', email: 'test@test.com', role: 'user' };
            //     setUser(dummyUser);
            //     authorize(true, setUser => setUser(dummyUser));
            // } catch (err) {
            //     console.log(err);
            //     handleAxiosError(err, showError);
            //     authorize(false);
            // }
            try {
                //  const loggedInUserEmail = getCookie('loggedInUserEmail');
                const queryParameters = new URLSearchParams(window.location.search)
                const userId = queryParameters.get("userId")
                const refreshToken = queryParameters.get("refreshToken")
                console.log(userId);

                if (userId) {
                    var formData = new FormData();
                    formData.append("id", userId);
                    const response = await fetch(
                        "https://accounts.clikkle.com:5000/api/auth/get_user_profile",
                        // "https://api.campaigns.clikkle.com/get_user_profile",
                        // "http://localhost:5000/api/auth/get_user_profile",
                        {
                            method: "POST",
                            body: formData
                        },

                    );

                    if (response.ok) {
                        console.log('user found ...')
                        const responseData = await response.json();
                        let { user } = responseData;
                        user.refreshToken = refreshToken;
                        console.log(user)
                        localStorage.setItem("user", JSON.stringify(user));
                        await createSession(refreshToken ,user );
                        // authorize(true, (setUser) => setUser(user));
                    } else {
                        console.log('user not found')
                    }
                } else if (localStorage.getItem("user")) {
                    let user = JSON.parse(localStorage.getItem("user"));
                       await createSession(user.refreshToken ,user );
                   
                } else {
                    authorize(false);
                }

            } catch (err) {
                console.log(err);
                // handleAxiosError(err, showError);
                authorize(false);
            }
        })();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <authorizeContext.Provider value={{ authorize, setUser, user, setContent }}>
            {content}
        </authorizeContext.Provider>
    );
};

const useAuthorize = () => useContext(authorizeContext).authorize;
const useUser = () => useContext(authorizeContext)?.user;
const useSetUser = () => useContext(authorizeContext).setUser;
const useSetContent = () => useContext(authorizeContext).setContent;
const useEmployees = () => useContext(authorizeContext)?.employees;

export default AuthorizationProvider;
export { useAuthorize, useUser, useSetUser, useSetContent, useEmployees };
