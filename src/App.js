import "./App.css";
import { SignIn, SignOut, useAuthentication } from "./services/authService.js";
import ProfileCard from "./Components/ProfileCard";
import LoginToSpotify from "./Components/LoginToSpotify";
import VibeAppBar from "./Components/VibeAppBar";
import CreatePlaylist from "./Components/CreatePlaylist";
import { useState } from "react";

export default function App() {
  const user = useAuthentication();
  const [creating, setCreating] = useState(false);

  return (
    <div className="App">
      {!user ? (
        <VibeAppBar loggedIn={false} login={SignIn} logout={SignOut} setCreating={setCreating} />
      ) : (
        <VibeAppBar loggedIn={true} login={SignIn} logout={SignOut} setCreating={setCreating} />
      )}

      {creating ? (
        <CreatePlaylist />
      ) : (
        <></>
      )}
    </div>
  );
}
