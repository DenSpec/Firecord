// Import des fonctionnalités
import React, { useState, useEffect} from 'react'
import { Route, Redirect, Link } from "react-router-dom";
import database from "../../../auth/backend/database";
import 'firebase/compat/auth';
import firebase from "firebase/compat/app";
import { auth } from "../../../auth/backend/database"
import { Avatar, Button} from "@material-ui/core"
import { Input } from '@material-ui/core'

// Font Awesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons/faPaperPlane';


export default function SendMessage() {
    const db = firebase.firestore()
    // Envoyer message
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL, displayName } = auth.currentUser
  
        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            displayName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
    }
    // Afficher messages
    const [messages, setMessages] = useState([])
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

  return (
      <>
    <form onSubmit={sendMessage}>
    <Input style={{fontFamily: 'Poppins', color: 'white'}} placeholder='Envoyer un message' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
    <Button   startIcon={<FontAwesomeIcon icon={faPaperPlane} style={{color: 'white'}} />}  style={{ backgroundColor: 'transparent', backgroundRepeat: 'no-repeat', border: 'none', cursor: 'pointer', overflow: 'hidden', outline: 'none'}} type="submit"></Button>
</form>
    </>
                    
                    );
}