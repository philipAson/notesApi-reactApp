import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../features/loggedIn';
import UserNotes from './UserNotes';


const UserPage = (props) => {

    const dispatch = useDispatch();
    const logout = () => dispatch(actions.logout());
    const username = useSelector(state => state.user.username);

  return (
    
    <div id='userPage'>
        <h1>Welcome, {username}</h1>
        <UserNotes/>
        <button id='logoutButton' onClick={logout}>logout</button>
    </div>
    // <div>welcome {props.user.name}</div>
  )
}

export default UserPage