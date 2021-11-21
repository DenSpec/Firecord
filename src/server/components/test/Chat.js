// Import des fonctionnalités
import React, { useState, useEffect} from 'react'
import { Route, Redirect, Link } from "react-router-dom";
import database from "../../../auth/backend/database";
import 'firebase/compat/auth';
import firebase from "firebase/compat/app";
import { auth } from "../../../auth/backend/database"
import { Avatar, Button} from "@material-ui/core"
// Font Awesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
import { Input } from '@material-ui/core'
import { DiscordMention, DiscordMessage, DiscordMessages } from '@danktuary/react-discord-message';

export default function Chat() {
      
    const db = firebase.firestore()
    
    const [msg, setMsg] = useState('')
    // Afficher message
    const [messages, setMessages] = useState([])
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

  return (
      // Ce qu'il va afficher
      <div>
          
                {messages.map(({ id, text, photoURL, uid, displayName }) => (
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
            <DiscordMessages>

            <DiscordMessage author={displayName} avatar={photoURL}>
{text}

      </DiscordMessage>
                </DiscordMessages>

                        </div>
                       ))} 
           </div>  
                    );
}