import React from "react";
import Preloader from "../helper/Preloader";
import ColorInit from "../helper/ColorInit";
import ScrollToTop from "react-scroll-to-top";
import Login from "../components/Login";

const LoginPage = () => {


  return (
    <>
      {/* ColorInit */}
      <ColorInit color={false} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#A56C3B" />

      {/* Preloader */}
      <Preloader />

      {/* Login Component */}
      <Login />

    </>
  );
};

export default LoginPage;
