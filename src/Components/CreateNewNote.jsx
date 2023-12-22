import React, { useState } from "react";
import { RiUpload2Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateNewNote = () => {

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const userToken = useSelector(state => state.user.token);
  const navigate = useNavigate();


  const upploadNewNote = async () => {
    const url = `https://pcd9bqvn13.execute-api.eu-north-1.amazonaws.com/api/notes`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Bearer ' + userToken,
        },
        body: JSON.stringify({
          title: title,
          text: text,
        }),
      });

      if (!response.ok) {
        setErrorMessage(`Err: server returned ${response.status}`);
        return;
      }

      if (response.status === 200) {
        // do something
        navigate("/");
      } else {
        setErrorMessage(`Error: ${response.status}`);
      }
    } catch (error) {
      setErrorMessage(`error in catch: ${error.status}`);
    }

    

    
  };

  return (
    <div className="createNewNote">
      <h1>{errorMessage}</h1>
      <input
        id="new-note-title"
        name="title"
        placeholder="Title:"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea 
        id="new-note-text"
        name="text"
        placeholder="Write note here."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button id="upploadNewNoteButton" onClick={upploadNewNote}>
        New note
        <br/>
        <br/>
        <RiUpload2Line />
      </button>
    </div>
  );
};

export default CreateNewNote;
