import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";

export const LoginCreate = () => {
  const fullName = useForm();
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
    <section className="signUp-wrap">
      <h1 className="title">Getting Started</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Full Name" type="text" name="fullName" {...fullName} />
        <Input
          label="Users name or Email"
          type="text"
          name="username"
          {...username}
        />
        <Input
          label="Create Password"
          type="password"
          name="password"
          {...password}
        />

        <Button>Sign Up</Button>
      </form>
      <a>or</a>
      <section>
        New <b>Invision</b>?
      </section>
      <Link to="/login/">Log in</Link>{" "}
    </section>
  );
};

export default LoginCreate;
