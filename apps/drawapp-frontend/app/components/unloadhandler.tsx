
"use client"


import { useEffect } from "react";

export default function  UnLoadHandler() {
   useEffect(() => {
    const isNewSession = !sessionStorage.getItem("sessionStarted");

    if (isNewSession) {
      localStorage.clear();
      sessionStorage.setItem("sessionStarted", "true");
    }
    const handleBeforeUnload = () => {
    }; //marking the tab closing 

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return null;
}
