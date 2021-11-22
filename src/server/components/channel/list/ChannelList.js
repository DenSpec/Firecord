// Fonctionnalité
import React, { } from 'react'
import { BsPlus } from 'react-icons/bs';
import { RiSettings3Fill } from "react-icons/ri";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore"
import 'firebase/compat/auth';
import { auth } from "../../../../auth/backend/database"
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectServerId } from "../../../../store/ServerSlice";
import ChannelShow from '../show/ChannelShow'

const ChannelList = ({serverName}) => { 
  const db = firebase.firestore()
  const [server] = useCollection(db.collection("server"));
  const serverId = useSelector(selectServerId);
  const [user] = useAuthState(auth)
  const [channel] = useCollection(
    serverId &&
    db
    .collection("server")
    .doc(serverId)
    .collection("channel")
    .orderBy("timestamp", "asc")
    );
/* Le prompt correspond comme un input. Si il a bien 
  complèté, il va créé une nouvelle collection */
  
  const handleAddChannel = () => {
      const channelName = prompt("Le nom de votre channel: ")
      if (channelName) {
        db.collection("server").doc(serverId).collection("channel").add({
          channelName: channelName,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
      }
    };

  return (


<>
<div style={{width: '240px', left: '60px', backgroundColor: '#2f3136'}} class="fixed h-screen flex flex-col min-w-max">

<h2 className="flex text-white font-bold text-sm items-center justify-between border-b border-gray-800 p-4 hover:bg-[#34373C] cursor-pointer">
Test
            <RiSettings3Fill class="cursor-pointer hover:text-green-500 m-2" style={{float: 'right'}} size={20}/>

          </h2>
<div>  
<h2 style={{fontSize: "20px", textAlign: 'center'}} class="text-white"> Main <BsPlus class="cursor-pointer  hover:text-green-500" onClick={handleAddChannel} style={{float: 'right'}} size={32}/> </h2>
{channel?.docs.map((doc) => (
  <ChannelShow
  key={doc.id}
  id={doc.id}
  channelName={doc.data().channelName}
  />
))}

</div>


</div>
</>

);
};


export default ChannelList;
