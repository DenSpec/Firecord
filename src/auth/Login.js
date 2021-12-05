// Fonctionnalité
import React, { useContext } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { AuthContext } from "./backend/Auth.js";
import './Login.css'


// Si la personne est connecté, renvoie le vers le home, en utilisant le AuthContext du 'backend/Auth.js'
const Login = ({ history }) => {

const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/home" />;
  }

// Sinon, laisse lui se connecté. 
  return (
  
    <>

<div className="Aposition test">
        <form className="Acontainer">
          <div className="Acentering-wrapper">
            <div className="Asection1">
              <div className="Aprimary-header">Welcome back!</div>
              <div className="Asecondary-header">We're so excited to see you again!</div>
              <div className="Ainput-position">
                <div className="Aform-group">
                  <h5 className="Ainput-placeholder" id="email-txt">Email<span className="Aerror-message" id="email-error" /></h5>
                  <input type="email" required="true" name="logemail" className="Aform-style" id="logemail" autoComplete="off" style={{marginBottom: '20px'}} />
                  <i className="Ainput-icon uil uil-at" />
                </div>	
                <div className="Aform-group">
                  <h5 className="Ainput-placeholder" id="pword-txt">Password<span className="Aerror-message" id="password-error" /></h5>
                  <input type="password" required="true" name="logpass" className="Aform-style" id="logpass" autoComplete="on" />
                  <i className="Ainput-icon uil uil-lock-alt" />
                </div>
              </div>
              <div className="Apassword-container"><a href="/register" className="Alink">Vous n'êtes pas encore inscrit ? </a></div>
              <div className="Abtn-position">
                <a href="#" className="Abtn">login</a>

              </div>
            </div>
          </div>
        </form>
      </div>

</>

  );
    }
    
export default withRouter(Login);