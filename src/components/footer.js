import React from 'react';
import IG from '../img/IG.png';
import Mail from '../img/Mail.png';
import '../App.css';
import Popover from '../components/Popover.js';
import Popover1 from '../components/Popover1';

class Footer extends React.Component {
    render() {
        return (
            <footer style={{backgroundColor:'#282828'}}>
            <div className="container" >
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <ul className="list-inline text-center">
                            <li className="list-inline-item">
                            <Popover1 immagine={Mail} descrizione={"acalasanzio@outlook.com"} titolo={"Mail"} placement={"left"} alt={"Mail"}/>
                                  
                            </li>

                            <li className="list-inline-item"></li>
                            
                            <li class="list-inline-item">

                            <Popover immagine={IG} descrizione={"@AlecaiBlog"} titolo={"Instagram"} placement={"right"} alt={"IG"}/>
                                
                            </li>
                        </ul>
                        <p class="copyright text-muted"><b style={{color: 'white'}}>Copyright &copy;2021. Tutti i diritti riservati.</b></p>
                        
                    </div>
                </div>
            </div>
          </footer>
        );
    }
}

export default Footer;