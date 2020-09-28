import React, {Component} from 'react';
import { gql, useQuery } from '@apollo/client';

import './styles/App.css';

import Modal from "./components/Modal/Modal";
import Filter from "./components/Filter/Filter";

import Header from './components/Header';
import Hero1 from './components/Hero1';
import Hero2 from './components/Hero2';
import ClinicCardList from './components/ClinicCardList';
import EnrollBanner from './components/EnrollBanner';
import StudyPage from './components/StudyPage/StudyPage';

const initialState = {
  route: "home",
  isFilterOpen: false,
  filters: {
    Placebo: false,
    remoteOnly: false,
  },
  studies: {
    nctId: "",
    studyName: "",
  }
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

  handleOptionChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(this.state.filters["noPlacebo"])
    console.log(value)

    this.setState((prevState) => ({
      filters: {
        ...prevState.filters,
        [name]: value,
      }
    }), () => console.log(this.state.filters));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.filters)
    // const { plcebo, remoteOnly } = this.state.filters;

    // const GET_CLINICAL_TRIALS = gql`
    // {
    //   getClinicalTrials(
    //     input: {
    //       placebo: ${plcebo}
    //       remoteOnly: ${remoteOnly}
    //       country: "United States"
    //       state: "California"
    //       healthy: false
    //       biologicalSex: ALL
    //       genderBased: false
    //       studyType: INTERVENTIONAL
    //       pregnant: NONE
    //       substance: DRUGS
    //       healthConditions: []
    //     }
    //   ) {
    //     nctId
    //     studyName
    //   }
    // }
    // `;

    // const { loading, error, data } = useQuery(GET_CLINICAL_TRIALS);
	
    // if (loading) return 'Loading...';
    // if (error) return `Error! ${error.message}`;
    //   // return {data.me.id}
    // console.log(data.getClinicalTrials.slice(0, 5))

  }
  

  render(){
    const {
      route,
      isFilterOpen,
      filters,
    } = this.state;

    return (
      <div>
        { route === "home" ? (
            <div className = 'container'>
              <Header />
              {isFilterOpen && (
                <Modal>
                  <Filter
                    toggleModal={this.toggleModal}
                    filters={this.state.filters}
                    handleOptionChange={this.handleOptionChange}
                    handleSubmit={this.handleSubmit}
                  />
                </Modal>
              )}
              <Hero1 toggleModal={this.toggleModal}/>
              <Hero2 />
              <h3 className="study-title">New Studies In Your Area</h3>
              <ClinicCardList onViewStudy={this.onViewStudy}/>
              <EnrollBanner/>
              <hr style={{height:"26px", borderWidth: "3px"}}/>
              <h3 className="mb-3 study-title">Studies You’ve Contacted</h3>
              <hr style={{height:"26px", borderWidth: "3px"}} className="mt-5"/>
              <div className="mb-5">
                <h3 className="mb-3 study-title">Studies You’ve Bookmarked</h3>

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
