import { useState, useEffect } from "react";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

const SignIn = () => {
  signInWithPopup(auth, new GoogleAuthProvider());
};

const SignOut = () => {
  signOut(auth);
};

function useAuthentication() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null);
    });
  }, []);
  return user;
}

export { SignIn, SignOut, useAuthentication };
