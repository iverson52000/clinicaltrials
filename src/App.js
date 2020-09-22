import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Hero1 from './components/Hero1';
import Hero2 from './components/Hero2';
import CardList from './components/CardList';

class App extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  componentDidMount(){

  }


  render(){
    return (
      <div className = 'container'>
        <Header />
        <Hero1 />
        <Hero2 />
        <h1>New Studies In Your Area</h1>
        <CardList/>
      </div>
    );
  }

}

export default App;
