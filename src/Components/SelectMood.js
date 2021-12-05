import "./App.css";
import { SignIn, SignOut, useAuthentication } from "./services/authService.js";

export default function App() {
  const user = useAuthentication();

  return (
    <div className="App">
      <header className="App-header">
        <p>VIBE</p>
      </header>
      <body>
        <div className="Sign-in-out-button">
          {!user ? <SignIn /> : <SignOut />}
        </div>
      </body>
    </div>
  );
}
