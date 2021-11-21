// Fonctionnalité 
import React, { } from 'react'
import 'firebase/compat/auth';
import './components/home.css'
import Sidebar from './components/UI/Sidebar/Sidebar'
import aladeen from './assets/aladeen.png'
// Affichage : 
const HomeTest = () => {

  return (
<>

<div className="flex">

<Sidebar/>

    </div>
    <div style={{backgroundColor: '#36393f'}} class="h-screen">
<center>
  <img width="350px" src={aladeen}></img>
  <p style={{ fontSize: '36px', color: '#F6F6F6', fontFamily: 'Poppins'}} >Open a server !</p>
</center>
</div>

</>
  );
};






export default HomeTest
