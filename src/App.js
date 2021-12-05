import "./App.css";
import { SignIn, SignOut, useAuthentication } from "./services/authService.js";
import ProfileCard from "./Components/ProfileCard";
import LoginToSpotify from "./Components/LoginToSpotify";
import VibeAppBar from "./Components/VibeAppBar";

export default function App() {
  const user = useAuthentication();

  return (
    <div className="App">
      {!user ? (
        <VibeAppBar loggedIn={false} login={SignIn} logout={SignOut} />
      ) : (
        <VibeAppBar loggedIn={true} login={SignIn} logout={SignOut} />
      )}
    </div>
  );
}
