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
    <section className="signIn-wrap animeLeft grid-6">
      <section className="mainTitle">Invision</section>
      <h1 className="title">Welcome to Invision</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input
          label="User name or Email"
          type="text"
          name="username"
          {...username}
        />
        <Input label="Password" type="password" name="password" {...password} />
        <a>Forgot password?</a>
        <br />
        <Button>Sign In</Button>
      </form>
      <a>or</a>
      <div className="bottomText grid-6">
        <section style={{ marginRight: "2px" }}>
          New <b>Invision</b>?
        </section>
        <Link to="/login/create" className="linkText">
          {" "}
          Create Account
        </Link>{" "}
      </div>
    </section>
  );
};
export default LoginForm;
