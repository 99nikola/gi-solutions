"use client";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
export const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setShowButton(scrollPosition > 500);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <Button
      className={`fixed bg-primary text-white mr-7 w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] box-content  rounded-full right-10 bottom-28 hover:bg-primary ${
        showButton ? "visible" : "invisible"
      }`}
      onClick={handleScrollToTop}
    >
      <ArrowUpwardIcon className="text-5xl" />
    </Button>
  );
};
