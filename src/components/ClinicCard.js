import React from 'react';
import { Row, Col } from 'reactstrap';
import { Card, CardBody,Button } from 'reactstrap';


import trash from "../images/trash.svg";


const ClinicCard = ({ onViewStudy, studyName }) => {


	return(
		  <Card className="mt-2 new-study-card">
		    <CardBody>
				 <Row>
				    <Col className="my-auto">{studyName}</Col>
				    <Col className="recruiting-status my-auto">Recruiting</Col>
				    <Col className="my-auto">May 05, 7:23PM PST</Col>

				    <Col className="my-auto">
				    	<span className="estimated-compensation-1">$500</span><br/>
				    	<span className="average-user-receive">average user receives $509.33</span>
				    </Col>
				    <Col className="my-auto">
				    	<Button className="view-study" onClick={onViewStudy}>View Study</Button>
				    	<Button className="rounded-circle ml-2 trash" ><img src={trash} alt="Logo" /></Button>
				    </Col>
				 </Row>
		    </CardBody>
		  </Card>
	);
}

export default ClinicCard;