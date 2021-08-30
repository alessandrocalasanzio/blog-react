import React from 'react';



class Header extends React.Component {
    render() {
        return (
    <div>
       <header class="masthead" style={{ background: `url(${this.props.immagine})`}}>
        <div class="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="post-heading">
                            <h1 style={{textAlign: 'center'}} className="contact">{this.props.titolo}</h1>
                            <span class="meta" style={{textAlign: 'center'}} className="contact">
                               <div>{this.props.descrizione}</div>
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

export default Header;