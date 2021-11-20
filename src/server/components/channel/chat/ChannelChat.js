// Fonctionnalité // 
import React, {useRef, useEffect, useState} from 'react'
import { DiscordMention, DiscordMessage, DiscordMessages } from '@danktuary/react-discord-message';
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore"
import 'firebase/compat/auth';
import { auth } from "../../../../auth/backend/database"
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectServerId, selectServerName} from "../../../../store/ServerSlice";
import {render} from 'react-dom';
import ShowMessage from './ShowMessage';
import { HiPlusCircle, HiHashtag } from "react-icons/hi";

// Firebase
import { selectChannelId, selectChannelName } from  '../../../../store/ChannelSlice'
const ChannelChat = () => { 
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


  const scrollToBottom = () => {
    chatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

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
inputRef.current.value = "";
scrollToBottom();
};




    return (

<>
<div style={{width: '4440px', left: '308px', backgroundColor: '#2C2F33'}} class="fixed h-screen flex flex-col min-w-max">
<div className="flex flex-col h-screen">
      <header className="flex items-center justify-between space-x-5 border-b border-gray-800 p-4 -mt-1">
        <div className="flex items-center space-x-1">
          <HiHashtag size="20px" style={{color: 'white'}} className="h-6 text-[#72767d]" />
          <h4 className="text-white font-semibold">{channelName}</h4>
        </div>
  </header>
<main style={{flexGrow: '1', overflow: 'scroll', overflowX: 'hidden'}}>
{messages?.docs.map((doc) => {
          const { message, timestamp, name, photoURL, email } = doc.data();

          return (
            <ShowMessage
              key={doc.id}
              id={doc.id}
              message={message}
              timestamp={timestamp}
              name={name}
              email={email}
              photoURL={photoURL}
                          />
                          );
        })}
        <div ref={chatRef} style={{ paddingBottom: '4rem'}} className="pb-16" />
   </main>     

        <div style={{alignItems: 'center', padding: '0.625rem', backgroundColor: '#40444b',  marginRight: '1.25rem', marginLeft: '1.25rem', marginBottom: '1.75rem', borderRadius: '0.5rem'}} class="flex">
        <HiPlusCircle class="hover:text-green-500 text-white" size='35px' style={{marginRight: '1rem', cursor: 'pointer'}} />
        <form style={{flexGrow: '1'}}>
          <input
            type="text"
            placeholder={
             "Select channel"
            }
            style={{backgroundColor: 'transparent', outline: '2px solid transparent', outlineOffset: '2px', color: '#dcddde', width: '100%', fontSize: '0.875rem', lineHeight: '1.25rem'          }}
            ref={inputRef}
          />
          <button hidden type="submit" onClick={sendMessage}>
            Send
          </button>
        </form>
      </div>
    </div>
</div>
    </>
);
};


export default ChannelChat;
