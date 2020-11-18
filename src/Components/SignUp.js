import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, generateUserDocument, signInWithGoogle } from "../firebase";

 const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);


  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };


  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {displayName});
      setEmail("");
      setPassword("");
      setDisplayName("");
    }
    catch(error){
      setError('Error Signing up with email and password');
    }
  };

  return (
    <div className='sign'>
      <center><h1>Sign Up</h1></center>
      <div>
        {error !== null && (
          <div className='error'>
            {error}
            <br/><br/>
          </div>
        )}
        <form className="">
          <label htmlFor="displayName">
            Display Name:
          </label>
          <input
            type="text"
            name="displayName"
            value={displayName}
            placeholder="E.g: Faruq"
            id="displayName"
            onChange={event => onChangeHandler(event)}
          />
          <label htmlFor="userEmail" className="block">
            Email:
          </label>
          <input
            type="email"
            name="userEmail"
            value={email}
            placeholder="Your Email"
            id="userEmail"
            onChange={event => onChangeHandler(event)}
          />
          <label htmlFor="userPassword" className="block">
            Password:
          </label>
          <input
            type="password"
            name="userPassword"
            value={password}
            placeholder="Your Password"
            id="userPassword"
            onChange={event => onChangeHandler(event)}
          />
          <br/><br/>
          <button
          className='signNormal'
            onClick={event => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign up
          </button>
        </form>
        <center>or</center>
        <button
        className="signGoogle"
          onClick={() => signInWithGoogle()}
        >
          Sign In with Google
        </button>
        <br/><br/>
        <center>
          Already have an account?{" "}
          <Link to="/">
            Sign in here
          </Link>
        </center>
      </div>
    </div>
  );
};


export default SignUp