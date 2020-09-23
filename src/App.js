import React, {Component} from 'react';
import './App.css';

import Modal from "./components/Modal/Modal";
import Filter from "./components/Filter/Filter";

import Header from './components/Header';
import Hero1 from './components/Hero1';
import Hero2 from './components/Hero2';
import CardList from './components/CardList';
import EnrollBanner from './components/EnrollBanner';

const initialState = {
  input: "",
  imageUrl: "",
  box: {},
  route: "signin",
  isProfileOpen: false,
  isSignedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
    age: 0,
    pet: "",
  },
};

class App extends Component {
  constructor(){
    super()
    this.state = initialState;
  }

  componentDidMount(){

  }

  toggleModal = () => {
    this.setState((prevState) => ({
      ...prevState,
      isProfileOpen: !prevState.isProfileOpen,
    }));
  };


  render(){
    const {
      isSignedIn,
      imageUrl,
      route,
      box,
      isProfileOpen,
      user,
    } = this.state;

    return (
      <div className = 'container'>
        <Header />
        {isProfileOpen && (
          <Modal>
            <Filter
              isProfileOpen={isProfileOpen}
              toggleModal={this.toggleModal}
              user={user}
              loadUser={this.loadUser}
            />
          </Modal>
        )}
        <Hero1 toggleModal={this.toggleModal}/>
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
