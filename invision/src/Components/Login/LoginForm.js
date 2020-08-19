import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";

export const LoginForm = () => {
  const username = useForm("email");
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    // Here we would insert the jwt to authentication, but i will just make sure that
    // the fields are not empty.
    if (username.validate() && password.validate()) {
      console.log("User is ok!");
    }
  }

  return (
    <section className="signIn-wrap animeLeft wrapCenter">
      {/* <section className="mainTitle grid-11">Invision</section> */}
      <div className="centerColumn">
        <h1 className="title grid-6">Welcome to Invision</h1>
        <form action="" onSubmit={handleSubmit} className="grid-6">
          <Input
            label="User name or Email"
            type="text"
            name="username"
            {...username}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            {...password}
          />
          <a>Forgot password?</a>
          <br />
          <Button>Sign In</Button>
        </form>
        <div className="centerRow grid-6 hr-wrap">
          <>
            <hr /> <a>Or</a> <hr />
          </>
        </div>
        <Button type="google"> Sign up with Google </Button>
        <div className="bottomText grid-5">
          <section style={{ display: "flex", alignItems: "center" }}>
            New&nbsp;<b>Invision</b>?&nbsp;
            <Link to="/login/create" className="linkText">
              {" "}
              Create Account
            </Link>{" "}
          </section>
        </div>
      </div>
    </section>
  );
};
export default LoginForm;
