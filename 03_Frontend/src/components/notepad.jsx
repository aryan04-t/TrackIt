import React, { useEffect, useState, useRef } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import '../assets/css/notepad.css';

import Navbar from './navbar.jsx';

import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";

import { motion } from "framer-motion"



function Notepad() {
  
  const [allNotes, setAllNotes] = useState([]);
  
  useEffect( () =>{
  
    let email = localStorage.getItem('email'); 
    let isLoggedIn = localStorage.getItem('isLoggedIn'); 
    
    if(isLoggedIn === 'true'){ 
      axios.get(`http://localhost:3000/getAllNotes/${email}/${isLoggedIn}`)
      .then((res) => {
        setAllNotes(res.data.notes); 
        console.log(allNotes);
      })
      .catch((err) => console.log(err)); 
    }
    else{
      navigate('/signup');
    }
  
  }, [])


  const deleteNote = (id) => {

    let email = localStorage.getItem('email'); 
    let isLoggedIn = localStorage.getItem('isLoggedIn'); 

    if(isLoggedIn == 'true'){
      axios.delete(`http://localhost:3000/deleteNote/${id}/${email}/${isLoggedIn}`)
      .then( (res) => {
        if(res.status === 200){
          window.location.reload();
        }
      })
      .catch( (err) => {
        console.log(err); 
      });
    }
    else{
      navigate('/signup');
    }

  }


  const foregroundRef = useRef(null);


  return (
    
    <>

        <Navbar /> 

        <div id="notepad-container">
        
          <div id="background-text"> Notepad </div>

          <div ref={foregroundRef} id="foreground" className='user-select-none'>

            {allNotes.length !== 0 ? 
            (

              allNotes.map( (currNote, key) => {

                return(
                  <motion.div drag dragConstraints={foregroundRef} whileDrag={{scale: 1.2}} className='note-card' key={key}>
                  
                    <div id="note-heading"> {currNote.notepadHeading} </div>
                    <div id="note-content"> {currNote.notepadContent} </div>

                    <button id="open-button">
                      <FaEye id="eye-icon"/>  
                    </button>

                    <button id="edit-button">
                      <MdEdit id="edit-icon"/>  
                    </button>
                    
                    <button id="delete-button" onClick={ (e) => { deleteNote(currNote._id) } }>
                      <MdDelete id="delete-icon" />
                    </button>

                  <div id="note-card-footer"></div>

                </motion.div>
                );

              })

            ) : null}

          </div>    

          <NavLink to="/createNotepad">
              <button id="add-notepad-button">
                  Add Notes
              </button>
          </NavLink>
      
        </div>
    </>
  
  )
}

export default Notepad