import React from 'react';
import { RiUpload2Line } from 'react-icons/ri';

const CreateNewNote = () => {

  const upploadNewNote = () => {
    
  }

  return (
    <div className='createNewNote'>
      <input id='new-note-title'/>
      <textarea id='new-note-text'/>
      <button><RiUpload2Line/></button>
    </div>
  )
}

export default CreateNewNote