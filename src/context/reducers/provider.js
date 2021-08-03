import React, {createContext, useReducer} from 'react';
import auth from './auth';
import AuthInitialState from '../initialStates/AuthState';
import ContactsInitialState from '../initialStates/ContactsState';
import contacts from './contacts';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, AuthInitialState);
  const [contactsState, contactsDispatch] = useReducer(
    contacts,
    ContactsInitialState,
  );
  return (
    <GlobalContext.Provider
      value={{authState, contactsState, authDispatch, contactsDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
