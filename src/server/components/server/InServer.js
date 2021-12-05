// Fonctionnalité // 
import React, { } from 'react'
import Sidebar from '../UI/Sidebar/Sidebar'
import ChannelList from '../channel/list/ChannelList'
import ReactGuy from './assets/openchannel.png'
import 'firebase/compat/auth';

const InServer = () => { 
    let french = new Audio("/frenchguy.mp3")
    const frenchguy = () => {
      french.play()
    }

    let channel = new Audio("/channel.mp3")
    const channelaudioo = () => {
      channel.play()
    }

    return (

<>
<Sidebar/>
<ChannelList/>

<div style={{backgroundColor: '#36393f'}} class="h-screen">
<center>

<img onClick={frenchguy} style={{cursor: 'pointer'}} src={ReactGuy}/>
<p onClick={channelaudioo} style={{ top: '30px', fontSize: '36px', color: '#F6F6F6', fontFamily: 'Poppins', cursor: 'pointer'}} > Open a channel ! </p>

</center>
</div>
</>
);
};


export default InServer;
