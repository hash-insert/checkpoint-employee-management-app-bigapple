import { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loggedin,setLoggedin] = useState(false);
  return (
    <AppContext.Provider value={{loggedin,setLoggedin}}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
