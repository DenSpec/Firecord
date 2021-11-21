// Fonctionnalité // 
import React, { } from 'react'
import Sidebar from '../UI/Sidebar/Sidebar'
import ChannelList from '../channel/list/ChannelList'
import ReactGuy from './assets/openchannel.png'
// Firebase
import 'firebase/compat/auth';

const InServer = () => { 
    return (

<>
<Sidebar/>
<ChannelList
/>

<center>
<img src={ReactGuy}/>
<p style={{ top: '30px', fontSize: '36px', color: '#F6F6F6'}} >Ouvrez un channel ! </p>
</center>
</>
);
};


export default InServer;
