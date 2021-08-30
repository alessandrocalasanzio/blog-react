import React from 'react';
import Navbar from '../components/navbar';
import Header from '../components/HeaderAbout';
import Footer from '../components/footer';
import universo from '../img/52157.jpg';


class About extends React.Component {
    render() {

        return(
            <div>
                <Navbar/>
                <Header immagine={universo} titolo={"Chi sono"} descrizione={"E perchè ho deciso di creare questo blog"}/>
                <div className="boxAbout">
                    <h5 className="aboutPres" style={{textAlign: "center"}}>
                    
                        Mi presento:<br></br> Mi chiamo Alex e l'idea di questo Blog è quella di condividere con chi leggerà
                        la mia esperienza, i miei consigli ma anche chi sono.<br></br>
                        Anni di esperienza mi hanno permesso di crearmi un proprio Portfolio variegato, sia nel mondo del lavoro sia 
                        per quanto riguarda gli Hobby personali.<br></br>
                        Ecco perche articoli e consigli spazieranno a 360° dall'informatica, al lavoro, dai videogiochi alla musica.<br></br>
                        Che il viaggio abbia inizio.
                    </h5>
                    
                </div>
                <Footer/>
                
            </div>
        )
    }
}

export default About;