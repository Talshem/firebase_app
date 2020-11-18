import './App.css';
import React from 'react';
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import ProfilePage from "./Components/ProfilePage";
import PasswordReset from "./Components/PasswordReset";
import { Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./Providers/UserProvider";

const App = () => {
const user = useContext(UserContext);

  return (
    <div>
      {user ?
            <ProfilePage/>
        :
        <Switch>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/passwordReset">
            <PasswordReset />
          </Route>
          <Route path="/">
            <SignIn />
          </Route>
        </Switch>
      }
    </div>
  );
}

export default App;
