import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigation } from "react-router-dom";
import { selectSideBar } from "../container/SideBar/SideBarSlice.js";

const TitleBar = () => {
  const sideBar = useSelector(selectSideBar);
  const navigation = useNavigation();
  const location = useLocation();

  const hasPreviousState = location.key !== "default";

  // const hasNextState = ???

  const HandleBackButton = () => {
    navigation.goBack();
  };

  /* const HandleForwardButton = () => {
    navigation.go(+1);
  }; */

  return (
    <div>
      {
        /* hasPreviousState &&  */ <img
          href="C:\Users\Me\Documents\GitHub\reddit\src\back-icon.jpg"
          onClick={HandleBackButton}
          alt="go to previous page"
        />
      }
      {/* {hasNextState && <img href="find a forward image" onClick={HandleForwardButton} alt="go to next visited page" />} */}
    </div>
  );
};

export default TitleBar;
