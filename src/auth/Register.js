// Fonctionnalité
import React, { useCallback, useContext, useRef } from "react";
import { withRouter, Redirect, Link } from "react-router-dom";
import database from "./backend/database.js";
import firebase from 'firebase/compat/app'
import { AuthContext } from "./backend/Auth.js";
import { signInWithGoogle } from "./backend/database.js";
import { Button} from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import './Login.css'
import Swal from 'sweetalert2'
// Si la personne est connecté, renvoie le vers /server/

const Register = ({ history }) => {
    const db = firebase.firestore()
    const inputRef = useRef("");
  const { currentUser } = useContext(AuthContext);

  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await database
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/hometest");
    } catch (error) {
        Swal.fire({
            title: 'Error :',
            icon: 'warning',
            text:(error),
        });  
      } 

  }, [history]);

  if (currentUser) {
    return <Redirect to="/hometest/" />;
  }

  const username = (e) => {
    e.preventDefault();
    if (inputRef.current.value !== "") {
      db.collection("username").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        username: inputRef.current.value,
    });
}
};


  // Sinon, laisse lui se connecté. 
  return (
  
    <>

<div className="Aposition test">
        <form className="Acontainer" onSubmit={handleSignUp}>
          <div className="Acentering-wrapper">
            <div className="Asection1 text-center">
              <div className="Aprimary-header">Bienvenue! </div>
              <div className="Asecondary-header">Veuillez vous inscrire.</div>
              <div className="Ainput-position">
              <div className="Aform-group">
                  <h5 className="Ainput-placeholder" id="email-txt">Username<span className="Aerror-message" id="email-error" /></h5>
                  <input             ref={inputRef} type="username" required="true" name="username" className="Aform-style" style={{marginBottom: '20px'}} />
                  <i className="Ainput-icon uil uil-at" />
                </div>	

                <div className="Aform-group">
                  <h5 className="Ainput-placeholder" id="email-txt">Email<span className="Aerror-message" id="email-error" /></h5>
                  <input name="email" required="true" type="email" className="Aform-style" style={{marginBottom: '20px'}}/>
                  <i className="Ainput-icon uil uil-at" />
                </div>	
                <div className="Aform-group">
                  <h5 className="Ainput-placeholder" id="pword-txt">Password<span className="Aerror-message" id="password-error" /></h5>
                  <input type="password" required="true" name="password" className="Aform-style" style={{marginBottom: '20px'}}/>
                  <i className="Ainput-icon uil uil-lock-alt" />
                </div>
              </div>
              <div className="Apassword-container"><a href="/login" className="Alink">Vous êtes déjà inscris ?  </a></div>
              <div className="Abtn-position">
                <button  onClick={username}  className="Abtn">register</button>

              </div>
            </div>
          </div>
        </form>
      </div>
      
      
</>

  );
    }
    
export default withRouter(Register);