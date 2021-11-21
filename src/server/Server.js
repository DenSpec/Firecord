// Fonctionnalité 
import React from 'react'
import database from "../auth/backend/database";
import 'firebase/compat/auth';
import { Button} from "@material-ui/core"

// Affichage :
const Server = () => {

  return (
    <>
    <Button variant="contained" color="primary"  size="large" style={{float: 'right', fontFamily: 'Poppins'}} onClick={() => database.auth().signOut()}>Sign out </Button>

       </>
  );
};






export default Server
