import { useEffect, useState } from "react";
import { dateConfig } from "@/constants/dateConfig";

export const useDate = () => {
  const locale = "en-US";
  const [today, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);

  return today.toLocaleString(locale, dateConfig);
};
