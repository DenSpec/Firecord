// Fonctionnalité // 
import React, {useRef} from 'react'
import { DiscordMention, DiscordMessage, DiscordMessages } from '@danktuary/react-discord-message';
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore"
import 'firebase/compat/auth';
import { auth } from "../../../../auth/backend/database"
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectServerId, selectServerName} from "../../../../store/ServerSlice";
import Sidebar from '../../UI/Sidebar/Sidebar'
import ChannelList from '../list/ChannelList'
import ChannelChat from '../chat/ChannelChat'
// Firebase
import { selectChannelId, selectChannelName } from  '../../../../store/ChannelSlice'
const InChannel = () => { 
  const db = firebase.firestore()
  const [server] = useCollection(db.collection("server"));
  const serverId = useSelector(selectServerId);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [user] = useAuthState(auth);
  const inputRef = useRef("");
  const chatRef = useRef(null);
  const [messages] = useCollection(
    channelId &&
      db
      .collection("server")
      .doc(serverId)
      .collection("channel")
      .doc(channelId)
      .collection("messages")
      .orderBy("timestamp", "asc")
  );

  const sendMessage = (e) => {
    e.preventDefault();

    if (inputRef.current.value !== "") {
      db.collection("server")
      .doc(serverId)
      .collection("channel")
      .doc(channelId)
      .collection("messages").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: inputRef.current.value,
        name: user?.displayName,
        photoURL: user?.photoURL,
    });
}
};

    return (

<>
<Sidebar/>
<ChannelList/>
<ChannelChat/>

    </>
);
};


export default InChannel;
