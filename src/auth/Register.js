// Fonctionnalité
import React, { useCallback, useContext, useRef } from "react";
import { withRouter, Redirect } from "react-router-dom";
import database from "./backend/database.js";
import firebase from 'firebase/compat/app'
import { AuthContext } from "./backend/Auth.js";
import './Login.css'
import Swal from 'sweetalert2'

const Register = ({ history }) => {
  const db = firebase.firestore()
  const inputRef = useRef("");
  const { currentUser } = useContext(AuthContext);

  /* La fonction pour s'incrire, appelé 'handleSignUp' 

  1) On créé une nouvelle collection et document qui sera composé de timestamp (date de création)
  et de l'username. L'username sera choisis quand il écrira dans l'inputRef (qui est dans l'Input Username)
  tout ça à l'aide de Firestore.
  
  2) On n'utilise ensuite une des fonctionnalités de Firebase, le 'createUserWithEmailAndPassword'.
  */
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    if (inputRef.current.value !== "") {
    db.collection("username").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      username: inputRef.current.value,
  }); 
    }
    const { email, password } = event.target.elements;
    try {
      /* Quand il a fini de se connecté, on le renvoie vers le home */
      await database
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/home");
    } catch (error) {
      /* Les erreurs sont affiché dans une simple Popup SweetAlert2 */
        Swal.fire({
            title: 'Error :',
            icon: 'warning',
            text:(error),
        }); 
      } 
  }, [history]);

  /* Si l'utilisateur est déjà connecté, on le renvoie vers le home */
  if (currentUser) {
    return <Redirect to="/home" />;
  }



  // Sinon, laisse lui se connecté. 
  return (
  
    <>

<div className="Aposition test">
        <form className="Acontainer" onSubmit={handleSignUp}>
          <div className="Acentering-wrapper">
            <div className="Asection1">
              <div className="Aprimary-header">Welcome! </div>
              <div className="Asecondary-header">I welcome you, register.</div>
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
              <div className="Apassword-container"><a href="/login" className="Alink">Already registered? </a></div>
              <div className="Abtn-position">
                <button type="submit" className="Abtn">register</button>

              </div>
            </div>
          </div>
        </form>
      </div>
      
      
</>

  );
    }
    
export default withRouter(Register);