import React from 'react';



class HeaderArticolo extends React.Component {

  
    render() {
        return (
    <div>
         <header class="masthead" style={{ background: `url(${this.props.immagine})`}}>
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        <div class="post-heading">
                            <h1>{this.props.titolo}</h1>
                            <h2 class="subheading">{this.props.sottotitolo}</h2>
                            <span class="meta">
                                {this.props.autore}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    
    </div>
        )
    }
}

export default HeaderArticolo;