import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigation } from "react-router-dom";

const TitleBar = () => {
  const navigation = useNavigation();
  const location = useLocation();

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
