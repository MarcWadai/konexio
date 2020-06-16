import React, { createContext } from 'react';

const defaultValue = {
    currentUser: {},
    error: null,
    setUser: () => {},
    setError: () => { }
}

export const UserContext = createContext(defaultValue);

export const withUser = Component => props => (
    <UserContext.Consumer>
        {store => <Component {...props} {...store} />}
    </UserContext.Consumer>
)

const UserProvider = (props) => {
    return (
        <UserContext.Provider value={{...props}}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserProvider;