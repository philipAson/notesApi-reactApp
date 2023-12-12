import React from "react";
import {RiDeleteBin2Line, RiEditFill} from "react-icons/ri";

const NoteListObject = (props) => {
  return (
    <div className="listObject" id="noteListObject">
      <div className="listObjectInfo">
        <h3>Title:</h3>
        <p>created at:</p>
      </div>
      <div className="listObjectButtons">
        <button><RiEditFill/></button>
        <button><RiDeleteBin2Line/></button>
      </div>
    </div>
  );
};

export default NoteListObject;
