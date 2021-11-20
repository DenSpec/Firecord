// Fonctionnalité 
import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core'
import { Thanos } from "react-thanos";
import Alert from '@material-ui/lab/Alert';
import '../server/components/home.css'
import ReactDOM from "react-dom";
// Easter Eggs
import banana from './assets/banana.gif'
import Popup from "reactjs-popup"
// Affichage

const NotFound = () => {

  // Easter-Eggs
  let audio = new Audio("/banana-audio.mp3")
  const start = () => {
    audio.play()
  }


  return (

<>
<center>
      <div className="NotFound">
    <p className="logo">cool.chat</p>
    <h1 style={{ color: '#EFEE9D' }}>Oooops ! Pourquoi est tu là ?</h1>
    <h3 style={{ color: '#EFEE9D' }}> Je sais que c'est une situation compliqué pour toi <br></br> alors pour te reconforter, je te donne une banane perdu.</h3>

    <button onClick={start} style={{ backgroundColor: 'transparent', backgroundRepeat: 'no-repeat', border: 'none', cursor: 'pointer', overflow: 'hidden', outline: 'none'}}>
    <img style={{ position: 'right', width: '250px'}} src={banana} alt="my image"/>
    </button>
     <p>
       </p>
    <Link to="/" style={{ textDecoration: 'none' }}>
    <Button variant="contained" style={{color: 'white', backgroundColor: '#FBC687', fontFamily: 'Poppins'}}> Je reviens à la maison en disant merci pour le reconfertemeent </Button>
    </Link>
    <h5 style={{ position: 'absolute', right: '10px', bottom: '10px'}}> Manger de la banane est bien pour la santé, mangez-en  </h5>

    </div>
    </center>
</>
  )
}

export default NotFound;