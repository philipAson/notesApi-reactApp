import { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import UserPage from "./Components/UserPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return <div className="App">
    {loggedIn ? <UserPage /> : <Login />}
    </div>;
}

export default App;
