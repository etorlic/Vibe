import "./App.css";
import { SignIn, SignOut, useAuthentication } from "./services/authService.js";
import ProfileCard from "./Components/ProfileCard";
import LoginToSpotify from "./Components/LoginToSpotify";
import VibeAppBar from "./Components/VibeAppBar";
import CreatePlaylist from "./Components/CreatePlaylist";
import { useEffect, useState } from "react";

export default function App() {
  const user = useAuthentication();
  const [currentTab, setCurrentTab] = useState("Home");
  useEffect( () =>
    console.log(currentTab),
    [currentTab]
  )

  return (
    <div className="App">
      {!user ? (
        <VibeAppBar loggedIn={false} login={SignIn} logout={SignOut} setCurrentTab={setCurrentTab} />
      ) : (
        <VibeAppBar loggedIn={true} login={SignIn} logout={SignOut} setCurrentTab={setCurrentTab} />
      )}

      {(currentTab == useState("Create")) ? (
        <CreatePlaylist />
      ) : (
        <div></div>
      )}
    </div>
  );
}
