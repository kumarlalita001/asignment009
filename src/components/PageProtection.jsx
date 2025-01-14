import React, { useEffect } from "react";
import { errorToast } from "../utils/Toast";

const PageProtection = () => {
  useEffect(() => {
    // comments for better readability by lalita kumar mohanty
    // why the events are in useEffect because we want to add event listeners when the component mounts and remove them when the component unmounts

    // mouse movement
    const handleMouseMove = (event) => {
      console.log(event, "Event");
      if (event.clientY < 10) {
        errorToast("Please do not leave this page!");
      }
    };

    // Detect tab focus/blur
    const handleVisibilityChange = () => {
      console.log(document, "\n\n\n", document.hidden, "Visibility Change");

      if (document.hidden) {
        errorToast("Please do not switch tabs!");
        window.focus();
      }
    };

    // Disable right-click
    const disableRightClick = (event) => {
      event.preventDefault();
      errorToast("Right-click is disabled on this page.");
      window.close();
    };

    // Disable copy functionality
    const disableCopy = (event) => {
      event.preventDefault();
      errorToast("Copying is disabled on this page.");
    };

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("copy", disableCopy);

    // const close Tab

    
    
    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("copy", disableCopy);
     
    };
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-bold">
        <span className="text-red-400">I</span>{" "}
        <span className="text-green-400">am</span>{" "}
        <span className="text-blue-400">Lalita</span>{" "}
        <span className="text-yellow-400">Kumar</span>{" "}
        <span className="text-purple-400">Mohanty</span>
      </h1>
    </div>
  );
};

export default PageProtection;
