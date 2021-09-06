/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect }  from 'react';
import bape from '../img/bape.jpg';
import { debounce } from '../utilities/helpers';  
import '../App.css';
import {Link} from 'react-router-dom';
import '../App.js';
import home from '../img/home.png';



const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0); 
  const [visible, setVisible] = useState(true);  

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

  

  return (
  
    <div id="navbar" style={{ top: visible ? '0' : '-75px' }} >
        <nav class=" navbar navbar-expand-lg navbar-dark " style={{backgroundColor:'black'}}>
         
         <Link to="/home">
          <a class="navbar-brand"><img src={home} alt="Alex" title="Alex" width="50" height="50"/></a>
          </Link>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
             </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                    

                      
                     
                      <Link to="/about">
                      <a class="nav-link" href="aboutme.html"><b>Chi Sono &ensp; </b></a>
                      </Link>
                        <Link to="/contact">
                        <a class="nav-link" href="contact.html"><b> Contatti</b></a>
                        </Link>
                        
                    </li>
                </ul>


            </div>
        </nav>
    </div>

  );
};

export default Navbar;