import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

class Post extends React.Component {
    render() {
        return(
            <section class="container-fluid risoluzione">
            <div class="responsive1 filterDiv tecnologia">
            <div class="gallery">
              <div class="content">
                <div class="content-overlay">
                    <div class="card">
                      <img src={this.props.post.immagine} class="card-img-top" alt="..." style={{maxWidth:'auto', maxHeight: '50px'}}/>
                      <div class="card-body" >
                        <h5 class="card-title">{this.props.post.titolo}</h5>
                        <p class="card-text">{this.props.post.descrizione}</p>
                        
                        <p class="card-text"><small class="text-muted">{this.props.post.aggiornamento}</small></p>
                        <button class="btn1 big-button"><Link to={this.props.post.articolo}>Leggi</Link></button>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          </section>
        )
    }
}

export default Post;