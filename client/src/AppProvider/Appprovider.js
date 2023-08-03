import { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [homePage, setHomePage] = useState(false);
  const [loginpage, setLoginPage] = useState(false);
  const [contact, setContact] = useState(false);
  return (
    <AppContext.Provider value={{ homePage, setHomePage, loginpage, setLoginPage, contact, setContact }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
