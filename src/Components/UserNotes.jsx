import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import NoteListObject from './NoteListObject';

const UserNotes = () => {

    const [message, setMessage] = useState("");
    const [notes, setNotes] = useState([]);
    const userToken = useSelector(state => state.user.token);

    const getNotesRequest = async () => {

        const url = `https://pcd9bqvn13.execute-api.eu-north-1.amazonaws.com/api/notes`;

        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: 'Bearer ' + userToken,
                }
            });

            if(!response.ok) {
                setMessage(`Error: server ${response.status}`);
                return;
            }

            const responseJson = await response.json();

            if (response.status === 200) {
                setMessage(`fetched user notes successfully ${responseJson.notes}`);
                setNotes(responseJson.notes);

            } else {
                setMessage(`Error: ${responseJson.message}`);
            }
        } catch (error) {
            setMessage(`Error => catch ${error.message}`)
        }
    };

    useEffect(() => {getNotesRequest();}, []);


  return (
    <div className='list' id='userNotesList'>
        <NoteListObject/>
        {notes.map((note, index) => 
            <p key={index}>{note.title}</p>    
        )}
        Token: <br/> <br/>
        {userToken}
    </div>
  )
}

export default UserNotes