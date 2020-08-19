import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";

export const Login = () => {
  return (
    <div className="loginWrapper">
      {/* carrousel */}
      <section className="mainTitle">Invision</section>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="create" element={<LoginCreate />} />
      </Routes>
    </div>
  );
};

export default Login;
