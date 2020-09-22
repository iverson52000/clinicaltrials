import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const CardList = () => {
	return(
		<Container>
			 <Row>
		        <Col>Study Name</Col>
		        <Col>Recruitment Status</Col>
		        <Col>Date/Time posted</Col>
		        <Col>Estimated Compensation</Col>
		        <Col></Col>
		     </Row>
		</Container>
	);
}

export default CardList;