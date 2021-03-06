import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);
  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    }
  };

  const sendResetEmail = event => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => {setEmailHasBeenSent(false)}, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };


  return (
    <div className="sign">
      <center><h1>Reset your Password</h1></center>
      <div>
        <form action="">
          {emailHasBeenSent && (
            <div>
              An email has been sent to you!
            </div>
          )}
          {error !== null && (
            <div>
              {error}
            </div>
          )}
          <label htmlFor="userEmail">
            Email:
          </label>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            value={email}
            placeholder="Input your email"
            onChange={onChangeHandler}

          />
          <br/><br/>
          <button onClick={() => sendResetEmail()}
          className="signNormal"
          >
            Send me a reset link
          </button>
        </form>
        <br/>
        <center>
        <Link
         to ="/"

        >
          &larr; back to sign in page
        </Link>
        </center>
      </div>
    </div>
  );
};
export default PasswordReset;