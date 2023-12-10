import React from 'react'
import { useSelector } from 'react-redux'

const UserNotes = () => {

    const userToken = useSelector(state => state.user.token);


  return (
    <div className='list' id='userNotesList'>
        notes name 1 <br/>
        notes name 2 <br/>
        Token: <br/> <br/>
        {userToken}
    </div>
  )
}

export default UserNotes