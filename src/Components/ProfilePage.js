import React, { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";
import { auth } from "../firebase";

const ProfilePage = () => {
  const user = useContext(UserContext);
  const { photoURL, displayName, email } = user;

  return (
    <div className="sign">
        <div
          style={{
            background: `url(${photoURL || 'https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'})  no-repeat center center`,
            backgroundSize: "cover",
            height: "200px",
            width: "200px",
            marginTop:'20px',
            margin:'auto'
          }}
        ></div>
        <center>
        <h2>{displayName}</h2>
        </center>
      <button style={{width:'40%', marginLeft:'30%'}} className="signGoogle" onClick = {() => {auth.signOut()}}>Sign out</button>
    </div>
  ) 
};
export default ProfilePage;