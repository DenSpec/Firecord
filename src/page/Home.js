/* Fonctionnalités */

import React, {useRef} from 'react'
import structure from './assets/structure.PNG'
import general from './assets/general.PNG'
import img from './assets/images/section-3.svg'
import './homepage.css'

function TestApp2() {

  /* Petite fonctionnalités de scroll, pour le nav-items donation 
  Le fonctionnement est simple, on définit un élement par un executeScroll et
  quand une personne cliquera dessus, il va executer une autre fonction qui sera
  le myRef. Il suffit de définir maintenant un élement par un simple 'ref=MyRef'
  */
 
  const myRef = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView()    
    return (  
        <>
   <div>
        <section 
        className="hero ab">
          <header className="main-header container ">
            <nav className="main-nav">
              <a href="index.html" className="logo">
                <img src="./assets/images/logo.svg" alt="" />
              </a>
              <ul className="nav-list">
                <li className="nav-item">
                  <a href="https://github.com/DenSpec/DiscordClone"className="nav-link cursor-pointer">Github</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.youtube.com/" className="nav-link cursor-pointer">Youtube</a>
                </li>
                <li className="nav-item">
                  <a href="https://github.com/DenSpec/DiscordClone" className="nav-link cursor-pointer">Issues</a>
                </li>
                <li className="nav-item">
                  <a href="https://github.com/DenSpec/DiscordClone" className="nav-link cursor-pointer">Ideas</a>
                </li>
                <li className="nav-item">
                  <a onClick={executeScroll} className="nav-link cursor-pointer">Donations</a>
                </li>
              </ul>
              <div className="nav-items-right">
                <a href="/login" className="btn btn-small btn-light btn-login">Login</a>
                <span className="mobile-toggle">
                  <i className="bx bx-menu btn-open" />
                  <i className="bx bx-x btn-close" />
                </span>
              </div>
            </nav>
          </header>
          <div className="row container">
            <div className="hero-content-wrap">
              <h1 className="title primary-title">IMAGINE A DISCORD CLONE</h1>
              <p className="hero-description">Containing full documentation and using React for the client side and Firebase for the server.
              </p>
              <div className="hero-btn-group">
                <a href="https://github.com/DenSpec/DiscordClone" className="btn btn-large btn-light">
                  <i className="bx bx-download" />View in Github
                </a>
                <a href="/login" className="btn btn-large btn-dark">
                  Open Discord in your browser
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="collaboration ab">
          <div className="row container">
            <img src={general} width="1200px" alt=""  style={{  borderRadius: '2%'}}className="grid-image"/>
            <div className="text-group">
              <p style={{fontSize: '42px'}}className="font-bold"> Everything is done for you to understand. </p>
              <p>You must have struggled to visualize how the components are placed? No problem. I have what you need !</p>
            </div>
          </div>
        </section>
        <svg class="wave" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
    <path class="wave-path" d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="currentColor"></path>
    </svg>
        <section className="voice-channel ab">
          <div className="row container">
            <img src={structure} alt="" className="grid-image order-2" />
            <div className="text-group order-1">
            <p style={{fontSize: '42px'}}className="font-bold"> It's not over !</p>
              <p>Are you having trouble with all of his files? No worries, here is the file structure! </p>
            </div>
          </div>
        </section>
        <svg className="wave wave-inverted" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">--&gt;
          <path className="wave-path" d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="currentColor" />
        </svg>
        <section className="moderation-tools ab">
          <div className="row container">
            <img src={img} alt="" className="grid-image order-2" />
            <div className="text-group order-1">
              <p style={{fontSize: '42px'}}className="font-bold">What else?</p>
              <p>A video on youtube explaining all the operation is available! You just have to click <a href="video youtube" style={{color: '#94DAFF'}}>here</a></p>
            </div>
          </div>
        </section>
        <svg className="wave" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">--&gt;
          <path className="wave-path" d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="currentColor" />
        </svg>
        <section className="video-call ab">
          <div className="row container">
            <div className="text-group">
              <p ref={myRef} style={{fontSize: '50px'}}className="font-bold">DONATIONS 💵</p>
              <p>To support me, you just have to make a small donation to his address there:
              </p>
              <p>Ethereum : 0x7cad12dfd11bce3f29b96260b4739caa32c89a86</p>
              <p>Bitcoin : 3FahtNWC4tmZh1B72vz44TvBN2jHaQSnh4</p>
              
                          </div>
          </div>
        </section>
      </div>
                </>
    
  );
};
export default TestApp2;