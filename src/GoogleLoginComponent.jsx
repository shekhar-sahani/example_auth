import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import "./App.css";

function GoogleLoginComponent() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (credentialResponse) => {
    try {
      // Decode the Google token to get user details
      const decodedToken = jwtDecode(credentialResponse.credential);
      console.log("Decoded Token:", decodedToken);

      // Set the user details in state
      setUser({
        name: decodedToken.name,
        email: decodedToken.email,
        picture: decodedToken.picture,
      });
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  };

  const handleLogout = () => {
    googleLogout(); // This clears Google's session
    setUser(null); // Clear the user state
  };

  return (
    <div>
      {!user ? (
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={() => {
            console.error("Login Failed");
          }}
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

export default GoogleLoginComponent;
