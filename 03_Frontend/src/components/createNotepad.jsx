import  React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../assets/css/createNotepad.css'

function CreateNotepad() {

    const [notepadHeading, setNotepadHeading] = useState(''); 
    const [notepadContent, setNotepadCotent] = useState(''); 

    const navigate = useNavigate();

    
    const notepadSubmit = (e) => {
        
        console.log(notepadContent);
        console.log(notepadHeading);

        e.preventDefault();

        let email = localStorage.getItem('email'); 
        let isLoggedIn = localStorage.getItem('isLoggedIn'); 

        console.log(notepadHeading, notepadContent);
    
        if(isLoggedIn === 'true'){
            axios.post(`http://localhost:3000/createNotepad/${email}/${isLoggedIn}`, {notepadHeading, notepadContent})
            .then( (res) => {

                console.log(res.status);

                if(res.status === 200){
                    navigate('/notepad');
                }

            })
            .catch(err => console.log(err));
        }
        else{
            navigate('/signup');
        }
    }

  return (
    <div id="create-notepad-form-container" className='user-select-none'>

        <form id="notepad-input-form" onSubmit={notepadSubmit}>

            <div id="heading-container-div">    
                <h1 id="create-notepad-container-heading"> Create New Notepad </h1>
            </div>

            <div id="notepad-creation-form-container">
                
                <div>
                    <label className="notepad-label"> Notepad Name: </label>
                    <input id="notepad-heading-input-field" type='text' placeholder="Give your note's heading here..." onChange = { (e) => setNotepadHeading(e.target.value)} required></input>
                </div>

                <div>
                    <label className="notepad-label">Notepad Content: </label>
                </div>
                <textarea id="notepad-desc-textarea" type='text' placeholder='Type your notes here...' onChange={ (e) => setNotepadCotent(e.target.value)} required></textarea>

                <button id='notepad-submit-button' type='submit' >Submit</button>       
                        
            </div>


        </form>

    </div>
  )
}

export default CreateNotepad