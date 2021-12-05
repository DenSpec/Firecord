// Fonctionnalité // 
import React from 'react'
import Sidebar from '../../UI/Sidebar/Sidebar'
import ChannelList from '../list/ChannelList'
import ChannelChat from '../chat/ChannelChat'
/* C'est une simple fonction pour pouvoir regroupé tous les éléments. */
const InChannel = () => { 
    return (

<>

<Sidebar/>
<ChannelList/>
<ChannelChat/>

</>
);
};


export default InChannel;
