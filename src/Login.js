import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { auth } from "./Firebase";
import "./Login.css";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const signIn = (e) => {
    e.preventDefault();

    //fancy firebase login shiiiii...
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    //fancy firebase register shiiiiii...
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //Successfully created new user
        console.log(auth);
        if (auth) {
          //this forces a re-direct in the browser
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=" "
        />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>

        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing in you agree to the amazon FAKE CLONE Conditions of Use &
          Sale. Please See our privacy notice, Cookies noticeand our interest
          based ads
        </p>

        <button
          type="submit"
          onClick={register}
          className="login__registerButton"
        >
          Create You Fake Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
