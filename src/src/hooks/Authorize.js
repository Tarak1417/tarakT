import React, { createContext, useContext, useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { env } from '../utilities/function';
//import axios from 'axios';
//import { useMessage } from '../components/Header';

const authorizeContext = createContext();

const AuthorizationProvider = ({ children }) => {
    const [content, setContent] = useState(<Loading message='Please wait, logging you in...' />);
    const [user, setUser] = useState({});
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
                    console.log(userId);

                    if (userId) {

                        var formData = new FormData();
                        formData.append("id", userId);

                        const response = await fetch(
                            "https://accounts.clikkle.com:5000/api/auth/get_user_profile",
                            // "https://api.campaigns.clikkle.com/get_user_profile",
                            // "http://localhost:8000/get_user_profile",
                            {
                                method: "POST",
                                body: formData
                            },

                        );

                        if (response.ok) {
                            console.log('user found ...')

                            const responseData = await response.json();
                            const { user } = responseData;
                            console.log(user)
                            localStorage.setItem("user", JSON.stringify(user));
                            authorize(true, (setUser) => setUser(user));

                        } else {
                            console.log('user not found')
                        }


                    }else if(localStorage.getItem("user")){
                        let user = JSON.parse(localStorage.getItem("user"));
                        authorize(true, (setUser) => setUser(user)); 
                    } else {
                        authorize(true);
                    }

                } catch (err) {
                    console.log(err);
                    // handleAxiosError(err, showError);
                    authorize(true);
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
export { useAuthorize, useUser, useSetUser, useSetContent,useEmployees };