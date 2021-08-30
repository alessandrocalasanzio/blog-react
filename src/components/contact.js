import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Header from '../components/HeaderAbout';
import universo1 from '../img/29965.jpg';

class Contact extends React.Component {
    render() {
        return(
<div>
                <Navbar/>
                <Header immagine={universo1} titolo={"Contatti"}/>
                <div>
                    <h5 className="aboutPres" style={{textAlign: "center"}}>
                        Per qualsiasi tipo di informazione o se desideri semplicemente collaborare con me
                        puoi contattarmi semplicemente mandandomi un email o scrivendomi su Istagram.
                        I modi per contattarmi li trovi nella barra inferiore del sito. 
                        
                    </h5>
                    <br/><br/><br/><br/><br/>
                </div>
                <Footer/>
</div>

        )
    }
}

export default Contact;