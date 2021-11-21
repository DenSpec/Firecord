// Fonctionnalité // 
import React from 'react'
import 'firebase/compat/auth';
import Sidebar from '../UI/Sidebar/Sidebar'
import ChannelList from './ChannelList'
import ChannelChat from './chat/ChannelChat'

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
