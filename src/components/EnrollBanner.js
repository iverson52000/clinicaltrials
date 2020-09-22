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
			        <Col>
			        	Enroll in a Study Today How it works
			        	<Button className="enroll-button mt-3">Get Started</Button>
			        </Col>
			        <Col>Enter preferences and we will find the best studies near you</Col>
			        <Col>DoNotPay will contact the study on your behalf</Col>
			        <Col>Earn 100% of the cash compensation</Col>
			     </Row>
			</Container>
      	</Jumbotron>
	  </div>
	);
}

export default EnrollBanner;