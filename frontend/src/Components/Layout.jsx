import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <div>{children}</div>;
};

export default Layout;
