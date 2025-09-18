import React, { useState, useContext } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const value = React.useMemo(() => ({ user, setUser }), [user, setUser]);

  return <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
