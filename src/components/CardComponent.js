import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const CardComponent = () => {
	return(
		  <Card className="mt-2">
		    <CardBody>
				 <Row>
				    <Col className="my-auto">Blood Drive</Col>
				    <Col className="my-auto">Recruiting</Col>
				    <Col className="my-auto">May 05, 7:23PM PST</Col>
				    <Col>
				    	<span>$500</span><br/>
				    	<span>average user receives $509.33</span>
				    </Col>
				    <Col className="my-auto">
				    	<Button className="view-study">View Study</Button>
				    	<Button className="rounded-circle ml-2">T</Button>
				    </Col>
				 </Row>
		    </CardBody>
		  </Card>
	);
}

export default CardComponent;