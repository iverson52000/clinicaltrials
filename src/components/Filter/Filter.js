import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, 
	Container, CustomInput} from 'reactstrap';

import './Filter.css';

class Filter extends Component {
  constructor() {
	super ();
    this.state = {
    }
  }

  onFormChange = (event) => {
    switch(event.target.name) {
      case 'noPlacebo':
        this.setState({name: event.target.value})
        break;
      case 'remoteOnly':
        this.setState({age: event.target.value})
        break;
      default:
        return;
    }
  }

  render() {
    const { toggleModal, handleFilterChange, handleSubmit} = this.props;
    // const { name, age, pet } = this.state;
    return (
      <div className='filter-modal '>
		<Container className='modal-container px-5 pb-5'>
			<div className="d-flex flex-row-reverse py-0 modal-close" onClick={toggleModal}>&times;</div>
			<Form className="filter-form">
		   	  	<h2>Filter Clinical Trials</h2>
				<FormGroup>
					<Label for="fullname">Full Name</Label>
					<Input type="text" name="fullname" id="fullname" placeholder="Full Name" />
				</FormGroup>
				<FormGroup>
					<Label for="examplePassword">Email</Label>
					<Input type="email" name="email" id="email" placeholder="Email" />
				</FormGroup>
				<FormGroup>
					<Label for="HealthConditions">HealthConditions</Label>
					<Input type="text" name="HealthConditions" id="HealthConditions" placeholder="HealthConditions" />
				</FormGroup>
				<FormGroup>
					<Label for="exampleCheckbox">Biological</Label>
				<div>
					<CustomInput type="checkbox" id="exampleCustomCheckbox" label="All results" />
					<CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Female" />
					<CustomInput type="checkbox" id="exampleCustomCheckbox3" label="Male"/>
					<CustomInput type="checkbox" id="exampleCustomCheckbox4" label="Non-specific"/>
				</div>
				</FormGroup>
	  			<FormGroup tag="fieldset">
			        <Label>No Placebo</Label>
			        <FormGroup check>
			          <Label check>
						<Input type="radio" 
							value="true"
							name="placebo"
							// checked={filters.noPlacebo === "true"} 
							onChange={handleFilterChange}/>{' '}
			            	Yes
			          </Label>
			        </FormGroup>
			        <FormGroup check>
			          <Label check>
					  <Input type="radio" 
							value="false"
							name="placebo"
							onChange={handleFilterChange}/>{' '}
						    No
			          </Label>
			        </FormGroup>
			    </FormGroup>
				<FormGroup tag="fieldset">
			        <Label>Remote only</Label>
			        <FormGroup check>
			          <Label check>
						<Input type="radio" 
								value="true"
								name="remoteOnly"
								onChange={handleFilterChange}/>{' '}
			            Yes
			          </Label>
			        </FormGroup>
			        <FormGroup check>
			          <Label check>
					  <Input type="radio" 
								value="false"
								name="remoteOnly"
								onChange={handleFilterChange}/>{' '}
						No
			          </Label>
			        </FormGroup>
			    </FormGroup>
				<FormGroup>
					<Label for="country">Country</Label>
					<Input 
						type="text" 
						name="country" 
						id="country" 
						placeholder="Country" 
						onChange={handleFilterChange} 
					/>
				</FormGroup>
				<div className="d-flex justify-content-center">
					<Button onClick={toggleModal} className="btn-lg btn-danger mx-1 filter-botton">Cancel</Button>
					<Button onClick={handleSubmit} className="btn-lg btn-info mx-1 filter-botton">Apply</Button>
				</div>		  
			</Form>
		</Container>

      </div>
    );
  }
}


export default Filter;