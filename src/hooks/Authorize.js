import React, { createContext, useContext, useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { env, handleAxiosError } from '../utilities/function';
//import axios from 'axios';
import { useMessage } from '../components/Header';

const authorizeContext = createContext();

const AuthorizationProvider = ({ children }) => {
    const [content, setContent] = useState(<Loading message='Please wait, logging you in...' />);
    const [user, setUser] = useState({});
    const { showError } = useMessage();

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
            try {
                // Simulate fetching user data from server
                const dummyUser = { id: 123, name: 'Test', email: 'test@test.com', role: 'user' };
                setUser(dummyUser);
                authorize(true, setUser => setUser(dummyUser));
            } catch (err) {
                console.log(err);
                handleAxiosError(err, showError);
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

export default AuthorizationProvider;
export { useAuthorize, useUser, useSetUser, useSetContent };
