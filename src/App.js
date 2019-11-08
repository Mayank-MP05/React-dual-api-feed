import React from 'react';
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Contact from './components/contact'
import About from "./components/about";
import Navbar from './components/navbar'
import Persondetails from './components/personDetails'
import Stack from './components/stack';

class App extends React.Component{

  state = {
    data:[]
  }

  getData = () => {
    console.log("btn-press");
    axios.get('https://jsonplaceholder.typicode.com/photos/?_limit=300')
      .then( resp => {
      console.log(resp.data);
      this.setState({
          data : resp.data
      });
    })
  }

  openDetail = () => {

  }

  render() {
    return (
      <div>
      <Router>
      <Navbar />
      <div className='container'>
      <Switch>
        <Route exact path="/feed" component={Stack} />        
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/:identity" component={Persondetails} />
      </Switch>
      </div>
      </Router>
      </div>
    );
  }  
} 
export default App;
