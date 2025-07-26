import React from "react";
import Preloader from "../helper/Preloader";
import ColorInit from "../helper/ColorInit";
import ScrollToTop from "react-scroll-to-top";
import SignIn from "../components/SignIn";

const SignInPage = () => {


  return (
    <>
      {/* ColorInit */}
      <ColorInit color={false} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#A56C3B" />

      {/* Preloader */}
      <Preloader />

      {/* SignIn Component */}
      <SignIn />

    </>
  );
};

export default SignInPage;
