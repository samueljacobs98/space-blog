import { useState, useEffect } from "react";

const useWindowSize = (windowWidth: number): boolean => {
  const [isWindowWider, setIsWindowWider] = useState(
    window.innerWidth >= windowWidth
  );

  const handleResize = () => {
    setIsWindowWider(window.innerWidth >= windowWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return isWindowWider;
};

export default useWindowSize;
