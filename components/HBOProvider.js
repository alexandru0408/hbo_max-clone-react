import React, { useContext, useState } from "react";

export const StateContext = React.createContext();
import ls from "local-storage";

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

  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [watchList, setWatchList] = useState(ls.get("myList"));

  const addToList = (video) => {
    let myList;
    if (ls("myList") !== null) {
      myList = ls.get("myList");
      myList.push(video);
      ls.set("myList", myList);
      setWatchList(myList);
    } else {
      ls.set("myList", [video]);
      setWatchList(ls.get("myList"));
    }
  };

  const removeFromList = (videoId) => {
    let myList = ls("myList");
    myList = myList.filter((item) => item.mediaId != videoId);
    ls.set("myList", myList);
    setWatchList(myList);
  };

  const thumbTypes = ["large-v", "small-v", "large-h", "small-h"];

  return (
    <StateContext.Provider
      value={{
        user,
        createUserAction,
        defaultUserImg,
        sideNavOpen,
        setSideNavOpen,
        accountMenuOpen,
        setAccountMenuOpen,
        searchOpen,
        setSearchOpen,
        thumbTypes,
        addToList,
        removeFromList,
        watchList,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
