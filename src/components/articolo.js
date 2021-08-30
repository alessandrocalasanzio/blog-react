import React from 'react';
import spazio from '../img/spazio.jpg';
import spazio1 from '../img/spazio1.jpg';
import Navbar from '../components/navbar';
import Header1 from '../components/HeaderArticolo';
import BodyArticolo from '../components/BodyArticolo';
import Footer from '../components/footer';

class Articolo extends React.Component {
    state = {
        articoli:[ {id:0, immagine: spazio , titolo:'Il primo Articolo del Blog!', sottotitolo:'Eccoci qui', autore:'Scritto da Calasanzio Alessandro il 16/07/2021'},
    
        ]
};


    render(){
        return(
            <div>
                <title>Blog di Calasanzio Alessandro</title>
            <Navbar/>
            {this.state.articoli.map(articolo=>(
                <Header1 key={articolo.id} immagine={articolo.immagine} titolo={articolo.titolo} sottotitolo={articolo.sottotitolo} autore={articolo.autore}/>
            ))}
            <BodyArticolo imm={spazio1}/>
            <Footer/>

            </div>
        )
    }
}

export default Articolo;
