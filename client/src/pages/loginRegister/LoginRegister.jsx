import React, { useState, useEffect } from "react";
import "./loginRegister.scss";

const Card = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isAnimation, setIsAnimation] = useState(false);

  const LoginCardForm = () => (
    <div className="left">
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
  const LoginCardInfo = () => (
    <div className="right">
      <h1>Hello World.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
        alias totam numquam ipsa exercitationem dignissimos, error nam,
        consequatur.
      </p>
      <span>Don't you have an account?</span>
      <button onClick={() => setIsLogin(false)}>Register </button>
    </div>
  );
  const RegisterCardForm = () => (
    <div className="left">
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="text" placeholder="Name" />
        <button>Register</button>
      </form>
    </div>
  );
  const RegisterCardInfo = () => (
    <div className="right">
      <h1>Lama Social.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
        alias totam numquam ipsa exercitationem dignissimos, error nam,
        consequatur.
      </p>
      <span>Do you have an account?</span>
      <button onClick={() => setIsLogin(true)}>Login </button>
    </div>
  );
  return (
    <div className="container">
      <div className={`card sighIn ${isLogin ? "active-sx" : "inactive-sx"}`}>
        <LoginCardForm />
        <LoginCardInfo />
      </div>
      <div className={`card signUp ${isLogin ? "inactive-dx" : "active-dx"}`}>
        <RegisterCardInfo />
        <RegisterCardForm />
      </div>
    </div>
  );
};

export default Card;
