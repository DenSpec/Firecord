// Fonctionnalité 
import React, { } from 'react'
import { BsPlus } from 'react-icons/bs';
import { FaDiscord} from 'react-icons/fa';
import { IoSettings } from 'react-icons/io5';
import ServersShow from '../../server/ServerShow'
import { Link } from 'react-router-dom';
import '../../home.css'

// Firebase
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore"
import 'firebase/compat/auth';
import { auth } from "../../../../auth/backend/database"
import database from "../../../../auth/backend/database";
import firebase from "firebase/compat/app";

const Sidebar = () => { 

  const db = firebase.firestore()
  const [user] = useAuthState(auth)
  const [server] = useCollection(db.collection("server"));
 /* Le prompt correspond comme un input. Si il a bien 
  complèté, il va créé une nouvelle collection */
   
   const handleAddServer = () => {
    const serverName = prompt("Le nom de votre serveur : ")
    if (serverName) {
      db.collection("server").add({
        serverName: serverName,
      });
    }
  };
  
    const Separation = () => <hr className="sidebar-hr" />;
  const SideBarIcon = ({ icon }) => (
    <div className="sidebar-icon group">
      {icon}
    </div>
  );

    return (
<>
<div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg abcde">
<Link to="/hometest" style={{ textDecoration: 'none' }}>
  <SideBarIcon icon={<FaDiscord size="28" />} />
</Link>
<Separation/>
<div onClick={handleAddServer}>
        <SideBarIcon icon={<BsPlus size="32" />} />
</div>

{server?.docs.map((doc) => (
  <ServersShow
  key={doc.id}
  id={doc.id}
  serverName={doc.data().serverName}
  />
))}

<Separation/>
      <SideBarIcon icon={<IoSettings size="26" />} />
      </div>
    
  </>
  );
};


  export default Sidebar;
