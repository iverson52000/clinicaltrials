import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';


const EnrollBanner = () => {
	return(
	  <div >
	  	<Jumbotron className="mt-5 enroll">
			<Container>
				<Row>
				 	<Col sm="12" md="2"></Col>
			        <Col sm="12" md="3">
			        	Enroll in a Study Today How it works<br/>
			        	<Button className="enroll-button mt-3">Get Started</Button>
			        </Col>
			        <Col sm="12" md="2">Enter preferences and we will find the best studies near you</Col>
			        <Col sm="12" md="2">DoNotPay will contact the study on your behalf</Col>
			        <Col sm="12" md="">Earn 100% of the cash compensation</Col>
			    </Row>
			</Container>
      	</Jumbotron>
	  </div>
	);
}

export default EnrollBanner;