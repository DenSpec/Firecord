// Fonctionnalité // 
import React, { } from 'react'
import 'firebase/compat/auth';
import '../index.css'
import Sidebar from './components/UI/Sidebar/Sidebar'
import astronaut from './assets/astronaut.gif'
import { FaPoop } from 'react-icons/fa'
// Dans la page server : //
const HomeTest = () => {

  return (
<>

<div className="flex">

<Sidebar/>

    </div>

<center>
  <img width="175px" src={astronaut}></img>
  <p style={{ fontSize: '36px', color: '#F6F6F6'}} >Ouvrez un serveur !</p>
</center>

</>
  );
};






export default HomeTest