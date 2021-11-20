import React from 'react'
import './test.css'
import structure from './assets/structure.PNG'
import general from './assets/general.PNG'
import img from './assets/images/section-3.svg'
function TestApp2() {
    return (  
        <>
   <div>
        <section className="hero">
          <header className="main-header container">
            <nav className="main-nav">
              <a href="index.html" className="logo">
                <img src="./assets/images/logo.svg" alt="" />
              </a>
              <ul className="nav-list">
                <li className="nav-item">
                  <a href className="nav-link">Download</a>
                </li>
                <li className="nav-item">
                  <a href className="nav-link">Why discord?</a>
                </li>
                <li className="nav-item">
                  <a href className="nav-link">Nitro</a>
                </li>
                <li className="nav-item">
                  <a href className="nav-link">Safety</a>
                </li>
                <li className="nav-item">
                  <a href className="nav-link">Support</a>
                </li>
              </ul>
              <div className="nav-items-right">
                <a href="#" className="btn btn-small btn-light btn-login">Login</a>
                <span className="mobile-toggle">
                  <i className="bx bx-menu btn-open" />
                  <i className="bx bx-x btn-close" />
                </span>
              </div>
            </nav>
          </header>
          <div className="row container">
            <div className="hero-content-wrap">
              <h1 className="title primary-title">IMAGINE UN DISCORD CLONE</h1>
              <p className="hero-description">Contenant une documentation complète et en utilisant React pour le côté client et Firebase pour le serveur.
              </p>
              <div className="hero-btn-group">
                <a href="#" className="btn btn-large btn-light">
                  <i className="bx bx-download" />View in Youtube
                </a>
                <a href="#" className="btn btn-large btn-dark">
                  Open Discord in your browser
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="collaboration">
          <div className="row container">
            <img src={general} width="1200px" alt=""  style={{  borderRadius: '2%'}}className="grid-image"/>
            <div className="text-group">
              <h2 className="title secondary-title">Tout est fait pour que tu comprennes.</h2>
              <p>Tu as dû mal à te visualiser comment les components sont placé ? Pas de soucis. J'ai ce qu'il te faut !</p>
            </div>
          </div>
        </section>
        <svg class="wave" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
    <path class="wave-path" d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="currentColor"></path>
    </svg>
        <section className="voice-channel">
          <div className="row container">
            <img src={structure} alt="" className="grid-image order-2" />
            <div className="text-group order-1">
              <h2 className="title secondary-title">C'est pas fini !</h2>
              <p>Tu as du mal avec tous ses fichiers ? Pas de soucis, voici la structure des fichiers ! </p>
            </div>
          </div>
        </section>
        <svg className="wave wave-inverted" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">--&gt;
          <path className="wave-path" d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="currentColor" />
        </svg>
        <section className="moderation-tools">
          <div className="row container">
            <img src={img} alt="" className="grid-image order-2" />
            <div className="text-group order-1">
              <h2 className="title secondary-title">Quoi, encore ?!</h2>
              <p>Une vidéo sur youtube expliquant tout le fonctionnement est disponnible ! Tu as juste à cliqué par <a href="video youtube" style={{color: 'blue'}}>ici</a></p>
            </div>
          </div>
        </section>
        <svg className="wave" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">--&gt;
          <path className="wave-path" d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="currentColor" />
        </svg>
        <section className="video-call">
          <div className="row container">
            <div className="text-group">
              <h2 className="title secondary-title">RELIABLE TECH FOR STAYING CLOSE</h2>
              <p>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
            </div>
            <img src="./assets/images/section-4.svg" alt="" className="grid-image" />
          </div>
        </section>
        <section className="download">
          <div className="row container remove-grid">
            <img className="sparkles" src="./assets/images/sparkles.svg" alt="" />
            <h2>Ready to start the journey?</h2>
            <a href className="btn btn-large btn-brand">
              <i className="bx bx-download" />Download for Windows
            </a>
          </div>
        </section>
      </div>
                </>
    
  );
};
export default TestApp2;