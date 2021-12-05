// Fonctionnalité 
import React, { } from 'react'
import 'firebase/compat/auth';
import './components/home.css'
import Sidebar from './components/UI/Sidebar/Sidebar'
import reactaladeen from './assets/aladeen.png'
// Affichage : 
const HomeTest = () => {

let mamy = new Audio("/grandmother.mp3")
const grandmere = () => {
  mamy.play()
}

let aladin = new Audio("/aladeen.mp3")
const aladeen = () => {
  aladin.play()
}

  return (
<>

<div className="flex">

<Sidebar/>

    </div>
    <div style={{backgroundColor: '#36393f'}} class="h-screen">
<center>
  <div style={{cursor: 'pointer'}} onClick={aladeen} >
  <img width="350px" src={reactaladeen}></img>
  </div>
  <div onClick={grandmere}>
  <p style={{ fontSize: '36px', color: '#F6F6F6', fontFamily: 'Poppins', cursor: 'pointer'}} >Open a server !</p>
  </div>
</center>
</div>

</>
  );
};






export default HomeTest
