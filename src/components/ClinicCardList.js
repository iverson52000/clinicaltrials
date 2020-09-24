import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ClinicCard from './ClinicCard';


const ClinicCardList = ({onViewStudy}) => {
	return(
		<Container className="px-0">
			 <Row>
		        <Col style={{marginLeft: '20px'}}>Study Name</Col>
		        <Col style={{marginLeft: '-5px'}}>Recruitment Status</Col>
		        <Col>Date/Time posted</Col>
		        <Col>Estimated Compensation</Col>
		        <Col></Col>
		     </Row>
		     <ClinicCard onViewStudy={onViewStudy}/>
		     <ClinicCard onViewStudy={onViewStudy}/>
		</Container>
	);
}

export default ClinicCardList;