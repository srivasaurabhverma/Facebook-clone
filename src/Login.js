import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./Stateprovider";
import { actionTypes } from "./Reducer";

function Login() {
  const [state, dispatch] = useStateValue();
   
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
          dispatch({
              type:actionTypes.SET_USER,
              user:res.user,
          })
      })
      .catch((err) => {
        alert(err.massage);
      });
  };
  return (
    <div className="Login">
      <div className="Login_logo">
        <img
          src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
          alt=""
        />
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
