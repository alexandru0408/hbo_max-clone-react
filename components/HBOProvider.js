import React, { useContext, useState } from "react";

export const StateContext = React.createContext();

export function useStateContext() {
  return useContext(StateContext);
}

export function HBOProvider({ children }) {
  const [user, setUser] = useState("");
  const defaultUserImg =
    "https://images.generated.photos/B7CJLWXHEhr73EmhhiWyTK-WT39VwobNNqwknL-vwUg/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA5/NzY1NDcuanBn.jpg";
  const createUserAction = (e) => {
    setUser(e.target.value);
    console.log("user", user);
  };
  return (
    <StateContext.Provider
      value={{
        user,
        createUserAction,
        defaultUserImg,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
