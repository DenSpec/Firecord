// Fonctionnalité
import React, { useCallback, useContext } from "react";
import { withRouter, Redirect, Link } from "react-router-dom";
import database from "./backend/database.js";
import { AuthContext } from "./backend/Auth.js";
import { signInWithGoogle } from "./backend/database.js";
import { Button} from "@material-ui/core";

// Font Awesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import Logo from '../page/components/Logo'
// Si la personne est connecté, renvoie le vers /server/

const Login = ({ history }) => {

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/hometest/" />;
  }

// Sinon, laisse lui se connecté. 
  return (
  
    <>
  <Link className="text-none" to="/">
<Button startIcon={<FontAwesomeIcon icon={faHome} size="lg" />} variant="contained" style={{color: 'white', padding: "6px 60px", backgroundColor: '#A2CDCD', fontFamily: 'Poppins', float: 'right'}}> Home </Button>
</Link>

<Logo/>
<center>
<div id="sidebar">
      <div className="container">
      <div className="form-box">
      <div className="header-form">
      <h1> Salut ! Login toi pour avoir accès à des trucs méga secret. </h1>
      <h3> Aurevoir tout les formulaires à remplir juste pour s'inscrire... donc voilà juste un petit bouton ! </h3>
      <FontAwesomeIcon icon={faInfoCircle} size="lg" style={{color: "#B5DEFF"}}/> {' '}
      <h3 style={{margin: '0px', padding: '0px', display: 'inline', color: '#B5DEFF'}}> Pour informations, vous pourrez changé votre pseudo dans l'application</h3>
      <br></br>
      <p></p>

      <Button  variant="contained" style={{padding: "6px 60px", color: 'white', backgroundColor: '#42ba96', fontFamily: 'Poppins'}} onClick={signInWithGoogle}>Login avec google</Button>
      </div>
      </div>
      </div>
      </div>
</center>

</>

  );
    }
    
export default withRouter(Login);