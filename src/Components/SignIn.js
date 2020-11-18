import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;

          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };


      const signInWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
          setError("Error signing in with password and email!");
          console.error("Error signing in with password and email", error);
        });
      };


  return (
    <div className="sign">
      <center><h1>Sign In</h1></center>
      <div>
      {error !== null && (
          <div className='error'>
            {error}
            <br/><br/>
          </div>
        )}
        <form>
          <label tmlFor="userEmail">
            Email:
          </label>
          <br/>
          <input
            type="email"
            name="userEmail"
            value = {email}
            placeholder="Your Email"
            id="userEmail"
            onChange = {(event) => onChangeHandler(event)}
          />
          <br/>
          <label htmlFor="userPassword">
            Password:
          </label>
          <br/>
          <input
            type="password"
            name="userPassword"
            value = {password}
            placeholder="Your Password"
            id="userPassword"
            onChange = {(event) => onChangeHandler(event)}
          />
          <br/><br/><br/>
          <button className="signNormal" onClick = {(event) => signInWithEmailAndPasswordHandler(event, email, password)}>
            Sign in
          </button>
        </form>
        <center>or</center>
        <button className="signGoogle"
         onClick={() => signInWithGoogle()}>
          Sign in with Google
        </button>
        <br/><br/>
        <center>
          Don't have an account?{" "}
          <Link to="signUp" style={{textDecoration:"none", color:'rgb(90, 90, 211)'}}>
            Sign up here
          </Link>{" "}
          <br /><br/>{" "}
          <Link to="/passwordReset" style={{textDecoration:"none", color:'rgb(90, 90, 211)'}}>
            Forgot Password? 
          </Link>
        </center>
      </div>
    </div>
  );
};
export default SignIn;