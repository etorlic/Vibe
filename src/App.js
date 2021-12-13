import "./App.css"
import { SignIn, SignOut, useAuthentication } from "./services/authService.js"
import VibeAppBar from "./Components/VibeAppBar"
import { useEffect, useState } from "react"
import Welcome from "./Components/Welcome"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { db } from "./firebaseConfig"
import { AddUserInfo } from "./services/profileService"
import DisplayMovie from "./Components/DisplayMovie"
import EditMovie from "./Components/EditMovie"
import EditGenre from "./Components/EditGenre"

const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function (initial, item) {
    if (item) {
      var parts = item.split("=")
      initial[parts[0]] = decodeURIComponent(parts[1])
    }
    return initial
  }, {})

export default function App() {
  const user = useAuthentication()
  useEffect(() => {
    if (user) {
      getDoc(doc(db, "Users", user.uid))
        .then(doc => {
          if (doc.exists()) {
            console.log("Document data:", doc.data())
          } else {
            AddUserInfo(user.displayName, [], user.uid)
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [user])

  return (
    <>
      <Router>
        {!user ? (
          <VibeAppBar loggedIn={false} login={SignIn} logout={SignOut} />
        ) : (
          <VibeAppBar loggedIn={true} login={SignIn} logout={SignOut} />
        )}
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/home" component={Welcome} />

          {user ? <Route path="/DisplayMovie" component={DisplayMovie} /> : null}
          {user ? <Route path="/EditGenre" component={EditGenre} /> : null}
          {user ? <Route path="/EditMovie" component={EditMovie} /> : null}
          {user ? <Route path="/About" component={null} /> : null}
        </Switch>
      </Router>
    </>
  )
}
