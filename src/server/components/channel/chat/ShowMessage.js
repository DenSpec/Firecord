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
import {HiTrash} from 'react-icons/hi'
// Firebase
import { selectChannelId, selectChannelName } from  '../../../../store/ChannelSlice'

function ShowMessage({ id, message, timestamp, name, email, photoURL }) {
  const channelId = useSelector(selectChannelId);
  const [user] = useAuthState(auth);
  const db = firebase.firestore()
  return (
<DiscordMessage author={name} avatar={photoURL}>
  <p style={{fontSize: '20px'}}> {message} </p>
        </DiscordMessage>

      )}

      export default ShowMessage;
