import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Hero1 from './components/Hero1';
import Hero2 from './components/Hero2';
import CardList from './components/CardList';
import EnrollBanner from './components/EnrollBanner';

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
        <h3>New Studies In Your Area</h3>
        <CardList/>
        <EnrollBanner/>
        <hr style={{height:"26px", borderWidth: "3px"}}/>
        <h3 className="mb-3">Studies You’ve Contacted</h3>
        <CardList/>
        <hr style={{height:"26px", borderWidth: "3px"}} className="mt-5"/>
        <div className="mb-5">
          <h3 className="mb-3">Studies You’ve Bookmarked</h3>
          <CardList/>
        </div>
      </div>

    );
  }

}

export default App;
