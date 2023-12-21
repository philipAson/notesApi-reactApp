import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../features/loggedIn";
import UserNotes from "./UserNotes";
import { RiAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const UserPage = (props) => {
  const dispatch = useDispatch();
  const logout = () => dispatch(actions.logout());
  const username = useSelector((state) => state.user.username);

  return (
    <div id="userPage">
      <h1>Welcome, {username}</h1>

      <Link to="/NewNote">
        <button>
          <RiAddLine />
        </button>
      </Link>

      <UserNotes />

      <button id="logoutButton" onClick={logout}>
        logout
      </button>
    </div>
  );
};

export default UserPage;
