import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';


const EnrollBanner = () => {
	return(
	  <div >
	  	<Jumbotron className="mt-5 enroll">
			<Container>
				 <Row>
				 	<Col></Col>
			        <Col sm="12">
			        	Enroll in a Study Today How it works
			        	<Button className="enroll-button mt-3">Get Started</Button>
			        </Col>
			        <Col sm="12">Enter preferences and we will find the best studies near you</Col>
			        <Col sm="12">DoNotPay will contact the study on your behalf</Col>
			        <Col sm="12">Earn 100% of the cash compensation</Col>
			     </Row>
			</Container>
      	</Jumbotron>
	  </div>
	);
}

export default EnrollBanner;