import React, {Component} from 'react';
import './App.css';

import Modal from "./components/Modal/Modal";
import Filter from "./components/Filter/Filter";

import Header from './components/Header';
import Hero1 from './components/Hero1';
import Hero2 from './components/Hero2';
import CardList from './components/ClinicCardList';
import EnrollBanner from './components/EnrollBanner';
import StudyPage from './components/StudyPage/StudyPage';

const initialState = {
  route: "home",
  isFilterOpen: false,
  user: {
    id: "",
    name: "",
    email: "",
  },
};

class App extends Component {
  constructor(){
    super()
    this.state = initialState;
  }

  componentDidMount(){

  }

  onRouteChange = (route) => {
    if (route === "home") {
      this.setState({ route: "studypage" });
    }
    this.setState({ route: "home" });
  };

  onViewStudy= (route) => {
    // if (route === "home") {
    //   this.setState({ route: "studypage" });
    // }
    this.setState({ route: "studypage" });
  };



  toggleModal = () => {
    this.setState((prevState) => ({
      ...prevState,
      isFilterOpen: !prevState.isFilterOpen,
    }));
  };


  render(){
    const {
      route,
      isFilterOpen,
      user,
    } = this.state;

    return (
      <div>
        { route === "home" ? (
            <div className = 'container'>
              <Header />
              {isFilterOpen && (
                <Modal>
                  <Filter
                    isFilterOpen={isFilterOpen}
                    toggleModal={this.toggleModal}
                    user={user}
                    loadUser={this.loadUser}
                  />
                </Modal>
              )}
              <Hero1 toggleModal={this.toggleModal}/>
              <Hero2 />
              <h3>New Studies In Your Area</h3>
              <CardList onViewStudy={this.onViewStudy}/>
              <EnrollBanner/>
              <hr style={{height:"26px", borderWidth: "3px"}}/>
              <h3 className="mb-3">Studies You’ve Contacted</h3>
              <CardList onViewStudy={this.onViewStudy}/>
              <hr style={{height:"26px", borderWidth: "3px"}} className="mt-5"/>
              <div className="mb-5">
                <h3 className="mb-3">Studies You’ve Bookmarked</h3>
                <CardList onViewStudy={this.onViewStudy}/>
              </div>
            </div> ) : (
              <StudyPage onRouteChange={this.onRouteChange}/>
          )
        }
      </div>
    );
  }
}

export default App;
