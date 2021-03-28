
import './App.css';
import NameForm from'./formulaire/Formulaire.js'
import APropos from'./propos/APropos.js'
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Images from './img/Image.js'


const App = () => (
  <Router>
    <div className="App">
      <a className="App-header" href="/">
        Bonjour le Code
      </a>
      <Route exact path="/" component={Home} />
      <Route path="/formulaire" component={NameForm} />
      <Route path="/apropos" component={APropos} />
      
    </div>
  </Router>
);

function Home() {
  
  var indice = 0;
  function handleClick(choix){
    choix ? indice ++ : indice --;
  }
  
  return (<div className="App-body">
    <p className="Para"> Envoyez nous des images <Link to="/formulaire">ici</Link></p>
    <div>
      <p className="Header-img">
        <d> {Images[indice].date} </d>
        {indice == 0 ?<h> </h> :<button onClick={handleClick(0)}> image précédente </button>}
        {Object.keys(Images).length == (indice + 1) ?<h>   </h>:<button onClick={handleClick(1)}> image suivante </button>}

      </p>
    
      <img src={Images[indice].img} className="App-logo"/>
      <h> Proposé par {Images[indice].pseudo}</h>
      <a className="App-header" href="/apropos">
        A Propos
      </a>
    </div>
    
  </div>)
};

export default App;
