// Fonctionnalité 
import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core'
import { Thanos } from "react-thanos";
import Alert from '@material-ui/lab/Alert';
import ReactDOM from "react-dom";
// Easter Eggs
import banana from './assets/banana.gif'
// Affichage

const NotFound = () => {

  // I'm a banana, banana power ! 🍌
  let audio = new Audio("./banana-audio.mp3")
  const start = () => {
    audio.play()
  }


  return (

<>
<center>
  <p>Not Found, sorry</p>
    <button onClick={start} style={{ backgroundColor: 'transparent', backgroundRepeat: 'no-repeat', border: 'none', cursor: 'pointer', overflow: 'hidden', outline: 'none'}}>
    <img style={{ position: 'right', width: '250px'}} src={banana} alt="banana"/>
    </button>
    </center>
</>
  )
}

export default NotFound;
