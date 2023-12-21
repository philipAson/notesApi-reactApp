import "./App.css";
import LoggedIn from "./Components/LoggedIn";
import Login from "./Components/Login";
import UserPage from "./Components/UserPage";
import { useSelector } from "react-redux";
import { HashRouter as Router } from "react-router-dom";

function App() {

  const loggedIn = useSelector( state => state.loggedIn)

  return <div className="App">
    {loggedIn ? <Router><LoggedIn/></Router> : <Login />}
    </div>;
}

export default App;
