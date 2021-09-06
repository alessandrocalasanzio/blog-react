import React,{useState} from 'react';
import Navbar from './components/navbar';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './components/post.js';
import Nero from './img/Nero.jpg';
import Footer from './components/footer.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import Articolo from './components/articolo';
import Home from './components/home.js';









const posts= [
  {id:0, immagine: Nero, titolo:'MUSICA', descrizione:'Il primo articolo del Blog!', aggiornamento:'Il primo articolo del Blog!', sezione:'musica', articolo:'/articolo'},
  {id:7, immagine: Nero, titolo:'TECNO', descrizione:'Coming Soon', aggiornamento:'In aggiornamento', sezione:'tecnologia'},
  {id:4, immagine: Nero, titolo:'VIDEOGIOCHI', descrizione:'Coming Soon', aggiornamento:'In aggiornamento', sezione:'videogiochi'},
  {id:3, immagine: Nero, titolo:'FILM', descrizione:'Coming Soon', aggiornamento:'In aggiornamento', sezione:'film'},
  {id:2, immagine: Nero, titolo:'CONSIGLI', descrizione:'Coming Soon', aggiornamento:'In aggiornamento', sezione:'consigli'},
];



function App(props){

  const [state,setState]= useState(posts);


  const filtra=(e)=>{
    let word= e.target.value;

    if(word === 'All'){
      setState(posts);
    }
    else if(word==='tecnologia'){
      const filtered= posts.filter(post=>post.sezione==='tecnologia');
      setState(filtered);
    }
    else if(word==='musica'){
      const filtered= posts.filter(post=>post.sezione==='musica');
      setState(filtered);
    }
    else if(word==='videogiochi'){
      const filtered= posts.filter(post=>post.sezione==='videogiochi');
      setState(filtered);
    }
    else if(word==='film'){
      const filtered= posts.filter(post=>post.sezione==='film');
      setState(filtered);
    }
    else if(word==='consigli'){
      const filtered= posts.filter(post=>post.sezione==='consigli');
      setState(filtered);
    }
  }

  
    return (
      
      
        <Router basename={window.location.pathname || ''}>
        <Switch>
       <Route exact path="/home" component={Home} />
       <Route exact path="/about" component={About}></Route>
       <Route exact path="/contact" component={Contact}></Route>
       <Route exact path="/articolo" component={Articolo}></Route>
     
     
       
       
      <div className="App">
       <Navbar/>
       <section className="container-fluid">
        <div className="position-body responsive">
            <div id="myBtnContainer">
                <button className="btn1 big-button" value='All' onClick={filtra}> Mostra Tutto</button>
                <button className="btn1 big-button" value='tecnologia' onClick={filtra}> Tecnologia</button>
                <button className="btn1 big-button" value='musica' onClick={filtra}>Musica</button>
                <button className="btn1 big-button" value='videogiochi'onClick={filtra}> Videogiochi</button>
                <button className="btn1 big-button" value='film'onClick={filtra}>Film-SerieTv</button>
                <button className="btn1 big-button" value='consigli'onClick={filtra}>Consigli</button>
            </div>
        </div>
    </section>
       <br/>
       <hr/>
       
       <div className="container-fluid">
      {state.map(post =>(
        <Post key={post.id} post={post} sezione={post.sezione}/>
      ))}
      </div>
      <div class="clearfix"></div>
      <br/>
      <hr/>
      
      <Footer/>
      </div>
      </Switch>
      </Router>
      
    );
  }

 

export default App;
