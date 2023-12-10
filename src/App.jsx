import { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import UserPage from "./Components/UserPage";
import { useSelector } from "react-redux";

function App() {

  const loggedIn = useSelector( state => state.loggedIn)

  return <div className="App">
    {loggedIn ? <UserPage /> : <Login />}
    </div>;
}

export default App;
