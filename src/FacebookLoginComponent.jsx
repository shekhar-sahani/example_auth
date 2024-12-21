import { useState } from "react";
import FacebookLogin from "react-facebook-login";
import "./App.css";

function FacebookLoginComponent() {
  const [user, setUser] = useState(null);

  const responseFacebook = (response) => {
    console.log("response---", response);
    if (response.accessToken) {
      setUser({
        name: response.name,
        email: response.email || "Email not available",
        picture: response.picture.data.url,
      });
    } else {
      console.error("Facebook login failed");
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {!user ? (
        <FacebookLogin
          appId="520015407859382" // Replace with your Facebook App ID
          autoLoad={false}
          fields="name,picture,email" // Use only "name,picture" if email isn't approved
          callback={responseFacebook}
          cssClass="login-btn"
          icon="fa-facebook"
        />
      ) : (
        <div className="user-info">
          <h2>Welcome, {user.name}</h2>
          <p>Email: {user.email}</p>
          <img
            src={user.picture}
            alt={`${user.name}'s profile`}
            className="profile-pic"
          />
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default FacebookLoginComponent;
