import { useState, useEffect } from "react";

const useBuildDate = () => {
  const [buildDate, setBuildDate] = useState();

  useEffect(() => {
    if (process.env.REACT_APP_BUILD_DATE) {
      const tempDate = new Date(process.env.REACT_APP_BUILD_DATE * 1000);
      const year = tempDate.getFullYear();
      const month = String(tempDate.getMonth() + 1).padStart(2, "0");
      const day = String(tempDate.getDate()).padStart(2, "0");
      const hour = String(tempDate.getHours()).padStart(2, "0");
      const min = String(tempDate.getMinutes()).padStart(2, "0");
      setBuildDate(`${year}/${month}/${day} ${hour}:${min}`);
    }
  }, []);

  return buildDate;
};

export default useBuildDate;
